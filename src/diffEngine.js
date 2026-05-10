/**
 * src/diffEngine.js
 * 
 * Core Diff Engine logic in Vanilla JS.
 */

/**
 * @typedef {Object} OAISOfficerData
 * @property {import('./schema.js').SSN} ssn
 * @property {import('./schema.js').DateString} oaisPRD
 * @property {string} currentUIC
 */

/**
 * @typedef {Object} SyncAlert
 * @property {import('./schema.js').SSN} ssn
 * @property {string} officerName
 * @property {'PRD_MISMATCH' | 'UIC_MISMATCH' | 'MISSING_IN_OAIS' | 'CO_INTENT_CONFLICT'} type
 * @property {string} message
 * @property {string|null} oaisValue
 * @property {string|null} intentValue
 */

/**
 * Core Diff Engine: Compares Legal Status (OAIS) against the Detailer/Placement Intent.
 * 
 * @param {Record<string, OAISOfficerData>} oaisData A dictionary of parsed OAIS records, keyed by SSN.
 * @param {import('./schema.js').MasterDatabase} intentDb The Master Database (Intent of Record).
 * @returns {SyncAlert[]} An array of SyncAlert objects highlighting discrepancies.
 */
export function generateSyncAlerts(oaisData, intentDb) {
  const alerts = [];

  for (const ssn in intentDb.officers) {
    const officer = intentDb.officers[ssn];
    const oaisRecord = oaisData[ssn];

    // Case 1: Officer in Intent but not found in OAIS dump
    if (!oaisRecord) {
       alerts.push({
         ssn,
         officerName: officer.name,
         type: 'MISSING_IN_OAIS',
         message: `Officer ${officer.name} is in the Master Planner but missing from the OAIS data drop.`,
         oaisValue: null,
         intentValue: 'Exists in DB',
       });
       continue;
    }

    // Case 2: PRD Mismatch
    const intentPRD = officer.placementIntent.intentPRD;
    if (intentPRD && intentPRD !== oaisRecord.oaisPRD) {
      alerts.push({
        ssn,
        officerName: officer.name,
        type: 'PRD_MISMATCH',
        message: `PRD Mismatch for ${officer.name}. Intent: ${intentPRD}, OAIS: ${oaisRecord.oaisPRD}`,
        oaisValue: oaisRecord.oaisPRD,
        intentValue: intentPRD,
      });
    }
  }

  return alerts;
}

/**
 * Compares a Squadron Export (returned by a CO with their requests) against the Master Database Intent.
 * 
 * @param {import('./schema.js').SquadronExport} coExport The JSON export object modified by the CO.
 * @param {import('./schema.js').MasterDatabase} intentDb The Master Database.
 * @returns {SyncAlert[]} An array of SyncAlert objects highlighting conflicts.
 */
export function generateCOIntentAlerts(coExport, intentDb) {
  const alerts = [];

  for (const coOfficer of coExport.officers) {
    const dbOfficer = intentDb.officers[coOfficer.ssn];
    
    if (!dbOfficer) {
      continue; 
    }

    const intentPRD = dbOfficer.placementIntent.intentPRD || dbOfficer.oaisPRD;
    
    if (coOfficer.coIntentPRD && coOfficer.coIntentPRD !== intentPRD) {
      alerts.push({
        ssn: coOfficer.ssn,
        officerName: dbOfficer.name,
        type: 'CO_INTENT_CONFLICT',
        message: `CO requested PRD change for ${dbOfficer.name}. Requested: ${coOfficer.coIntentPRD}. Current Intent: ${intentPRD}. Notes: ${coOfficer.coNotes || 'None'}`,
        oaisValue: coOfficer.coIntentPRD,
        intentValue: intentPRD,
      });
    }
  }

  return alerts;
}
