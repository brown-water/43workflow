# PRD: Pseudo-Backend (The Read Bridge)

**Label:** `needs-triage`

## Problem Statement

Placement Officers and Detailers rely on the "Master Planner" (a local Intent of Record) to track career paths and command health, but the definitive System of Record (OAIS) is a rigid, disconnected mainframe. This disconnect forces a manual "5-Step ETL Drill" to "swivel-chair" data between systems. There is no automated way to track when a Detailer's "Intent" diverges from the "Legal Status" in OAIS, nor an automated way to ingest longitudinal FITREP data (from SUBEVALs) to assess an officer's Record Strength continuously without manual data entry.

## Solution

Build a "Pseudo-Backend" that automates the "Read Bridge" (Phase 1 and 1.1) from the mainframe and FITREP systems. This backend will automatically ingest raw data dumps (e.g., `SUPPLY_sYNTH.txt` and `SUBEVAL_DDMMYY.csv`) from a local Watch Folder, parse them into a unified data structure, and act as a "Diff Engine" that flags "Gotcha Moments" (discrepancies between Intent and OAIS). The result is a unified, OAIS-Aware state output (JSON/CSV) that the Master Planner frontend can consume, completely eliminating the manual ETL drill.

## User Stories

1. As a Placement Officer, I want to drop daily OAIS extracts into a Watch Folder, so that the system automatically ingests the latest personnel data without manual Excel manipulation.
2. As a Placement Officer, I want to drop daily FITREP extracts (`SUBEVAL_DDMMYY.csv`) into a Watch Folder, so that the system automatically ingests the latest performance data.
3. As a Detailer, I want the system to parse cryptic mainframe fields using a data dictionary, so that I can view human-readable values in my tools.
4. As a Detailer, I want the system to calculate Relative Value (RV) from ITA and RSCA data from my FITREP imports, so that I can quickly assess an officer's breakout performance.
5. As a Detailer, I want the system to calculate the Report Duration (TO - FROM) for each FITREP, so that I can use it as a tie-breaker for competitive slating.
6. As a Detailer, I want the system to flag when my Intent PRD in the Master Planner does not match the OAIS PRD, so that I am alerted to administrative discrepancies (Gotcha Moments).
7. As a Placement Officer, I want a unified JSON export of the merged Master Database state, so that my Command View and Slating modules have a single source of truth.
8. As a Detailer, I want to be alerted if an officer's FITREP summary data implies a missing hard breakout or gap in their record, so that I can manually intervene.

## Implementation Decisions

- **File Ingestion Module:** A module to watch a local directory for incoming data dumps.
- **Data Parsing & ETL Module:**
  - Will handle `%` or `?` delimited files from the MECH FTP.
  - Will parse `SUBEVAL_DDMMYY.csv`.
  - Will map legacy column headers to modern JSON schema properties using the `headers.csv` dictionary.
  - Designed as a deep, pure module that takes raw text strings/streams and outputs structured arrays of objects.
- **Reconciliation Engine (Diff Engine):**
  - Will merge the parsed OAIS and SUBEVAL data using SSN/DoD ID as the primary key.
  - Will perform logical diffs against a known "Intent" state object to identify and flag discrepancies (e.g., PRD mismatches).
  - Designed as a deep, functional module: `(oaisState, intentState) => diffAlerts`.
- **Data Access Layer:** The backend will serialize the reconciled data into a structured `state.json` file that the HTML-based Master Planner frontend can ingest as its immutable data source.

## Testing Decisions

- Good tests will focus on testing the external behavior of modules. For example, testing the parser by providing a raw delimited string and asserting against the expected JSON output, ignoring how the string is tokenized internally.
- **Modules to be Tested:**
  - **Data Parsing & ETL Module:** We will use fixture files of raw MECH FTP text and mocked SUBEVAL CSV lines to ensure parsing and data type casting are robust against malformed, missing, or irregularly delimited fields.
  - **Reconciliation Engine:** We will provide mocked "Legal Status" objects and mocked "Intent" objects to ensure that diffing logic correctly outputs "Sync Required" alerts when PRDs or specific fields drift.
- **Prior Art:** As this is a greenfield implementation phase, we will establish the initial unit testing patterns (likely using a standard runner like Jest or Vitest, given the JS/TS context of the frontend).

## Out of Scope

- The M365 SharePoint / Power Automate integration components (this PRD focuses on the core logic and local execution of the pseudo-backend).
- Automated writing back into the Mainframe CLI (The Interpolator is a future phase).
- Board Eligibility Guardrail logic (Phase 2), beyond providing the foundational parsed data layer.

## Further Notes
- The Master Planner is designed as a Zero-Install Vanilla JS application initially, so the output of this backend must be easily consumable (JSON via file load or simple HTTP server).