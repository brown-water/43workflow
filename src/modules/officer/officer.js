/**
 * src/modules/officer/officer.js
 * 
 * Modular JavaScript controller for the Officer View Module.
 * Adheres strictly to the PERS-43 Light Mode Covenant Design System.
 */

export class OfficerModule {
  /**
   * Calculates the Record Grade (A/B/C) of an officer based on continuous FITREP history.
   * 
   * @param {Object[]} history Fitrep history records
   * @returns {'A' | 'B' | 'C'}
   */
  static calculateRecordGrade(history) {
    if (!history || history.length === 0) return 'C';
    
    const rvs = history.map(f => f.relativeValue || 0);
    const avgRV = rvs.reduce((a, b) => a + b, 0) / rvs.length;
    const eps = history.filter(f => f.recommendation === 'EP').length;
    const epRatio = eps / history.length;

    if (avgRV > 0.4 && epRatio > 0.25) {
      return 'A';
    } else if (avgRV >= 0 || epRatio > 0.1) {
      return 'B';
    }
    return 'C';
  }

  /**
   * Filter and retrieve the Top 3 competitive FITREPs sorted by Relative Value descending.
   * 
   * @param {Object[]} history Complete Fitrep history
   * @returns {Object[]} Top 3 Fitreps
   */
  static getTop3FITREPs(history) {
    if (!history || history.length === 0) return [];
    
    // Sort a copy of the history by Relative Value (descending), then chronologically (descending)
    return [...history]
      .sort((a, b) => {
        if (b.relativeValue !== a.relativeValue) {
          return b.relativeValue - a.relativeValue;
        }
        return new Date(b.fromDate) - new Date(a.fromDate);
      })
      .slice(0, 3);
  }

  /**
   * Renders a custom list of FITREPs to a specified target container in the DOM.
   * 
   * @param {HTMLElement} container DOM element target
   * @param {Object[]} list Array of FITREP objects to render
   * @param {string} ssn Officer SSN
   * @param {string} prefix Element ID prefix ('top' or 'full') to avoid DOM ID collisions
   * @param {Function} onStateChange Callback triggered on user inputs
   */
  static renderFitrepTimeline(container, list, ssn, prefix, onStateChange) {
    container.innerHTML = '';
    
    if (list.length === 0) {
      container.innerHTML = '<div class="empty-placeholder" style="padding: var(--space-4);">No evaluations ingested for this timeline.</div>';
      return;
    }

    list.forEach((fit, idx) => {
      // Find original index in full history to keep qualitative overlays in sync
      const originalIdx = fit.originalHistoryIndex !== undefined ? fit.originalHistoryIndex : idx;
      
      const card = document.createElement('div');
      card.className = `fitrep-card fitrep-card--${fit.recommendation}`;
      
      const rvClass = fit.relativeValue > 0 ? 'fitrep-metric-value--positive' : (fit.relativeValue < 0 ? 'fitrep-metric-value--negative' : '');
      const rvSign = fit.relativeValue > 0 ? '+' : '';

      card.innerHTML = `
        <div class="fitrep-card-header">
          <span class="fitrep-card-dates">📅 ${fit.fromDate} to ${fit.toDate}</span>
          <span class="badge badge--${fit.recommendation === 'EP' ? 'green' : (fit.recommendation === 'MP' ? 'amber' : (fit.recommendation === 'SP' ? 'red' : 'gray'))}">
            ${fit.recommendation}
          </span>
        </div>
        <div class="fitrep-metrics-row">
          <div class="fitrep-metric-block">
            <span class="fitrep-metric-label">Duration</span>
            <span class="fitrep-metric-value">${fit.durationMonths} m</span>
          </div>
          <div class="fitrep-metric-block">
            <span class="fitrep-metric-label">ITA</span>
            <span class="fitrep-metric-value">${fit.ita.toFixed(2)}</span>
          </div>
          <div class="fitrep-metric-block">
            <span class="fitrep-metric-label">RSCA</span>
            <span class="fitrep-metric-value">${fit.rsca.toFixed(2)}</span>
          </div>
          <div class="fitrep-metric-block">
            <span class="fitrep-metric-label">Rel Value</span>
            <span class="fitrep-metric-value ${rvClass}">${rvSign}${fit.relativeValue.toFixed(2)}</span>
          </div>
        </div>
        <div class="fitrep-card-narrative">
          Senior: <strong>${fit.reportingSeniorName}</strong> | Group Size: <strong>${fit.summaryGroupSize}</strong> (EPs: <strong>${fit.totalEPs}</strong>)
        </div>
        <div class="fitrep-breakout-group">
          <span class="fitrep-breakout-label">Hard Breakout:</span>
          <input type="text" class="fitrep-breakout-input" 
                 placeholder="e.g., #1 of 5 EP or Top 10%..." 
                 value="${fit.hardBreakout || ''}" 
                 id="breakout-input-${prefix}-${ssn}-${originalIdx}">
        </div>
      `;
      
      container.appendChild(card);

      // Bind breakout text overlays
      const breakoutInput = card.querySelector(`#breakout-input-${prefix}-${ssn}-${originalIdx}`);
      breakoutInput.addEventListener('change', (e) => {
        fit.hardBreakout = e.target.value.trim();
        if (onStateChange) {
          onStateChange(ssn, true); // true to signal localized update
        }
      });
    });
  }

  /**
   * Mounts and renders the Officer View module.
   * 
   * @param {string} containerSelector Target DOM element
   * @param {string} ssn Officer SSN
   * @param {Object} masterDb In-memory Master Database state
   * @param {Function} onStateChange Callback triggered when state mutations occur
   */
  static mount(containerSelector, ssn, masterDb, onStateChange) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    if (!masterDb || !masterDb.officers || !masterDb.officers[ssn]) {
      container.innerHTML = '<div class="empty-placeholder">Select an officer to view details.</div>';
      return;
    }

    const officer = masterDb.officers[ssn];
    const template = document.getElementById('template-officer');
    if (!template) {
      container.innerHTML = '<div class="empty-placeholder">Error: Template template-officer not found.</div>';
      return;
    }

    // 1. Clone and mount template content
    const clone = template.content.cloneNode(true);
    container.innerHTML = '';
    container.appendChild(clone);

    // 2. Tab Navigation Routing Engine
    const tabBtns = container.querySelectorAll('.hero-nav-btn');
    const panels = container.querySelectorAll('.officer-tab-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Toggle button active classes
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show/hide sub-view tab panels
        panels.forEach(p => {
          if (p.id === `officer-tab-${tabName}`) {
            p.style.display = 'block';
          } else {
            p.style.display = 'none';
          }
        });
      });
    });

    // 3. Perform career grade mathematics
    const history = officer.fitrepHistory || [];
    // Inject original order index to each FITREP record before mathematical sort
    history.forEach((f, idx) => {
      f.originalHistoryIndex = idx;
    });

    const calculatedGrade = this.calculateRecordGrade(history);
    officer.recordGrade = calculatedGrade;

    const currentIntentPRD = officer.placementIntent.intentPRD || officer.oaisPRD;
    const isMismatch = officer.oaisPRD && currentIntentPRD !== officer.oaisPRD;

    // 4. Bind Career Dossier text fields
    document.getElementById('opt-full-name').innerText = officer.name || 'Unknown';
    document.getElementById('opt-rank').innerText = officer.rank || 'N/A';
    document.getElementById('opt-designator').innerText = officer.designator || 'N/A';
    document.getElementById('opt-ssn').innerText = officer.ssn || 'N/A';
    
    // Status Badge customization
    const statusBadge = document.getElementById('opt-status-badge');
    if (officer.ineligibilityTriggers && officer.ineligibilityTriggers.length > 0) {
      statusBadge.innerText = 'INELIGIBLE';
      statusBadge.className = 'badge badge--red';
      statusBadge.setAttribute('title', officer.ineligibilityTriggers.join(', '));
    } else {
      statusBadge.innerText = 'ACTIVE STATUS';
      statusBadge.className = 'badge badge--green';
      statusBadge.removeAttribute('title');
    }

    // 5. Bind Active Orders & Rotations card
    document.getElementById('opt-current-uic').innerText = officer.currentUIC ? `Command UIC ${officer.currentUIC}` : 'N/A';
    document.getElementById('opt-oais-prd').innerText = officer.oaisPRD || 'N/A';
    
    const intentPrdNode = document.getElementById('opt-intent-prd');
    intentPrdNode.innerText = currentIntentPRD || 'N/A';
    
    // Display discrepancy row and alert state if legal and intent disagree
    const discrepancyRow = document.getElementById('prd-discrepancy-row');
    if (isMismatch) {
      intentPrdNode.className = 'admin-data-value admin-data-value--warning';
      intentPrdNode.setAttribute('title', `OAIS legal status PRD (${officer.oaisPRD}) differs from Planner intent date`);
      if (discrepancyRow) discrepancyRow.style.display = 'flex';
    } else {
      intentPrdNode.className = 'admin-data-value admin-data-value--highlight';
      intentPrdNode.removeAttribute('title');
      if (discrepancyRow) discrepancyRow.style.display = 'none';
    }

    // 6. Draw Top 3 FITREPs view (mathematically-sorted)
    const top3List = this.getTop3FITREPs(history);
    const top3Container = document.getElementById('overview-top-fitreps');
    
    const recordGradeBadge = document.getElementById('overview-record-grade');
    recordGradeBadge.innerText = `Record Grade: ${calculatedGrade}`;
    recordGradeBadge.className = `badge badge--${calculatedGrade === 'A' ? 'green' : (calculatedGrade === 'B' ? 'amber' : 'gray')}`;

    this.renderFitrepTimeline(top3Container, top3List, ssn, 'top', onStateChange);

    // 7. Draw Comprehensive Performance tab
    const fullTimelineContainer = document.getElementById('fitrep-timeline-list');
    const totalCountBadge = document.getElementById('prof-total-count');
    totalCountBadge.innerText = `${history.length} Reports Ingested`;
    
    const fullGradeBadge = document.getElementById('prof-grade-badge');
    fullGradeBadge.innerText = `Record Grade: ${calculatedGrade}`;
    fullGradeBadge.className = `badge badge--${calculatedGrade === 'A' ? 'green' : (calculatedGrade === 'B' ? 'amber' : 'gray')}`;

    this.renderFitrepTimeline(fullTimelineContainer, history, ssn, 'full', onStateChange);

    // 8. Bind PRD Shift Overrides card
    const prdDateInput = document.getElementById('form-new-prd');
    const prdReasonInput = document.getElementById('form-prd-reason');
    const submitBtn = document.getElementById('btn-submit-prd');

    prdDateInput.value = currentIntentPRD || '';
    
    submitBtn.addEventListener('click', () => {
      const newPRD = prdDateInput.value.trim();
      const reason = prdReasonInput.value.trim();

      if (!newPRD || !reason) {
        alert('Covenant Governance: Both a target PRD and a change justification note are required.');
        return;
      }

      if (!/^\d{4}-\d{2}-\d{2}$/.test(newPRD)) {
        alert('Covenant Governance: Date must match YYYY-MM-DD format.');
        return;
      }

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

      if (onStateChange) {
        onStateChange(ssn);
      }
    });

    // 9. Draw PRD Governance Audit logs
    const auditLogsContainer = document.getElementById('prd-audit-logs');
    auditLogsContainer.innerHTML = '';
    const logEntries = officer.placementIntent.historicalPRDLog || [];
    
    if (logEntries.length === 0) {
      auditLogsContainer.innerHTML = '<div class="empty-placeholder" style="padding: var(--space-3); font-size: var(--type-data-xs);">No historical changes logged.</div>';
    } else {
      logEntries.forEach(log => {
        const div = document.createElement('div');
        div.className = 'audit-log-card';
        div.innerHTML = `
          <div class="audit-log-meta">
            <span>👤 ${log.user} (${log.source})</span>
            <span>📅 ${log.date}</span>
          </div>
          <div class="audit-log-shift">
            ${log.oldPRD} ➔ ${log.newPRD}
          </div>
          <div class="audit-log-note">
            ${log.changeNote}
          </div>
        `;
        auditLogsContainer.appendChild(div);
      });
    }
  }
}
