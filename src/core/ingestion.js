/**
 * src/core/ingestion.js
 * 
 * Browser-compatible ES Module for robust, client-side parsing, cleaning,
 * and linking of SUPPLY and SUBEVAL data drops.
 */

/**
 * Normalizes SSN or DoD ID by removing spaces, dashes, and other non-alphanumeric characters,
 * padding with leading zeros to maintain 9-digit standards.
 * 
 * @param {string|number} ssn 
 * @returns {string} Clean, 9-digit standardized SSN
 */
export function normalizeSSN(ssn) {
  if (ssn === null || ssn === undefined) return '';
  const clean = String(ssn).replace(/[^\w]/g, '');
  return clean.padStart(9, '0');
}

/**
 * Helper to parse a string into a Date object supporting YYYYMMDD, YYYY-MM-DD,
 * and MM/DD/YYYY or M/D/YYYY formats.
 * 
 * @param {string} str 
 * @returns {Date|null}
 */
export function parseStringToDate(str) {
  if (!str) return null;
  const clean = String(str).trim();
  
  // Case 1: YYYYMMDD
  if (clean.length === 8 && /^\d+$/.test(clean)) {
    const y = parseInt(clean.substring(0, 4), 10);
    const m = parseInt(clean.substring(4, 6), 10) - 1;
    const d = parseInt(clean.substring(6, 8), 10);
    return new Date(Date.UTC(y, m, d));
  }
  
  // Case 2: Standard date formats (e.g. YYYY-MM-DD, MM/DD/YYYY)
  const parts = clean.split(/[-/]/);
  if (parts.length === 3) {
    // YYYY-MM-DD
    if (parts[0].length === 4) {
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      const d = parseInt(parts[2], 10);
      return new Date(Date.UTC(y, m, d));
    }
    // MM/DD/YYYY or DD-MM-YYYY (Navy is MM/DD/YYYY)
    if (parts[2].length === 4) {
      const m = parseInt(parts[0], 10) - 1;
      const d = parseInt(parts[1], 10);
      const y = parseInt(parts[2], 10);
      return new Date(Date.UTC(y, m, d));
    }
  }
  
  const d = new Date(clean);
  return isNaN(d.getTime()) ? null : d;
}

/**
 * Converts a raw date string in YYYYMMDD or other common formats to ISO YYYY-MM-DD standard.
 * If the date is invalid, it returns the trimmed input safely.
 * 
 * @param {string} dateStr 
 * @returns {string} Standardized date YYYY-MM-DD
 */
export function parseDate(dateStr) {
  const d = parseStringToDate(dateStr);
  if (!d) return dateStr ? String(dateStr).trim() : '';
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Calculates the exact duration in months between two dates inclusive.
 * 
 * @param {string} fromStr 
 * @param {string} toStr 
 * @returns {number} Fractional months, rounded to 1 decimal place
 */
export function calculateDurationMonths(fromStr, toStr) {
  const date1 = parseStringToDate(fromStr);
  const date2 = parseStringToDate(toStr);
  
  if (!date1 || !date2) return 0;
  
  const diffTime = date2.getTime() - date1.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24) + 1; // Inclusive
  
  return parseFloat((diffDays / 30.4).toFixed(1));
}

/**
 * Dynamically detects file delimiter (comma, semicolon, tab, percent) by counting.
 * 
 * @param {string} text 
 * @returns {string} Detected delimiter
 */
export function detectDelimiter(text) {
  if (!text) return ',';
  const lines = text.split(/\r?\n/).slice(0, 5).filter(line => line.trim().length > 0);
  if (lines.length === 0) return ',';
  
  const delimiters = [',', ';', '\t', '%'];
  const counts = { ',': 0, ';': 0, '\t': 0, '%': 0 };
  
  for (const line of lines) {
    for (const d of delimiters) {
      const parts = line.split(d);
      counts[d] += parts.length - 1;
    }
  }
  
  let bestDelimiter = ',';
  let maxCount = 0;
  for (const d of delimiters) {
    if (counts[d] > maxCount) {
      maxCount = counts[d];
      bestDelimiter = d;
    }
  }
  
  return bestDelimiter;
}

/**
 * Parses raw text separated by lines and delimiters.
 * Handles double-quotes and cell newlines robustly.
 * 
 * @param {string} text 
 * @param {string} delimiter 
 * @returns {string[][]} Array of row arrays
 */
export function parseDelimitedText(text, delimiter) {
  if (!text) return [];
  
  const result = [];
  let row = [];
  let cell = '';
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i+1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        cell += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === delimiter && !inQuotes) {
      row.push(cell.trim());
      cell = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \n
      }
      row.push(cell.trim());
      if (row.length > 1 || (row.length === 1 && row[0] !== '')) {
        result.push(row);
      }
      row = [];
      cell = '';
    } else {
      cell += char;
    }
  }
  
  if (cell !== '' || row.length > 0) {
    row.push(cell.trim());
    if (row.length > 1 || (row.length === 1 && row[0] !== '')) {
      result.push(row);
    }
  }
  
  return result;
}

/**
 * Parses a trait average score supporting both float representations (e.g. 4.15)
 * and integer representations (e.g. 415).
 * 
 * @param {any} val 
 * @returns {number} Float trait average
 */
export function parseFloatOrIntegerPct(val) {
  if (val === null || val === undefined) return 0;
  const cleaned = String(val).trim();
  if (!cleaned) return 0;
  if (cleaned.includes('.')) {
    return parseFloat(cleaned) || 0;
  }
  const parsedInt = parseInt(cleaned, 10);
  if (isNaN(parsedInt)) return 0;
  if (parsedInt > 10) {
    return parseFloat((parsedInt / 100).toFixed(2));
  }
  return parsedInt;
}

/**
 * Searches column headers case-insensitively, ignoring spaces, BOM, and symbols.
 * 
 * @param {string[]} headers 
 * @param {string[]} aliases 
 * @returns {number} Index of matching header, or -1
 */
export function resolveHeaderIndex(headers, aliases) {
  if (!headers || !Array.isArray(headers)) return -1;
  
  const cleanHeaders = headers.map(h => 
    String(h).trim()
      .replace(/^\ufeff/, '') // Strip BOM
      .toUpperCase()
      .replace(/[^A-Z0-9_]/g, '') // Keep alphanumeric and underscore
  );
  
  const cleanHeadersNoUnderscore = cleanHeaders.map(h => h.replace(/_/g, ''));

  for (const alias of aliases) {
    const cleanAlias = alias.toUpperCase().replace(/[^A-Z0-9_]/g, '');
    const cleanAliasNoUnderscore = cleanAlias.replace(/_/g, '');
    
    // First, try exact match with underscores
    let idx = cleanHeaders.findIndex(h => h === cleanAlias);
    if (idx !== -1) return idx;

    // Second, try exact match without underscores
    idx = cleanHeadersNoUnderscore.findIndex(h => h === cleanAliasNoUnderscore);
    if (idx !== -1) return idx;
  }
  
  return -1;
}

/**
 * Parses raw percent-delimited or other delimited SUPPLY active duty data.
 * 
 * @param {string} rawText Delimited string
 * @returns {Record<string, Object>} A list of active duty officers mapped by normalized SSN
 */
export function parseSupplyData(rawText) {
  const delimiter = detectDelimiter(rawText);
  const rows = parseDelimitedText(rawText, delimiter);
  if (rows.length < 2) return {};
  
  const headers = rows[0];
  const officers = {};
  
  // Find key index indicators with robust resolving
  const ssnIdx = resolveHeaderIndex(headers, ['ISSN', 'SSN', 'DODID', 'MEMBERSSN', 'SOCIALSECURITY']);
  const nameIdx = resolveHeaderIndex(headers, ['INAME', 'NAME', 'MEMBERNAME', 'OFFICERNAME', 'FULLNAME']);
  const rankIdx = resolveHeaderIndex(headers, ['IRANK', 'RANK']);
  const desigIdx = resolveHeaderIndex(headers, ['IDESIG', 'DESIG', 'DESIGNATOR']);
  const uicIdx = resolveHeaderIndex(headers, ['AAUIC', 'AUIC', 'UIC', 'COMMANDUIC']);
  const prdIdx = resolveHeaderIndex(headers, ['IPRD', 'PRD']);
  const scrnIdx = resolveHeaderIndex(headers, ['ICOMM.SCRN.RSLT', 'ICOMMSCRNRSLT', 'SCREENRESULT', 'SCRN']);
  const bscIdx = resolveHeaderIndex(headers, ['BBSC', 'BSC', 'BILLETSEQUENCECODE']);
  const ygIdx = resolveHeaderIndex(headers, ['IYR.GRP', 'IYRGRP', 'YG', 'YEARGROUP']);
  const aqdIdx = resolveHeaderIndex(headers, ['IAQD', 'AQD']);
  const recdIdx = resolveHeaderIndex(headers, ['IRECD.DT', 'IRECDDT', 'REPORTEDDATE']);
  const btitleIdx = resolveHeaderIndex(headers, ['BBTITLE', 'BTITLE', 'BILLETTITLE']);
  const asnameIdx = resolveHeaderIndex(headers, ['ASNAME', 'COMMANDNAME', 'CMDNAME', 'ACTIVITY']);
  const ahportIdx = resolveHeaderIndex(headers, ['AHPORT', 'HOMEPORT', 'PORT', 'STATION']);
  
  // Prospective replacement indices
  const pNameIdx = resolveHeaderIndex(headers, ['PNAME', 'PROSPECTIVENAME']);
  const pFillIdx = resolveHeaderIndex(headers, ['PFILL.DT', 'PFILLDT', 'FILLDATE']);
  const pEddIdx = resolveHeaderIndex(headers, ['PEDD', 'EDD']);
  const pDesigIdx = resolveHeaderIndex(headers, ['PDESIG', 'PDESIGNATOR']);
  const pRankIdx = resolveHeaderIndex(headers, ['PRANK', 'PROSPECTIVERANK']);
  
  // Past Command
  const pastCmdIdx = resolveHeaderIndex(headers, ['IPAST1.SNAME', 'IPAST1SNAME', 'PASTCOMMAND']);
  
  if (ssnIdx === -1) {
    throw new Error('Crucial field "ISSN" missing in SUPPLY file headers.');
  }
  
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < headers.length) continue;
    
    const rawSsn = row[ssnIdx];
    if (!rawSsn) continue;
    
    const ssn = normalizeSSN(rawSsn);
    const name = nameIdx !== -1 ? row[nameIdx] : 'Unknown';
    const rank = rankIdx !== -1 ? row[rankIdx].trim() : '';
    const designator = desigIdx !== -1 ? row[desigIdx].trim() : '';
    const currentUIC = uicIdx !== -1 ? row[uicIdx].trim() : '';
    const oaisPRD = prdIdx !== -1 ? parseDate(row[prdIdx]) : '';
    const scrnResult = scrnIdx !== -1 ? row[scrnIdx].trim() : '';
    const bsc = bscIdx !== -1 ? row[bscIdx].trim() : '';
    const yg = ygIdx !== -1 ? row[ygIdx].trim() : '';
    const aqd = aqdIdx !== -1 ? row[aqdIdx].trim() : '';
    const reportedDate = recdIdx !== -1 ? parseDate(row[recdIdx]) : '';
    const billetTitle = btitleIdx !== -1 ? row[btitleIdx].trim() : '';
    const cmdName = asnameIdx !== -1 ? row[asnameIdx].trim() : '';
    const homeport = ahportIdx !== -1 ? row[ahportIdx].trim() : '';
    
    let prospectiveReplacement = null;
    if (pNameIdx !== -1 && row[pNameIdx] && row[pNameIdx].trim() !== '') {
      prospectiveReplacement = {
        name: row[pNameIdx].trim(),
        fillDate: pFillIdx !== -1 ? parseDate(row[pFillIdx]) : '',
        edd: pEddIdx !== -1 ? parseDate(row[pEddIdx]) : '',
        designator: pDesigIdx !== -1 ? row[pDesigIdx].trim() : '',
        rank: pRankIdx !== -1 ? row[pRankIdx].trim() : ''
      };
    }
    
    const pastCommand = pastCmdIdx !== -1 ? row[pastCmdIdx].trim() : '';
    
    officers[ssn] = {
      ssn,
      name,
      rank,
      designator,
      currentUIC,
      oaisPRD,
      reportedDate,
      prospectiveReplacement,
      pastCommand,
      scrnResult,
      bsc,
      yg,
      aqd,
      billetTitle,
      cmdName,
      homeport,
      fitrepHistory: [],
      recordGrade: null,
      ineligibilityTriggers: [],
      detailerIntent: {
        isCompleteSlate: false
      },
      placementIntent: {
        intentPRD: oaisPRD,
        historicalPRDLog: []
      }
    };
  }
  
  return officers;
}

/**
 * Parses raw CSV/delimited SUBEVAL longitudinal FITREP data.
 * 
 * @param {string} rawText Standard CSV/delimited formatted string
 * @returns {Record<string, Object[]>} Mapped lists of FITREPs by normalized SSN
 */
export function parseSubevalData(rawText) {
  const delimiter = detectDelimiter(rawText);
  const rows = parseDelimitedText(rawText, delimiter);
  if (rows.length < 2) return {};
  
  const headers = rows[0];
  const fitrepMap = {};
  
  const ssnIdx = resolveHeaderIndex(headers, ['SSN', 'ISSN', 'DODID', 'MEMBERSSN', 'SOCIALSECURITY']);
  const nameIdx = resolveHeaderIndex(headers, ['NAME', 'INAME', 'MEMBERNAME', 'OFFICERNAME', 'FULLNAME']);
  const fromIdx = resolveHeaderIndex(headers, ['FROM', 'FROMDATE', 'STARTDATE', 'PERIODSTART']);
  const toIdx = resolveHeaderIndex(headers, ['TO', 'TODATE', 'ENDDATE', 'PERIODEND']);
  const rsNameIdx = resolveHeaderIndex(headers, ['RS_NAME', 'RSNAME', 'REPORTINGSENIORNAME', 'REPORTINGSENIOR']);
  const rsUicIdx = resolveHeaderIndex(headers, ['AUIC', 'AAUIC', 'UIC', 'COMMANDUIC', 'ACTY']);
  const avgIdx = resolveHeaderIndex(headers, ['AVG', 'ITA', 'TRAITAVERAGE']);
  const rscumavgIdx = resolveHeaderIndex(headers, ['RSCUMAVG', 'RSCA', 'RS CUMULATIVE AVERAGE']);
  const numratedIdx = resolveHeaderIndex(headers, ['NUMRATED', 'NUMBER RATED', 'SUMMARYGROUPSIZE']);
  const sumEpIdx = resolveHeaderIndex(headers, ['SUM_EP', 'SUMEP', 'TOTALEP']);
  
  // Recommendation indices
  const indEpIdx = resolveHeaderIndex(headers, ['IND_EP', 'INDEP', 'EP']);
  const indMpIdx = resolveHeaderIndex(headers, ['IND_MP', 'INDMP', 'MP']);
  const indPIdx = resolveHeaderIndex(headers, ['IND_P', 'INDP', 'P']);
  const indPrIdx = resolveHeaderIndex(headers, ['IND_PR', 'INDPR', 'PR']);
  const indSpIdx = resolveHeaderIndex(headers, ['IND_SP', 'INDSP', 'SP']);
  

  if (ssnIdx === -1 && nameIdx === -1) {
    throw new Error('Crucial fields "SSN" and "NAME" are both missing in SUBEVAL file headers.');
  }
  
  let dummySsnCounter = 1;
  const nameToDummySsnMap = {};
  
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < headers.length) continue;
    
    let rawSsn = ssnIdx !== -1 ? row[ssnIdx] : '';
    let ssn = '';
    
    if (rawSsn && rawSsn.trim() !== '') {
      ssn = normalizeSSN(rawSsn);
    } else {
      const name = nameIdx !== -1 ? (row[nameIdx] || '').trim() : '';
      if (!name) continue;
      
      const cleanName = name.toUpperCase();
      if (!nameToDummySsnMap[cleanName]) {
        nameToDummySsnMap[cleanName] = `DUMMYSSN_${dummySsnCounter++}`;
      }
      ssn = nameToDummySsnMap[cleanName];
    }
    
    const fromDate = fromIdx !== -1 ? parseDate(row[fromIdx]) : '';
    const toDate = toIdx !== -1 ? parseDate(row[toIdx]) : '';
    
    // Parse trait calculations using parseFloatOrIntegerPct
    const ita = avgIdx !== -1 ? parseFloatOrIntegerPct(row[avgIdx]) : 0;
    const rsca = rscumavgIdx !== -1 ? parseFloatOrIntegerPct(row[rscumavgIdx]) : 0;
    const relativeValue = parseFloat((ita - rsca).toFixed(2));
    
    const durationMonths = calculateDurationMonths(row[fromIdx], row[toIdx]);
    const summaryGroupSize = numratedIdx !== -1 ? parseInt(row[numratedIdx], 10) || 0 : 0;
    const totalEPs = sumEpIdx !== -1 ? parseInt(row[sumEpIdx], 10) || 0 : 0;
    
    // Determine recommendation
    let recommendation = 'P'; // Default
    if (indEpIdx !== -1 && row[indEpIdx] === 'X') recommendation = 'EP';
    else if (indMpIdx !== -1 && row[indMpIdx] === 'X') recommendation = 'MP';
    else if (indPIdx !== -1 && row[indPIdx] === 'X') recommendation = 'P';
    else if (indPrIdx !== -1 && row[indPrIdx] === 'X') recommendation = 'PR';
    else if (indSpIdx !== -1 && row[indSpIdx] === 'X') recommendation = 'SP';
    
    const isEP = recommendation === 'EP';
    
    const fitrep = {
      reportId: `${fromDate}_${toDate}_${ssn}`,
      officerName: nameIdx !== -1 ? row[nameIdx].trim() : 'Unknown',
      reportingSeniorName: rsNameIdx !== -1 ? row[rsNameIdx].trim() : 'Unknown',
      reportingSeniorUIC: rsUicIdx !== -1 ? row[rsUicIdx].trim() : '',
      fromDate,
      toDate,
      durationMonths,
      ita,
      rsca,
      relativeValue,
      recommendation,
      summaryGroupSize,
      isEP,
      totalEPs,
      hardBreakout: '' // Qualitative manual overlay placeholder
    };
    
    if (!fitrepMap[ssn]) {
      fitrepMap[ssn] = [];
    }
    fitrepMap[ssn].push(fitrep);
  }
  
  // Sort FITREP arrays chronologically
  for (const ssn in fitrepMap) {
    fitrepMap[ssn].sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));
  }
  
  return fitrepMap;
}

/**
 * Checks if two names fuzzy match (last name identical, first names overlap or are prefixes).
 * Supports military ranks, reverse name ordering, and set-based intersection.
 * 
 * @param {string} name1 
 * @param {string} name2 
 * @returns {boolean} True if they fuzzy match
 */
export function fuzzyNameMatch(name1, name2) {
  if (!name1 || !name2) return false;
  
  const ignoredWords = [
    'lcdr', 'lt', 'cdr', 'ens', 'ltjg', 'mr', 'mrs', 'capt', 'adm', 
    'radm', 'vadm', 'cwo', 'wo', 'mcpo', 'scpo', 'cpo', 'officer'
  ];

  const cleanTokens = (name) => {
    return name.toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .split(/\s+/)
      .filter(t => t.length > 0 && !ignoredWords.includes(t));
  };

  const tokens1 = cleanTokens(name1);
  const tokens2 = cleanTokens(name2);

  if (tokens1.length === 0 || tokens2.length === 0) return false;

  // Construct sets to find overlapping tokens (representing the last name or a shared name)
  const set1 = new Set(tokens1);
  const set2 = new Set(tokens2);

  let hasLastNameMatch = false;
  let matchedToken = '';
  for (const t of tokens1) {
    if (set2.has(t)) {
      hasLastNameMatch = true;
      matchedToken = t;
      break;
    }
  }

  if (!hasLastNameMatch) return false;

  // Filter out the matched token to compare the remaining name tokens (first name / initial)
  const remaining1 = tokens1.filter(t => t !== matchedToken);
  const remaining2 = tokens2.filter(t => t !== matchedToken);

  if (remaining1.length === 0 || remaining2.length === 0) return true;

  const first1 = remaining1[0];
  const first2 = remaining2[0];

  if (first1 === first2 || 
      first1.startsWith(first2) || 
      first2.startsWith(first1)) {
    return true;
  }

  return false;
}

/**
 * Checks if two SSNs are a partial match (e.g. one ends with the last 4 digits of the other, 
 * or both are 9 digits and share the same last 4 digits).
 * 
 * @param {string|number} ssn1 
 * @param {string|number} ssn2 
 * @returns {boolean} True if they match partially
 */
export function partialSSNMatch(ssn1, ssn2) {
  if (!ssn1 || !ssn2) return false;
  
  const clean1 = String(ssn1).replace(/[^\d]/g, '');
  const clean2 = String(ssn2).replace(/[^\d]/g, '');
  
  if (clean1.length === 0 || clean2.length === 0) return false;
  
  if (clean1.length === 4 && clean2.endsWith(clean1)) return true;
  if (clean2.length === 4 && clean1.endsWith(clean2)) return true;
  
  // If both are 9 digits, check if they share the last 4 digits
  if (clean1.length === 9 && clean2.length === 9 && clean1.slice(-4) === clean2.slice(-4)) {
    return true;
  }
  
  return false;
}

/**
 * Reconciles parsed SUPPLY Active Duty roster with parsed FITREP histories.
 * Supports fuzzy name matching and partial SSN matching for files with missing names/keys.
 * 
 * @param {Record<string, Object>} supplyRoster Mapped officers
 * @param {Record<string, Object[]>} subevalHistory Mapped FITREPs
 * @returns {Object} Master Database containing merged data and parsing logs
 */
export function linkAndReconcile(supplyRoster, subevalHistory) {
  const masterDb = {
    officers: { ...supplyRoster },
    billets: {},
    commands: {},
    orphans: [],
    fuzzyMatches: [] // Suggested pairings
  };
  
  // Match fitrep lists to SUPPLY active duty officers
  for (const ssn in subevalHistory) {
    const fitreps = subevalHistory[ssn];
    
    if (masterDb.officers[ssn]) {
      masterDb.officers[ssn].fitrepHistory = fitreps;
    } else {
      // Direct SSN search failed. Try fuzzy and partial matching!
      const subevalName = fitreps[0] ? fitreps[0].officerName : '';
      let bestCandidate = null;
      let strength = 0; // Match strength: 0=none, 1=name only, 2=ssn only, 3=both
      
      for (const activeSsn in masterDb.officers) {
        const activeOfficer = masterDb.officers[activeSsn];
        const nameMatches = fuzzyNameMatch(activeOfficer.name, subevalName);
        const ssnMatches = partialSSNMatch(activeSsn, ssn);
        
        let score = 0;
        if (nameMatches && ssnMatches) score = 3;
        else if (nameMatches) score = 1;
        else if (ssnMatches) score = 2;
        
        if (score > strength) {
          strength = score;
          bestCandidate = activeOfficer;
        }
      }
      
      if (bestCandidate && strength >= 1) {
        let matchType = '';
        if (strength === 3) matchType = 'STRONG_NAME_AND_SSN';
        else if (strength === 2) matchType = 'SSN_ONLY';
        else if (strength === 1) matchType = 'NAME_ONLY';
        
        bestCandidate.fitrepHistory = fitreps;
        bestCandidate.isFuzzyLinked = true;
        bestCandidate.fuzzyLinkDetails = {
          originalSSN: ssn,
          originalName: subevalName,
          matchType: matchType
        };
        
        masterDb.fuzzyMatches.push({
          subevalSSN: ssn,
          subevalName,
          activeSSN: bestCandidate.ssn,
          activeName: bestCandidate.name,
          matchType: matchType,
          fitreps: fitreps
        });
      } else {
        // Complete orphan
        masterDb.orphans.push({
          ssn,
          officerName: subevalName,
          fitrepCount: fitreps.length,
          mostRecentFITREP: fitreps[fitreps.length - 1]
        });
      }
    }
  }
  
  // Automatically populate Billet and Command registers from officers to maintain system integrity
  for (const ssn in masterDb.officers) {
    const officer = masterDb.officers[ssn];
    const uic = officer.currentUIC;
    
    if (uic) {
      if (!masterDb.commands[uic]) {
        masterDb.commands[uic] = {
          uic,
          name: officer.cmdName || `Command UIC ${uic}`,
          homeport: officer.homeport || 'Unknown',
          billetsAuthorized: 45, // default
          billets: [],
          assignedOfficers: []
        };
      } else if (officer.homeport && masterDb.commands[uic].homeport === 'Unknown') {
        masterDb.commands[uic].homeport = officer.homeport;
      }
      masterDb.commands[uic].assignedOfficers.push(ssn);
    }
  }
  
  return masterDb;
}
