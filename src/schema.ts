// src/schema.ts

// --- Basic Types ---
export type SSN = string; // Or DoD ID
export type UIC = string; // Unit Identification Code
export type BSC = string; // Billet Sequence Code
export type DateString = string; // YYYY-MM-DD format expected

// --- FITREP Data (Phase 1.1 Bridge) ---
export interface FITREP {
  reportId: string;
  reportingSeniorName: string;
  reportingSeniorUIC: UIC;
  fromDate: DateString;
  toDate: DateString;
  durationMonths: number;
  ita: number; // Individual Trait Average
  rsca: number; // Reporting Senior Cumulative Average
  relativeValue: number; // ITA - RSCA
  recommendation: 'EP' | 'MP' | 'P' | 'PR' | 'SP';
  summaryGroupSize: number;
  isEP: boolean; // IND_EP
  totalEPs: number; // SUM_EP
  hardBreakout?: string; // Manual qualitative entry, e.g., "#1 of 5 EP"
}

// --- Detailer Intent Types ---
export interface IStop {
  location: string;
  durationMonths: number;
  description: string;
}

export interface DetailerIntent {
  targetUltimateUIC?: UIC;
  targetPRD?: DateString;
  slateCycle?: string; // e.g., "DH Slate 25-1"
  fitrepExpectation?: string;
  iStops?: IStop[];
  orderTriggerDate?: DateString; // Calculated ~8 months prior to report date
  nominationStatus?: string; // e.g., "VIP Package Submitted"
  manualOverrideFlag?: boolean; // Flag to indicate manual override (e.g., TOPGUN)
  isCompleteSlate: boolean; // Differentiates incomplete intent from legal OAIS order
}

// --- Placement Officer Intent Types ---
export interface PRDChangeLogEntry {
  date: DateString;
  oldPRD: DateString;
  newPRD: DateString;
  source: string; // "CO Intent", "Detailer Update", etc.
  user: string;
  changeNote: string; // Manual justification (Expert-in-the-loop)
}

export interface PlacementIntent {
  intentPRD?: DateString;
  historicalPRDLog: PRDChangeLogEntry[];
}

// --- Master Officer Record ---
export interface OfficerRecord {
  ssn: SSN;
  name: string;
  rank: string;
  designator: string;
  currentUIC: UIC;
  oaisPRD: DateString; // Legal Ground Truth
  
  // Computed / Historical
  fitrepHistory: FITREP[];
  recordGrade?: 'A' | 'B' | 'C';
  ineligibilityTriggers?: string[]; // Board History Log events
  
  // Intent Data
  detailerIntent: DetailerIntent;
  placementIntent: PlacementIntent;
}

// --- Master Billet Record ---
export interface BilletRecord {
  bsc: BSC; // Billet Sequence Code
  uic: UIC; // Command UIC
  title: string;
  designatorReq: string;
  rankReq: string;
  
  // Placement Status
  isPosted: boolean; // Has it been marked available in OAIS?
  isSuppressed: boolean; // Hidden from demand signal
  billetNotes: string; // e.g., "Requires 2D1 AQD"
}

// --- Command / Squadron View Data ---
export interface CommandRecord {
  uic: UIC;
  name: string;
  billetsAuthorized: number; // BA
  deploymentWindowStart?: DateString;
  deploymentWindowEnd?: DateString;
  tacticalPivotFlag?: boolean; // Manual override for fill priority
  billetsPriority?: BSC[]; // Pop-up Vacancies / Senior Slates unfilled seats queue
  
  // Related data (Resolved at runtime or stored directly)
  billets: BSC[]; // List of BSCs under this command
  assignedOfficers: SSN[]; // List of SSNs currently mapped to this UIC
}

// --- Squadron Export / CO Intent ---
export interface SquadronExportOfficer {
  ssn: SSN;
  coIntentPRD?: DateString; // CO requested PRD (e.g. extension)
  coNotes?: string; // Any context the CO provided
}

export interface SquadronExport {
  uic: UIC;
  officers: SquadronExportOfficer[];
}

// --- Master Database Root ---
export interface MasterDatabase {
  officers: Record<SSN, OfficerRecord>;
  billets: Record<BSC, BilletRecord>;
  commands: Record<UIC, CommandRecord>;
}
