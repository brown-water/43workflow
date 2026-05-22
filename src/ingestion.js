/**
 * src/ingestion.js
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
 * Converts a raw date string in YYYYMMDD format to ISO YYYY-MM-DD standard.
 * If the date is already formatted or invalid, it returns it safely.
 * 
 * @param {string} dateStr 
 * @returns {string} Standardized date YYYY-MM-DD
 */
export function parseDate(dateStr) {
  if (!dateStr) return '';
  const clean = dateStr.trim();
  if (clean.length === 8 && /^\d+$/.test(clean)) {
    return `${clean.substring(0, 4)}-${clean.substring(4, 6)}-${clean.substring(6, 8)}`;
  }
  // Return input if already formatted or doesn't match YYYYMMDD
  return clean;
}

/**
 * Calculates the exact duration in months between two dates inclusive.
 * 
 * @param {string} fromStr Date in YYYYMMDD or YYYY-MM-DD
 * @param {string} toStr Date in YYYYMMDD or YYYY-MM-DD
 * @returns {number} Fractional months, rounded to 1 decimal place
 */
export function calculateDurationMonths(fromStr, toStr) {
  if (!fromStr || !toStr) return 0;
  
  // Normalize date formats
  const cleanFrom = fromStr.replace(/[^\d]/g, '');
  const cleanTo = toStr.replace(/[^\d]/g, '');
  
  if (cleanFrom.length !== 8 || cleanTo.length !== 8) return 0;
  
  const y1 = parseInt(cleanFrom.substring(0, 4));
  const m1 = parseInt(cleanFrom.substring(4, 6)) - 1;
  const d1 = parseInt(cleanFrom.substring(6, 8));
  
  const y2 = parseInt(cleanTo.substring(0, 4));
  const m2 = parseInt(cleanTo.substring(4, 6)) - 1;
  const d2 = parseInt(cleanTo.substring(6, 8));
  
  const date1 = new Date(Date.UTC(y1, m1, d1));
  const date2 = new Date(Date.UTC(y2, m2, d2));
  
  const diffTime = date2.getTime() - date1.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24) + 1; // Inclusive
  
  return parseFloat((diffDays / 30.4).toFixed(1));
}

/**
 * Parses raw text separated by lines and delimiters.
 * Handles double-quotes in CSV columns robustly.
 * 
 * @param {string} text 
 * @param {string} delimiter 
 * @returns {string[][]} Array of row arrays
 */
export function parseDelimitedText(text, delimiter) {
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    let parts = [];
    if (delimiter === ',') {
      // Robust CSV cell parser handling double-quotes
      let cell = '';
      let inQuotes = false;
      for (let c = 0; c < line.length; c++) {
        const char = line[c];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          parts.push(cell.trim());
          cell = '';
        } else {
          cell += char;
        }
      }
      parts.push(cell.trim());
    } else {
      parts = line.split(delimiter).map(p => p.trim());
    }
    result.push(parts);
  }
  
  return result;
}

/**
 * Parses raw percent-delimited SUPPLY active duty data.
 * 
 * @param {string} rawText Percent delimited string
 * @returns {Record<string, Object>} A list of active duty officers mapped by normalized SSN
 */
export function parseSupplyData(rawText) {
  const rows = parseDelimitedText(rawText, '%');
  if (rows.length < 2) return {};
  
  const headers = rows[0];
  const officers = {};
  
  // Find key index indicators
  const ssnIdx = headers.indexOf('ISSN');
  const nameIdx = headers.indexOf('INAME');
  const rankIdx = headers.indexOf('IRANK');
  const desigIdx = headers.indexOf('IDESIG');
  const uicIdx = headers.indexOf('AAUIC');
  const prdIdx = headers.indexOf('IPRD');
  const scrnIdx = headers.indexOf('ICOMM.SCRN.RSLT');
  
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
    
    officers[ssn] = {
      ssn,
      name,
      rank,
      designator,
      currentUIC,
      oaisPRD,
      scrnResult,
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
 * Parses raw CSV SUBEVAL longitudinal FITREP data.
 * 
 * @param {string} rawText Standard CSV formatted string
 * @returns {Record<string, Object[]>} Mapped lists of FITREPs by normalized SSN
 */
export function parseSubevalData(rawText) {
  const rows = parseDelimitedText(rawText, ',');
  if (rows.length < 2) return {};
  
  const headers = rows[0];
  const fitrepMap = {};
  
  const ssnIdx = headers.indexOf('SSN');
  const nameIdx = headers.indexOf('NAME');
  const fromIdx = headers.indexOf('FROM');
  const toIdx = headers.indexOf('TO');
  const rsNameIdx = headers.indexOf('RS_NAME');
  const rsUicIdx = headers.indexOf('AUIC');
  const avgIdx = headers.indexOf('AVG');
  const rscumavgIdx = headers.indexOf('RSCUMAVG');
  const numratedIdx = headers.indexOf('NUMRATED');
  const sumEpIdx = headers.indexOf('SUM_EP');
  
  // Recommendation indices
  const indEpIdx = headers.indexOf('IND_EP');
  const indMpIdx = headers.indexOf('IND_MP');
  const indPIdx = headers.indexOf('IND_P');
  const indPrIdx = headers.indexOf('IND_PR');
  const indSpIdx = headers.indexOf('IND_SP');
  
  if (ssnIdx === -1) {
    throw new Error('Crucial field "SSN" missing in SUBEVAL file headers.');
  }
  
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < headers.length) continue;
    
    const rawSsn = row[ssnIdx];
    if (!rawSsn) continue;
    
    const ssn = normalizeSSN(rawSsn);
    const fromDate = fromIdx !== -1 ? parseDate(row[fromIdx]) : '';
    const toDate = toIdx !== -1 ? parseDate(row[toIdx]) : '';
    
    // Parse trait calculations
    const ita = avgIdx !== -1 ? parseFloat((parseInt(row[avgIdx]) / 100).toFixed(2)) : 0;
    const rsca = rscumavgIdx !== -1 ? parseFloat((parseInt(row[rscumavgIdx]) / 100).toFixed(2)) : 0;
    const relativeValue = parseFloat((ita - rsca).toFixed(2));
    
    const durationMonths = calculateDurationMonths(row[fromIdx], row[toIdx]);
    const summaryGroupSize = numratedIdx !== -1 ? parseInt(row[numratedIdx]) : 0;
    const totalEPs = sumEpIdx !== -1 ? parseInt(row[sumEpIdx]) : 0;
    
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
      
      if (bestCandidate && strength >= 2) {
        if (strength === 3) {
          // Strong match: name and partial SSN match (e.g. ends in same 4 digits)
          // Automatically link it but flag the record
          bestCandidate.fitrepHistory = fitreps;
          bestCandidate.isFuzzyLinked = true;
          bestCandidate.fuzzyLinkDetails = {
            originalSSN: ssn,
            originalName: subevalName,
            matchType: 'STRONG_NAME_AND_SSN'
          };
        } else {
          // Add as suggestion for user confirmation
          masterDb.fuzzyMatches.push({
            subevalSSN: ssn,
            subevalName,
            activeSSN: bestCandidate.ssn,
            activeName: bestCandidate.name,
            matchType: strength === 2 ? 'SSN_ONLY' : 'NAME_ONLY',
            fitreps: fitreps
          });
          
          masterDb.orphans.push({
            ssn,
            officerName: subevalName,
            fitrepCount: fitreps.length,
            mostRecentFITREP: fitreps[fitreps.length - 1],
            suggestedActiveSSN: bestCandidate.ssn,
            suggestedActiveName: bestCandidate.name,
            matchType: strength === 2 ? 'SSN_ONLY' : 'NAME_ONLY'
          });
        }
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
          billetsAuthorized: 45, // default
          billets: [],
          assignedOfficers: []
        };
      }
      masterDb.commands[uic].assignedOfficers.push(ssn);
    }
  }
  
  return masterDb;
}
