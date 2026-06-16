import { CommandClassifier } from './classifier.js';

const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export class CommandModule {
  static getMonthLetter(monthIndex) {
    const letters = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    return letters[monthIndex];
  }

  static generateTimelineColumns() {
    const now = new Date();
    const cols = [];
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();

    for (let i = 0; i < 36; i++) {
      cols.push({
        year: currentYear,
        month: currentMonth,
        label: this.getMonthLetter(currentMonth)
      });
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
    }
    return cols;
  }

  static isDateInMonth(startDate, endDate, year, month) {
    const cellTime = year * 12 + month;
    
    let startTime = 0;
    if (startDate) {
      const sy = parseInt(startDate.substring(0, 4));
      const sm = startDate.includes('-') ? parseInt(startDate.substring(5, 7)) - 1 : parseInt(startDate.substring(4, 6)) - 1;
      startTime = sy * 12 + sm;
    } else {
      startTime = new Date().getFullYear() * 12 + new Date().getMonth();
    }
    
    let endTime = 999999;
    if (endDate) {
      const ey = parseInt(endDate.substring(0, 4));
      const em = endDate.includes('-') ? parseInt(endDate.substring(5, 7)) - 1 : parseInt(endDate.substring(4, 6)) - 1;
      endTime = ey * 12 + em;
    }
    
    return cellTime >= startTime && cellTime <= endTime;
  }

  static formatDate(dateStr, format) {
    if (!dateStr || dateStr.length < 6) return '';
    let yStr, mStr, dStr;
    if (dateStr.includes('-')) {
      yStr = dateStr.substring(0, 4);
      mStr = dateStr.substring(5, 7);
      dStr = dateStr.length >= 10 ? dateStr.substring(8, 10) : '15';
    } else {
      yStr = dateStr.substring(0, 4);
      mStr = dateStr.substring(4, 6);
      dStr = dateStr.length >= 8 ? dateStr.substring(6, 8) : '15';
    const monthIdx = parseInt(mStr, 10) - 1;
    if (monthIdx < 0 || monthIdx > 11) return '';
    const yy = yStr.substring(2, 4);
    
    if (format === 'DD MMM YY') {
      return `${dStr} ${monthNames[monthIdx]} ${yy}`;
    }
    if (format === 'MMM YY') {
      return `${monthNames[monthIdx]} ${yy}`;
    }
    return '';
  }

  static calculateTourLength(startStr, endStr) {
    if (!startStr || !endStr || startStr.length < 6 || endStr.length < 6) return '';
    const sy = parseInt(startStr.substring(0, 4));
    const sm = startStr.includes('-') ? parseInt(startStr.substring(5, 7)) - 1 : parseInt(startStr.substring(4, 6)) - 1;
    const ey = parseInt(endStr.substring(0, 4));
    const em = endStr.includes('-') ? parseInt(endStr.substring(5, 7)) - 1 : parseInt(endStr.substring(4, 6)) - 1;
    const months = (ey - sy) * 12 + (em - sm);
    return isNaN(months) ? '' : months;
  }

  static renderOfficerRow(officer, timelineCols, uic) {
    let rowClass = 'sheet-row';
    
    const currentIntentPRD = officer.placementIntent && officer.placementIntent.intentPRD ? officer.placementIntent.intentPRD : officer.oaisPRD;
    const reported = officer.reportedDate || '';
    const pStaff = officer.prospectiveReplacement;
    
    const reportedFmt = this.formatDate(reported, 'DD MMM YY');
    const prdFmt = this.formatDate(currentIntentPRD, 'MMM YY');
    const tourLen = this.calculateTourLength(reported, currentIntentPRD);
    
    // Stacked rendering if P-Staff exists
    const pName = pStaff ? `<div class="p-staff-text">${pStaff.name}</div>` : '';
    const pRank = pStaff ? `<div class="p-staff-text">${pStaff.rank}</div>` : '';
    const pDesig = pStaff ? `<div class="p-staff-text">${pStaff.designator}</div>` : '';
    
    // Tooltip injection
    const pastCmd = officer.pastCommand || 'N/A';
    const nextPromo = 'FY28 LCDR';
    const nextAdmin = 'DH SCREEN';

    const nameLink = `
      <div class="tooltip-container">
        <a href="#officer/${officer.ssn}?fromCmd=${uic}" class="officer-link">${officer.name || ''}</a>
        <div class="officer-tooltip">
          <div class="tt-title">Officer Insights</div>
          <div class="tt-row">
            <span class="tt-label">Prev Command:</span>
            <span class="tt-value">${pastCmd}</span>
          </div>
          <div class="tt-row">
            <span class="tt-label">Next Promo:</span>
            <span class="tt-value">${nextPromo}</span>
          </div>
          <div class="tt-row">
            <span class="tt-label">Next Admin:</span>
            <span class="tt-value">${nextAdmin}</span>
          </div>
        </div>
      </div>
    `;

    // Make PRD clickable for modal
    const prdInteractiveHtml = `
      <div class="tooltip-container" style="cursor: pointer; text-decoration: underline;" onclick="if(window.openPrdModal) window.openPrdModal('${officer.ssn}')">
        ${prdFmt}
        <div class="officer-tooltip" style="left: auto; right: 100%; transform: translateX(-10px);">
          Click to manage PRD Governance / Extension Log
        </div>
      </div>
    `;

    let html = `
      <div class="${rowClass}">
        <div class="cell col-bsc sticky-col"><div>${officer.bsc || ''}</div></div>
        <div class="cell col-rank sticky-col"><div>${officer.rank || ''}</div>${pRank}</div>
        <div class="cell col-desig sticky-col"><div>${officer.designator || ''}</div>${pDesig}</div>
        <div class="cell col-name sticky-col"><div>${nameLink}</div>${pName}</div>
        <div class="cell col-callsign sticky-col"><div>${officer.callsign || ''}</div></div>
        <div class="cell col-yg sticky-col"><div>${(officer.yg || '').substring(2,4) || ''}</div></div>
        <div class="cell col-qual sticky-col"><div>${officer.aqd || ''}</div></div>
        <div class="cell col-recd sticky-col"><div>${reportedFmt}</div></div>
        <div class="cell col-tour sticky-col"><div>${tourLen ? tourLen : ''}</div></div>
        <div class="cell col-prd sticky-col"><div>${prdInteractiveHtml}</div></div>
    `;
    
    for (let i = 0; i < timelineCols.length; i++) {
      const col = timelineCols[i];
      
      const isCurrPresent = this.isDateInMonth(reported, currentIntentPRD, col.year, col.month);
      const isLegalPresent = this.isDateInMonth(reported, officer.oaisPRD, col.year, col.month);
      const isExtension = isCurrPresent && !isLegalPresent; // If present legally, it's green. If present outside legal PRD, it's yellow extension.

      const isPPresent = pStaff ? this.isDateInMonth(pStaff.fillDate, pStaff.edd, col.year, col.month) : false;
      
      const prevCurrPresent = i > 0 && this.isDateInMonth(reported, currentIntentPRD, timelineCols[i-1].year, timelineCols[i-1].month);
      const nextCurrPresent = i < timelineCols.length - 1 && this.isDateInMonth(reported, currentIntentPRD, timelineCols[i+1].year, timelineCols[i+1].month);
      const prevPPresent = pStaff && i > 0 && this.isDateInMonth(pStaff.fillDate, pStaff.edd, timelineCols[i-1].year, timelineCols[i-1].month);
      const nextPPresent = pStaff && i < timelineCols.length - 1 && this.isDateInMonth(pStaff.fillDate, pStaff.edd, timelineCols[i+1].year, timelineCols[i+1].month);
      
      let fillClass = '';
      let extensionClass = isExtension ? ' presence-extension' : '';
      
      if (isCurrPresent && isPPresent) {
        fillClass = 'presence-fill presence-overlap' + extensionClass;
        if ((prevCurrPresent && prevPPresent) || prevCurrPresent || prevPPresent) fillClass += ' connect-left';
        if ((nextCurrPresent && nextPPresent) || nextCurrPresent || nextPPresent) fillClass += ' connect-right';
      } else if (isCurrPresent) {
        fillClass = 'presence-fill' + extensionClass;
        if (prevCurrPresent) fillClass += ' connect-left';
        if (nextCurrPresent) fillClass += ' connect-right';
      } else if (isPPresent) {
        fillClass = 'presence-fill presence-prospective';
        if (prevPPresent) fillClass += ' connect-left';
        if (nextPPresent) fillClass += ' connect-right';
      }
      
      html += `
        <div class="cell cell-month">
          ${fillClass !== '' ? `<div class="${fillClass}"></div>` : ''}
        </div>
      `;
    }
    html += `</div>`;
    
    return html;
  }

  static mount(containerSelector, uic, masterDb, onBackClick) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const template = document.getElementById('template-command');
    if (!template) {
      container.innerHTML = '<div class="empty-placeholder">Error: Template template-command not found.</div>';
      return;
    }

    const cmd = masterDb.commands[uic];
    if (!cmd) return;

    container.innerHTML = '';
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);

    // Header updates
    document.getElementById('cmd-header-name').innerText = cmd.name;
    document.getElementById('cmd-header-uic').innerText = `UIC: ${uic}`;
    
    // Metrics panel updates
    document.getElementById('cmd-metric-paa').innerText = cmd.paa || 'N/A';
    document.getElementById('cmd-metric-ba').innerText = cmd.billetsAuthorized || 'N/A';
    
    if (cmd.workupWindowStart && cmd.workupWindowEnd) {
      document.getElementById('cmd-metric-workup').innerText = `${this.formatDate(cmd.workupWindowStart, 'MMM YY')} - ${this.formatDate(cmd.workupWindowEnd, 'MMM YY')}`;
    }
    
    if (cmd.deploymentWindowStart && cmd.deploymentWindowEnd) {
      document.getElementById('cmd-metric-deploy').innerText = `${this.formatDate(cmd.deploymentWindowStart, 'MMM YY')} - ${this.formatDate(cmd.deploymentWindowEnd, 'MMM YY')}`;
    }
    
    document.getElementById('ct-btn-back').addEventListener('click', () => {
      if (onBackClick) onBackClick();
    });

    const officers = cmd.assignedOfficers.map(ssn => masterDb.officers[ssn]).filter(Boolean);
    
    // Sort officers by BSC
    officers.sort((a, b) => {
      const bscA = a.bsc || '99999';
      const bscB = b.bsc || '99999';
      return bscA.localeCompare(bscB);
    });

    // Grouping Logic via CommandClassifier Seam
    const classification = CommandClassifier.classify(officers, cmd);
    const groups = classification.groups;
    const isF18F = classification.isF18F;
    
    document.getElementById('metric-card-pilots').style.display = 'flex';
    document.getElementById('cmd-metric-pilots').innerText = classification.pilotsCount;

    if (isF18F) {
      document.getElementById('metric-card-wsos').style.display = 'flex';
      document.getElementById('cmd-metric-wsos').innerText = classification.wsosCount;
    } else {
      document.getElementById('metric-card-wsos').style.display = 'none';
    }

    // Find CO's PRD for CoC marker
    let coPrdYear = -1;
    let coPrdMonth = -1;
    const co = cmd.assignedOfficers.map(ssn => masterDb.officers[ssn]).find(o => o && o.billetTitle === 'SQN CO');
    if (co) {
      const prd = co.placementIntent && co.placementIntent.intentPRD ? co.placementIntent.intentPRD : co.oaisPRD;
      if (prd && prd.length >= 6) {
        coPrdYear = parseInt(prd.substring(0, 4));
        coPrdMonth = parseInt(prd.substring(4, 6).replace('-', '')) - 1; // handle both YYYY-MM and YYYYMM
        if (prd.includes('-')) coPrdMonth = parseInt(prd.substring(5, 7)) - 1;
      }
    }

    const timelineCols = this.generateTimelineColumns();
    
    // Render Timeline Header
    const tHeader = document.getElementById('ct-table-header');
    
    // We want to remove previously appended month headers if any, but since we recreate innerHTML of body we should also reset the header to just the fixed ones
    // The fixed headers end at col-prd. We can query for them and keep them.
    const fixedHeaders = Array.from(tHeader.querySelectorAll('.sticky-col'));
    tHeader.innerHTML = '';
    fixedHeaders.forEach(el => tHeader.appendChild(el));

    let currentYearSpan = 0;
    
    timelineCols.forEach((c, index) => {
      let cellBgClass = '';
      const isDeploy = this.isDateInMonth(cmd.deploymentWindowStart, cmd.deploymentWindowEnd, c.year, c.month);
      const isWorkup = this.isDateInMonth(cmd.workupWindowStart, cmd.workupWindowEnd, c.year, c.month);
      if (isDeploy) cellBgClass = 'cell-deployment';
      else if (isWorkup) cellBgClass = 'cell-workup';

      const cell = document.createElement('div');
      cell.className = 'cell cell-month cell-month-header';
      cell.title = `${c.year}-${c.month+1}`;
      
      const isCoC = (c.year === coPrdYear && c.month === coPrdMonth);
      const markerHtml = isCoC ? `<div class="coc-marker">▼</div>` : '';
      
      // Year logic: display year if it's Jan (month 0) or the first column
      let yearHtml = '';
      if (index === 0 || c.month === 0) {
        // Calculate how many months are left in this year for the span
        const monthsLeftInYear = 12 - c.month;
        const totalRemaining = timelineCols.length - index;
        const span = Math.min(monthsLeftInYear, totalRemaining);
        const width = span * 36; // 36px per cell
        yearHtml = `<div class="year-label" style="width: ${width}px;">${c.year}</div>`;
      }
      
      cell.innerHTML = `
        ${yearHtml}
        <div class="${cellBgClass}" style="position: absolute; bottom: 0; left: 0; right: 0; height: 32px; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; padding-bottom: 2px;">
          <span class="month-label">${monthNames[c.month].substring(0, 1)}</span>
          ${markerHtml}
        </div>
      `;
      tHeader.appendChild(cell);
    });

    const tableBody = document.getElementById('ct-table-body');
    tableBody.innerHTML = '';

    // Render groups
    for (const [groupName, groupOfficers] of Object.entries(groups)) {
      if (groupOfficers.length === 0) continue;

      // Render group header (covers all columns visually)
      tableBody.innerHTML += `<div class="sheet-row group-header">${groupName}</div>`;

      // Render officers
      groupOfficers.forEach(off => {
        tableBody.innerHTML += this.renderOfficerRow(off, timelineCols, uic);
      });
    }

    // Render footer calculations
    const footerContainer = document.getElementById('ct-table-footer');
    footerContainer.innerHTML = '';
    // empty blocks for fixed headers
    footerContainer.innerHTML += `
      <div class="cell col-bsc sticky-col"></div>
      <div class="cell col-rank sticky-col"></div>
      <div class="cell col-desig sticky-col"></div>
      <div class="cell col-name sticky-col" style="justify-content: flex-end; font-weight: bold;">MONTHLY ASSIGNED</div>
      <div class="cell col-callsign sticky-col"></div>
      <div class="cell col-yg sticky-col"></div>
      <div class="cell col-qual sticky-col"></div>
      <div class="cell col-recd sticky-col"></div>
      <div class="cell col-tour sticky-col"></div>
      <div class="cell col-prd sticky-col"></div>
    `;

    timelineCols.forEach(col => {
      let pilotsCount = 0;
      let wsoCount = 0;
      
      officers.forEach(off => {
        const currentIntentPRD = off.placementIntent && off.placementIntent.intentPRD ? off.placementIntent.intentPRD : off.oaisPRD;
        if (this.isDateInMonth(off.reportedDate, currentIntentPRD, col.year, col.month)) {
          if (off.designator && off.designator.startsWith('131')) pilotsCount++;
          if (off.designator && off.designator.startsWith('132')) wsoCount++;
        }
      });
      
      let content = `P: ${pilotsCount}`;
      if (isF18F) content = `P: ${pilotsCount}<br/>W: ${wsoCount}`;

      footerContainer.innerHTML += `
        <div class="cell cell-month" style="font-size: 9px; color: var(--color-text-secondary); line-height: 1.2; flex-direction: column; justify-content: center; overflow: visible;">
          ${content}
        </div>
      `;
    });

    // Modal Logic
    const modal = document.getElementById('ct-info-modal');
    const btnInfo = document.getElementById('ct-btn-info');
    const btnCloseModal = document.getElementById('ct-btn-close-modal');
    const btnSaveModal = document.getElementById('ct-btn-save-modal');

    if (btnInfo && modal) {
      btnInfo.addEventListener('click', () => {
        document.getElementById('ct-input-paa').value = cmd.paa || '';
        document.getElementById('ct-input-ba').value = cmd.billetsAuthorized || '';
        document.getElementById('ct-input-workup-start').value = cmd.workupWindowStart || '';
        document.getElementById('ct-input-workup-end').value = cmd.workupWindowEnd || '';
        document.getElementById('ct-input-deploy-start').value = cmd.deploymentWindowStart || '';
        document.getElementById('ct-input-deploy-end').value = cmd.deploymentWindowEnd || '';
        modal.classList.remove('hidden');
      });

      btnCloseModal.addEventListener('click', () => {
        modal.classList.add('hidden');
      });

      btnSaveModal.addEventListener('click', () => {
        cmd.paa = parseInt(document.getElementById('ct-input-paa').value) || undefined;
        cmd.billetsAuthorized = parseInt(document.getElementById('ct-input-ba').value) || undefined;
        cmd.workupWindowStart = document.getElementById('ct-input-workup-start').value || undefined;
        cmd.workupWindowEnd = document.getElementById('ct-input-workup-end').value || undefined;
        cmd.deploymentWindowStart = document.getElementById('ct-input-deploy-start').value || undefined;
        cmd.deploymentWindowEnd = document.getElementById('ct-input-deploy-end').value || undefined;
        
        modal.classList.add('hidden');
        // Re-render to show new timeline shading
        this.mount(containerSelector, uic, masterDb, onBackClick);
      });
    }
  }
}
