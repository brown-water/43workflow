/**
 * src/core/store.js
 * 
 * Centralized client-side state store for the Master Planner.
 * Respects strict NMCI zero-install environment constraints.
 */

import { linkAndReconcile } from './ingestion.js';
import { generateSyncAlerts, generateCOIntentAlerts } from './diffEngine.js';

class StateStore {
  constructor() {
    this.state = {
      intentDb: null,
      oaisRoster: null,
      subevalHistory: null,
      coExport: null,
      masterDb: null,
      activeOfficerSsn: null,
      currentAlerts: []
    };
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  getState() {
    return this.state;
  }

  loadIntent(data) {
    this.state.intentDb = data;
    if (!this.state.masterDb) {
      this.state.masterDb = JSON.parse(JSON.stringify(data));
    } else {
      // Merge in intent information
      for (const ssn in data.officers) {
        if (this.state.masterDb.officers[ssn]) {
          this.state.masterDb.officers[ssn].placementIntent = data.officers[ssn].placementIntent;
          this.state.masterDb.officers[ssn].detailerIntent = data.officers[ssn].detailerIntent;
        } else {
          this.state.masterDb.officers[ssn] = data.officers[ssn];
        }
      }
    }
    this.rebuildMasterDb();
  }

  loadSupply(roster) {
    this.state.oaisRoster = roster;
    this.rebuildMasterDb();
  }

  loadSubeval(history) {
    this.state.subevalHistory = history;
    this.rebuildMasterDb();
  }

  loadCoExport(coExportData) {
    this.state.coExport = coExportData;
    this.notify();
  }

  rebuildMasterDb() {
    if (this.state.oaisRoster) {
      const history = this.state.subevalHistory || {};
      const compiled = linkAndReconcile(this.state.oaisRoster, history);
      
      if (!this.state.masterDb) {
        this.state.masterDb = compiled;
      } else {
        // Merge oais details but preserve placement/detailer intent
        for (const ssn in compiled.officers) {
          if (this.state.masterDb.officers[ssn]) {
            const oldIntent = this.state.masterDb.officers[ssn].placementIntent;
            const oldDet = this.state.masterDb.officers[ssn].detailerIntent;
            const oldBreakout = this.state.masterDb.officers[ssn].fitrepHistory.reduce((acc, f) => {
              if (f.hardBreakout) acc[f.reportId] = f.hardBreakout;
              return acc;
            }, {});

            this.state.masterDb.officers[ssn] = compiled.officers[ssn];
            this.state.masterDb.officers[ssn].placementIntent = oldIntent;
            this.state.masterDb.officers[ssn].detailerIntent = oldDet;
            
            // Restore qualitative overlays
            this.state.masterDb.officers[ssn].fitrepHistory.forEach(f => {
              if (oldBreakout[f.reportId]) f.hardBreakout = oldBreakout[f.reportId];
            });
          } else {
            this.state.masterDb.officers[ssn] = compiled.officers[ssn];
          }
        }
        this.state.masterDb.commands = compiled.commands;
        this.state.masterDb.billets = compiled.billets;
      }

      if (!this.state.intentDb) {
        this.state.intentDb = JSON.parse(JSON.stringify(this.state.masterDb));
      }
    }
    this.notify();
  }

  runDiffEngine() {
    if (!this.state.intentDb) return;
    
    let alerts = [];

    // Case A: Compare against OAIS supply roster
    if (this.state.oaisRoster) {
      alerts = alerts.concat(generateSyncAlerts(this.state.oaisRoster, this.state.intentDb));
    }

    // Case B: Compare against CO Export
    if (this.state.coExport) {
      alerts = alerts.concat(generateCOIntentAlerts(this.state.coExport, this.state.intentDb));
    }

    this.state.currentAlerts = alerts;
    this.notify();
  }

  syncPRDToOAIS(ssn, oaisPRD, alertIdx) {
    if (!this.state.masterDb || !this.state.masterDb.officers[ssn]) return;
    const officer = this.state.masterDb.officers[ssn];
    const oldPRD = officer.placementIntent.intentPRD || officer.oaisPRD;

    officer.placementIntent.intentPRD = oaisPRD;
    officer.placementIntent.historicalPRDLog.push({
      date: new Date().toISOString().split('T')[0],
      oldPRD: oldPRD,
      newPRD: oaisPRD,
      source: 'Detailer Update (OAIS Sync)',
      user: 'Detailer',
      changeNote: 'Synced with OAIS Legal Ground Truth.'
    });

    if (this.state.intentDb && this.state.intentDb.officers[ssn]) {
      this.state.intentDb.officers[ssn].placementIntent = officer.placementIntent;
    }

    this.state.currentAlerts.splice(alertIdx, 1);
    this.notify();
  }

  acknowledgeCOConflict(ssn, requestedPRD, note, alertIdx) {
    if (!this.state.masterDb || !this.state.masterDb.officers[ssn]) return;
    const officer = this.state.masterDb.officers[ssn];
    const oldPRD = officer.placementIntent.intentPRD || officer.oaisPRD;

    officer.placementIntent.intentPRD = requestedPRD;
    officer.placementIntent.historicalPRDLog.push({
      date: new Date().toISOString().split('T')[0],
      oldPRD: oldPRD,
      newPRD: requestedPRD,
      source: 'CO Intent Acknowledge',
      user: 'Detailer',
      changeNote: note
    });

    if (this.state.intentDb && this.state.intentDb.officers[ssn]) {
      this.state.intentDb.officers[ssn].placementIntent = officer.placementIntent;
    }

    this.state.currentAlerts.splice(alertIdx, 1);
    this.notify();
  }

  updateOfficerPRD(ssn, newPRD, reason) {
    if (!this.state.masterDb || !this.state.masterDb.officers[ssn]) return;
    const officer = this.state.masterDb.officers[ssn];
    const oldPRD = officer.placementIntent.intentPRD || officer.oaisPRD;

    officer.placementIntent.intentPRD = newPRD;
    officer.placementIntent.historicalPRDLog.push({
      date: new Date().toISOString().split('T')[0],
      oldPRD: oldPRD,
      newPRD: newPRD,
      source: 'Detailer Update',
      user: 'Detailer',
      changeNote: reason
    });

    if (this.state.intentDb && this.state.intentDb.officers[ssn]) {
      this.state.intentDb.officers[ssn].placementIntent = officer.placementIntent;
    }

    if (this.state.oaisRoster) {
      this.runDiffEngine();
    } else {
      this.notify();
    }
  }

  updateOfficerBreakout(ssn, reportId, hardBreakout) {
    if (!this.state.masterDb || !this.state.masterDb.officers[ssn]) return;
    const officer = this.state.masterDb.officers[ssn];
    
    officer.fitrepHistory.forEach(f => {
      if (f.reportId === reportId) {
        f.hardBreakout = hardBreakout;
      }
    });

    if (this.state.intentDb && this.state.intentDb.officers[ssn]) {
      this.state.intentDb.officers[ssn].fitrepHistory = officer.fitrepHistory;
    }
    this.notify();
  }

  setActiveOfficer(ssn) {
    this.state.activeOfficerSsn = ssn;
    this.notify();
  }
}

export const store = new StateStore();
