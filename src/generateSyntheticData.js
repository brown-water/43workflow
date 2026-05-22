/**
 * src/generateSyntheticData.js
 * 
 * Script to generate large, high-fidelity synthetic datasets for testing the Master Planner.
 * Generates 60 unique officers with varying ranks, billets, and continuous, chronological FITREP histories.
 */

const fs = require('fs');
const path = require('path');

const firstNames = ['MAVERICK', 'ICEMAN', 'GOOSE', 'SLIDER', 'VIPER', 'JESTER', 'CHARLIE', 'COUGAR', 'WOLFMAN', 'MERLIN', 'HOLLYWOOD', 'CHIPPER', 'SUNDOWN', 'SLAYER', 'PAPPY', 'ROOSTER', 'HANGMAN', 'PHOENIX', 'BOB', 'COYOTE', 'PAYBACK', 'FANBOY', 'FRITZ', 'HALO', 'STINGER', 'SPONGE', 'BISHOP', 'NEO', 'TRINITY', 'MORPHEUS', 'CYPHER', 'APOC', 'SWITCH', 'TANK', 'DOZER', 'AGENT', 'SMITH', 'BROWN', 'JONES', 'COOPER', 'MILLER', 'DAVIS', 'RODRIGUEZ', 'WILSON', 'THOMAS', 'ANDERSON', 'TAYLOR', 'MOORE', 'JACKSON', 'MARTIN', 'LEE', 'PECK', 'ARCHER', 'LANA', 'CYRIL', 'KRIEGEL', 'WOODHOUSE', 'SLATER', 'BARRY', 'TREXLER'];
const lastNames = ['MITCHELL', 'KAZANSKY', 'BRADSHAW', 'KERNER', 'METCALF', 'HEATHERLY', 'BLACKWOOD', 'SLONE', 'LEONARD', 'WELLS', 'NEELY', 'TRAVEN', 'GARCIA', 'CONNER', 'BOYINGTON', 'SERESIN', 'TRACE', 'FLOYD', 'BASSETT', 'DIAZ', 'SHERRILL', 'TARANTO', 'COVINGTON', 'LINDSEY', 'JORDEN', 'LUCAS', 'MILLER', 'ANDERSON', 'REYNOLDS', 'FISHER', 'WHITE', 'GREEN', 'HARRIS', 'CLARK', 'LEWIS', 'ROBINSON', 'WALKER', 'HALL', 'ALLEN', 'YOUNG', 'KING', 'WRIGHT', 'LOPEZ', 'HILL', 'SCOTT', 'GREENE', 'ADAMS', 'BAKER', 'GONZALEZ', 'NELSON', 'CARTER', 'MITCHELL', 'PEREZ', 'ROBERTS', 'TURNER', 'PHILLIPS', 'CAMPBELL', 'PARKER', 'EVANS', 'EDWARDS'];

const ranks = ['ENS', 'LTJG', 'LT', 'LCDR', 'CDR'];
const ranksFull = {
  'ENS': { pg: 'O1', years: 2, next: 'LTJG' },
  'LTJG': { pg: 'O2', years: 2, next: 'LT' },
  'LT': { pg: 'O3', years: 5, next: 'LCDR' },
  'LCDR': { pg: 'O4', years: 6, next: 'CDR' },
  'CDR': { pg: 'O5', years: 6, next: null }
};

const commands = [
  { uic: '09465', name: 'VAW 116', port: 'P MUGU' },
  { uic: '55151', name: 'HSM 48', port: 'MAYPORT' },
  { uic: '63407', name: 'NAVAVNWARDEVCEN', port: 'FALLON' },
  { uic: '09558', name: 'VFA 151', port: 'LEMOORE' },
  { uic: '62980', name: 'NPC MILLINGTON', port: 'MILLINGTON' }
];

const billetTitles = ['SQN CO', 'SQN XO', 'SQN DEPT HD', 'LINE DIVO', 'ASST OPS', 'SAFETY OFF', 'NATOPS OFF', 'STUDENT', 'INSTRUCTOR'];

// Load Supply Headers template
const headersPath = path.join(__dirname, '../context/headers.csv');
const supplyHeaders = fs.readFileSync(headersPath, 'utf8').trim().split(',');

// Insert 'ISSN' if not present (between BNOBC(2) and INAME)
const ssnIdx = supplyHeaders.indexOf('ISSN');
if (ssnIdx === -1) {
  const bnobc2Idx = supplyHeaders.indexOf('BNOBC(2)');
  supplyHeaders.splice(bnobc2Idx + 1, 0, 'ISSN');
}

// Helper: Format Date as YYYYMMDD
function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}${m}${d}`;
}

// Generate the 60 officers
const officers = [];
for (let i = 0; i < 60; i++) {
  // Ranks distribution:
  // 0 - 9: CDR (10)
  // 10 - 29: LCDR (20)
  // 30 - 59: LT (30)
  let currentRank = 'LT';
  if (i < 10) currentRank = 'CDR';
  else if (i < 30) currentRank = 'LCDR';
  
  const ssnVal = 900000001 + i;
  const ssn = String(ssnVal);
  const name = `${lastNames[i % lastNames.length]} ${firstNames[i % firstNames.length]} ${String.fromCharCode(65 + (i % 26))}`;
  const designator = i % 4 === 0 ? '1320' : '1310'; // 1320 NFO, 1310 Pilot
  
  const cmd = commands[i % commands.length];
  const billet = billetTitles[i % billetTitles.length];
  
  officers.push({
    ssn,
    name,
    rank: currentRank,
    designator,
    uic: cmd.uic,
    cmdName: cmd.name,
    port: cmd.port,
    billetTitle: billet
  });
}

// 1. Generate SUPPLY_sYNTH_large.txt
const supplyRows = [supplyHeaders.join('%')];

officers.forEach(officer => {
  // Create an array matching the exact column count of supplyHeaders
  const row = new Array(supplyHeaders.length).fill('');
  
  // Map specific values to their corresponding index using headers.csv
  const setValue = (headerName, val) => {
    const idx = supplyHeaders.indexOf(headerName);
    if (idx !== -1) {
      row[idx] = val;
    }
  };
  
  // Set required active duty fields
  setValue('DATE', '20260422');
  setValue('AAUIC', officer.uic);
  setValue('ASNAME', officer.cmdName);
  setValue('AHPORT', officer.port);
  setValue('BRANK', officer.rank);
  setValue('BDESIG', officer.designator === '1310' ? '1301' : '1302');
  setValue('BBTITLE', officer.billetTitle);
  
  setValue('ISSN', officer.ssn);
  setValue('INAME', officer.name);
  setValue('IRANK', officer.rank);
  setValue('IDESIG', officer.designator);
  setValue('IPRD', '20270630'); // Future standard PRD
  setValue('IEDD', '202706');
  setValue('IULT.AUIC', officer.uic);
  
  // Set some placeholder/typical values
  setValue('ISEX', officer.ssn % 2 === 0 ? 'F' : 'M');
  setValue('IRANK.DT', '20240901');
  setValue('IYR.GRP', '20120');
  
  supplyRows.push(row.join('%'));
});

// Write Supply file
const supplyFileContent = supplyRows.join('\n') + '\n';
const supplyOutputPath = path.join(__dirname, '../context/SUPPLY_sYNTH.txt');
fs.writeFileSync(supplyOutputPath, supplyFileContent);
console.log(`Generated SUPPLY dataset with ${officers.length} active duty officers.`);

// 2. Generate SUBEVAL_synthetic.csv
const subevalHeaders = 'SSN,NAME,PG,RANK,DESIG,ACTY,TITLE,FROM,TO,RS_NAME,RS_PG,RSTITLE,PREXP,EO,MB,TEAM,MISS,LEAD,TACT,AVG,MILESTONE1,MILESTONE2,NUMRATED,RSSUMAVG,RSCUMAVG,IND_NOB,IND_SP,IND_PR,IND_P,IND_MP,IND_EP,SUM_SP,SUM_PR,SUM_P,SUM_MP,SUM_EP,PROMSTAT,PERIODIC,CONCURRENT,OPS_CDR,REGULAR,DET_IND,DET_RS,SPECIAL,NOB,ACTIVE,ADSW,FTS,INACTIVE,PFA,OGLI,AUIC';
const subevalRows = [subevalHeaders];

// Date generation starting back in time
const baseYear = 2005;

officers.forEach(officer => {
  const fitrepCount = officer.rank === 'CDR' ? 22 : (officer.rank === 'LCDR' ? 17 : 11);
  
  let currentFitrepRank = 'ENS';
  let fitrepDate = new Date(baseYear, 5, 1); // Start date
  
  for (let f = 0; f < fitrepCount; f++) {
    // Generate chronological dates
    const fromDate = new Date(fitrepDate);
    // Period is typically 6 or 12 months
    const durationMonths = f % 3 === 0 ? 6 : 12;
    fitrepDate.setMonth(fitrepDate.getMonth() + durationMonths);
    const toDate = new Date(fitrepDate);
    // Add 1 day for next period start
    fitrepDate.setDate(fitrepDate.getDate() + 1);
    
    // Ranks progression logic
    // LT: ENS (2) -> LTJG (3) -> LT (6+)
    // LCDR: ENS (2) -> LTJG (3) -> LT (6) -> LCDR (6+)
    // CDR: ENS (2) -> LTJG (3) -> LT (6) -> LCDR (6) -> CDR (5+)
    if (f >= 2 && currentFitrepRank === 'ENS') currentFitrepRank = 'LTJG';
    if (f >= 5 && currentFitrepRank === 'LTJG') currentFitrepRank = 'LT';
    if (f >= 11 && currentFitrepRank === 'LT' && (officer.rank === 'LCDR' || officer.rank === 'CDR')) currentFitrepRank = 'LCDR';
    if (f >= 17 && currentFitrepRank === 'LCDR' && officer.rank === 'CDR') currentFitrepRank = 'CDR';
    
    const pg = ranksFull[currentFitrepRank].pg;
    
    // Trait marks (4 or 5 typically, sometimes 3)
    const marks = [];
    for (let m = 0; m < 7; m++) {
      marks.push(4 + (f % 2) + (m % 2) > 5 ? 5 : 4 + (f % 2) + (m % 2));
    }
    const avgScore = Math.round((marks.reduce((a, b) => a + b, 0) / 7) * 100);
    
    // Raters cumulative avg
    const rscumavg = 380 + (f % 15) * 5;
    
    // Promotion marks
    // Distribute EP/MP/P/PR
    let isEP = ' ', isMP = ' ', isP = ' ', isPR = ' ', isSP = ' ';
    const rand = (f + officer.ssn) % 5;
    if (rand === 0) isEP = 'X';
    else if (rand === 1) isMP = 'X';
    else isP = 'X';
    
    // Summary group counts
    const sumEP = 2 + (f % 3);
    const sumMP = 3 + (f % 4);
    const sumP = 5 + (f % 5);
    const numrated = sumEP + sumMP + sumP;
    
    const row = [
      officer.ssn,
      officer.name,
      pg,
      currentFitrepRank.padEnd(5, ' '),
      officer.designator,
      officer.cmdName.padEnd(16, ' '),
      officer.billetTitle.padEnd(14, ' '),
      formatDate(fromDate),
      formatDate(toDate),
      `RS_LASTNAME ${f}`,
      'O6',
      'CO',
      marks[0], marks[1], marks[2], marks[3], marks[4], marks[5], marks[6],
      avgScore,
      '                    ', '                    ',
      String(numrated).padStart(4, '0'),
      '000',
      String(rscumavg).padStart(3, '0'),
      ' ', isSP, isPR, isP, isMP, isEP,
      '000', '000', String(sumP).padStart(3, '0'), String(sumMP).padStart(3, '0'), String(sumEP).padStart(3, '0'),
      'REGULAR', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '0',
      'N', 'S', officer.uic
    ];
    
    subevalRows.push(row.join(','));
  }
});

const subevalFileContent = subevalRows.join('\n') + '\n';
const subevalOutputPath = path.join(__dirname, '../context/SUBEVAL_synthetic.csv');
fs.writeFileSync(subevalOutputPath, subevalFileContent);
console.log(`Generated SUBEVAL dataset with ${subevalRows.length - 1} longitudinal FITREP records.`);
console.log('Successfully generated large, high-fidelity testing datasets!');
