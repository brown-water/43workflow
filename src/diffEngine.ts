import { MasterDatabase, SSN, DateString } from './schema';

// Represents the parsed data from the mainframe (SUPPLY_sYNTH.txt)
export interface OAISOfficerData {
  ssn: SSN;
  oaisPRD: DateString;
  currentUIC: string;
  // Other fields can be added as the parser expands
}

export interface SyncAlert {
  ssn: SSN;
  officerName: string;
  type: 'PRD_MISMATCH' | 'UIC_MISMATCH' | 'MISSING_IN_OAIS';
  message: string;
  oaisValue: string | null;
  intentValue: string | null;
}

/**
 * Core Diff Engine: Compares Legal Status (OAIS) against the Detailer/Placement Intent.
 * 
 * @param oaisData A dictionary of parsed OAIS records, keyed by SSN.
 * @param intentDb The Master Database (Intent of Record).
 * @returns An array of SyncAlert objects highlighting discrepancies.
 */
export function generateSyncAlerts(
  oaisData: Record<SSN, OAISOfficerData>,
  intentDb: MasterDatabase
): SyncAlert[] {
  const alerts: SyncAlert[] = [];

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
    // We compare the Placement Intent PRD against the OAIS legal PRD
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

    // Future cases: UIC mismatches, Designator mismatches, etc. can be added here.
  }

  return alerts;
}
