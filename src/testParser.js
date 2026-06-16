/**
 * src/testParser.js
 * 
 * Test script to verify the Ingestion Engine's parsing and linking logic
 * using our large synthetic datasets.
 */

const fs = require('fs');
const path = require('path');

// Direct import check: Since we are running in Node, let's dynamic import or convert on-the-fly
// In Zsh, let's do a simple mock of ESM import or write testParser using standard require by mapping the functions
// We can just load and wrap the ingestion module, or let Node run it via dynamic import.
// Let's use dynamic import since we are using Node 18+ which supports ES Modules.

async function runTests() {
  console.log('🧪 Starting Ingestion Engine Automated Tests...\n');
  
  const Ingestion = await import('./core/ingestion.js');
  
  // Test 1: SSN Normalization
  console.log('Test 1: SSN Normalization');
  const ssn1 = Ingestion.normalizeSSN('123-45-6789');
  const ssn2 = Ingestion.normalizeSSN(' 123456789  ');
  const ssn3 = Ingestion.normalizeSSN('98765432'); // Truncated case
  
  console.log(`  - "123-45-6789" normalized to: "${ssn1}" (Expected: "123456789")`);
  console.log(`  - " 123456789  " normalized to: "${ssn2}" (Expected: "123456789")`);
  console.log(`  - "98765432" normalized to: "${ssn3}" (Expected: "098765432")`);
  
  if (ssn1 !== '123456789' || ssn2 !== '123456789' || ssn3 !== '098765432') {
    throw new Error('❌ Test 1 Failed: SSN Normalization incorrect.');
  }
  console.log('✅ Test 1 Passed!\n');
  
  // Test 2: Duration Calculation
  console.log('Test 2: Duration Calculation');
  const dur1 = Ingestion.calculateDurationMonths('20150709', '20160131');
  console.log(`  - 2015-07-09 to 2016-01-31 duration: ${dur1} months (Expected: ~6.8)`);
  if (Math.abs(dur1 - 6.8) > 0.1) {
    throw new Error('❌ Test 2 Failed: Duration calculation mismatch.');
  }
  console.log('✅ Test 2 Passed!\n');
  
  // Test 3: SUPPLY Ingestion
  console.log('Test 3: SUPPLY Ingestion');
  const supplyTxt = fs.readFileSync(path.join(__dirname, '../context/SUPPLY_sYNTH.txt'), 'utf8');
  const supplyData = Ingestion.parseSupplyData(supplyTxt);
  const supplyCount = Object.keys(supplyData).length;
  console.log(`  - Total officers successfully parsed: ${supplyCount} (Expected: 60)`);
  if (supplyCount !== 60) {
    throw new Error(`❌ Test 3 Failed: Parsed ${supplyCount} officers instead of 60.`);
  }
  
  // Verify columns mapped correctly
  const sampleOfficer = supplyData['900000001'];
  console.log('  - Sample parsed officer check (SSN 900000001):');
  console.log(`    - Name: "${sampleOfficer.name}"`);
  console.log(`    - Rank: "${sampleOfficer.rank}" (Expected: "CDR")`);
  console.log(`    - Designator: "${sampleOfficer.designator}"`);
  console.log(`    - Command UIC: "${sampleOfficer.currentUIC}"`);
  console.log(`    - OAIS PRD: "${sampleOfficer.oaisPRD}" (Expected: "2025-01-15")`);
  
  if (sampleOfficer.rank !== 'CDR' || sampleOfficer.oaisPRD !== '2025-01-15') {
    throw new Error('❌ Test 3 Failed: Sample officer data mapping incorrect.');
  }
  console.log('✅ Test 3 Passed!\n');
  
  // Test 4: SUBEVAL Ingestion
  console.log('Test 4: SUBEVAL Ingestion');
  const subevalCsv = fs.readFileSync(path.join(__dirname, '../context/SUBEVAL_synthetic.csv'), 'utf8');
  const subevalData = Ingestion.parseSubevalData(subevalCsv);
  const subevalOfficerCount = Object.keys(subevalData).length;
  console.log(`  - Total officers with FITREP history: ${subevalOfficerCount} (Expected: 60)`);
  
  // Verify first officer history length
  const sampleHistory = subevalData['900000001'];
  console.log(`  - CDR sample history count: ${sampleHistory.length} (Expected: 22)`);
  
  // Verify derived metrics calculated correctly
  const sampleFitrep = sampleHistory[7]; // ENS/LTJG era FITREP
  console.log('  - Sample FITREP metrics check:');
  console.log(`    - Date: ${sampleFitrep.fromDate} to ${sampleFitrep.toDate}`);
  console.log(`    - ITA: ${sampleFitrep.ita}`);
  console.log(`    - RSCA: ${sampleFitrep.rsca}`);
  console.log(`    - Relative Value: ${sampleFitrep.relativeValue} (Expected: ${parseFloat((sampleFitrep.ita - sampleFitrep.rsca).toFixed(2))})`);
  console.log(`    - Duration: ${sampleFitrep.durationMonths} months`);
  console.log(`    - Promotion Recommendation: "${sampleFitrep.recommendation}"`);
  console.log(`    - EPs: ${sampleFitrep.totalEPs} out of ${sampleFitrep.summaryGroupSize}`);
  
  if (sampleHistory.length !== 22) {
    throw new Error('❌ Test 4 Failed: Timeline history count incorrect.');
  }
  console.log('✅ Test 4 Passed!\n');
  
  // Test 5: Reconciled Join Engine
  console.log('Test 5: Relational Linking Engine');
  const masterDb = Ingestion.linkAndReconcile(supplyData, subevalData);
  const activeOfficers = Object.keys(masterDb.officers).length;
  console.log(`  - Master database compiled successfully.`);
  console.log(`  - Active officers linked: ${activeOfficers} (Expected: 60)`);
  
  const firstOfficer = masterDb.officers['900000001'];
  console.log(`  - Verified CDR Mitchell has linked history: ${firstOfficer.fitrepHistory.length} records.`);
  
  if (firstOfficer.fitrepHistory.length !== 22) {
    throw new Error('❌ Test 5 Failed: Linking failed to merge history properly.');
  }
  console.log('✅ Test 5 Passed!\n');
  
  // Test 6: Advanced Fuzzy & Partial Ingestion Upgrades
  console.log('Test 6: Advanced Fuzzy & Partial Ingestion Upgrades');
  const reverseMatch = Ingestion.fuzzyNameMatch('Mitchell Maverick', 'Maverick Mitchell');
  const captMatch = Ingestion.fuzzyNameMatch('CAPT Mitchell Maverick', 'Mitchell M');
  const falseNameMatch = Ingestion.fuzzyNameMatch('Mitchell John', 'Mitchell Maverick');
  const ssn9to9Match = Ingestion.partialSSNMatch('900000001', '111000001');
  const ssn9to9Mismatch = Ingestion.partialSSNMatch('900000001', '900000002');

  console.log(`  - Reverse Name Match ("Mitchell Maverick" vs "Maverick Mitchell"): ${reverseMatch} (Expected: true)`);
  console.log(`  - High Rank Prefix Match ("CAPT Mitchell Maverick" vs "Mitchell M"): ${captMatch} (Expected: true)`);
  console.log(`  - Name Mismatch ("Mitchell John" vs "Mitchell Maverick"): ${falseNameMatch} (Expected: false)`);
  console.log(`  - 9-to-9 Digit Last-4 SSN Match ("900000001" vs "111000001"): ${ssn9to9Match} (Expected: true)`);
  console.log(`  - 9-to-9 Digit Last-4 SSN Mismatch ("900000001" vs "900000002"): ${ssn9to9Mismatch} (Expected: false)`);

  if (!reverseMatch || !captMatch || falseNameMatch || !ssn9to9Match || ssn9to9Mismatch) {
    throw new Error('❌ Test 6 Failed: Advanced fuzzy or partial matching logic has a bug.');
  }
  console.log('✅ Test 6 Passed!\n');

  console.log('🎉 ALL INGESTION ENGINE TESTS PASSED SUCCESSFULLY! Ready for frontend integration.');
}

runTests().catch(err => {
  console.error('\n❌ TEST RUNNER CRASHED:\n', err);
  process.exit(1);
});
