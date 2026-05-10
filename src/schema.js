/**
 * src/schema.js
 * 
 * JSDoc definitions for the Master Database schema.
 * Using JSDoc instead of TypeScript to maintain strict "Zero-Install" browser compatibility.
 */

/** @typedef {string} SSN - Or DoD ID */
/** @typedef {string} UIC - Unit Identification Code */
/** @typedef {string} BSC - Billet Sequence Code */
/** @typedef {string} DateString - YYYY-MM-DD format expected */

/**
 * @typedef {Object} FITREP
 * @property {string} reportId
 * @property {string} reportingSeniorName
 * @property {UIC} reportingSeniorUIC
 * @property {DateString} fromDate
 * @property {DateString} toDate
 * @property {number} durationMonths
 * @property {number} ita - Individual Trait Average
 * @property {number} rsca - Reporting Senior Cumulative Average
 * @property {number} relativeValue - ITA - RSCA
 * @property {'EP' | 'MP' | 'P' | 'PR' | 'SP'} recommendation
 * @property {number} summaryGroupSize
 * @property {boolean} isEP - IND_EP
 * @property {number} totalEPs - SUM_EP
 * @property {string} [hardBreakout] - Manual qualitative entry, e.g., "#1 of 5 EP"
 */

/**
 * @typedef {Object} IStop
 * @property {string} location
 * @property {number} durationMonths
 * @property {string} description
 */

/**
 * @typedef {Object} DetailerIntent
 * @property {UIC} [targetUltimateUIC]
 * @property {DateString} [targetPRD]
 * @property {string} [slateCycle] - e.g., "DH Slate 25-1"
 * @property {string} [fitrepExpectation]
 * @property {IStop[]} [iStops]
 * @property {DateString} [orderTriggerDate] - Calculated ~8 months prior to report date
 * @property {string} [nominationStatus] - e.g., "VIP Package Submitted"
 * @property {boolean} [manualOverrideFlag] - Flag to indicate manual override (e.g., TOPGUN)
 * @property {boolean} isCompleteSlate - Differentiates incomplete intent from legal OAIS order
 */

/**
 * @typedef {Object} PRDChangeLogEntry
 * @property {DateString} date
 * @property {DateString} oldPRD
 * @property {DateString} newPRD
 * @property {string} source - "CO Intent", "Detailer Update", etc.
 * @property {string} user
 * @property {string} changeNote - Manual justification (Expert-in-the-loop)
 */

/**
 * @typedef {Object} PlacementIntent
 * @property {DateString} [intentPRD]
 * @property {PRDChangeLogEntry[]} historicalPRDLog
 */

/**
 * @typedef {Object} OfficerRecord
 * @property {SSN} ssn
 * @property {string} name
 * @property {string} rank
 * @property {string} designator
 * @property {UIC} currentUIC
 * @property {DateString} oaisPRD - Legal Ground Truth
 * @property {FITREP[]} fitrepHistory
 * @property {'A' | 'B' | 'C'} [recordGrade]
 * @property {string[]} [ineligibilityTriggers] - Board History Log events
 * @property {DetailerIntent} detailerIntent
 * @property {PlacementIntent} placementIntent
 */

/**
 * @typedef {Object} BilletRecord
 * @property {BSC} bsc - Billet Sequence Code
 * @property {UIC} uic - Command UIC
 * @property {string} title
 * @property {string} designatorReq
 * @property {string} rankReq
 * @property {boolean} isPosted - Has it been marked available in OAIS?
 * @property {boolean} isSuppressed - Hidden from demand signal
 * @property {string} billetNotes - e.g., "Requires 2D1 AQD"
 */

/**
 * @typedef {Object} CommandRecord
 * @property {UIC} uic
 * @property {string} name
 * @property {number} billetsAuthorized - BA
 * @property {DateString} [deploymentWindowStart]
 * @property {DateString} [deploymentWindowEnd]
 * @property {boolean} [tacticalPivotFlag] - Manual override for fill priority
 * @property {BSC[]} [billetsPriority] - Pop-up Vacancies / Senior Slates unfilled seats queue
 * @property {BSC[]} billets - List of BSCs under this command
 * @property {SSN[]} assignedOfficers - List of SSNs currently mapped to this UIC
 */

/**
 * @typedef {Object} SquadronExportOfficer
 * @property {SSN} ssn
 * @property {DateString} [coIntentPRD] - CO requested PRD (e.g. extension)
 * @property {string} [coNotes] - Any context the CO provided
 */

/**
 * @typedef {Object} SquadronExport
 * @property {UIC} uic
 * @property {SquadronExportOfficer[]} officers
 */

/**
 * @typedef {Object} MasterDatabase
 * @property {Record<SSN, OfficerRecord>} officers
 * @property {Record<BSC, BilletRecord>} billets
 * @property {Record<UIC, CommandRecord>} commands
 */

export {}; // Ensure it's treated as a module