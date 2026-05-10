# 43workflow

This workspace is dedicated to identifying and developing projects that streamline day-job workflows for Navy Placement Officers and Detailers.

## Mission
To systematically examine current professional processes, identify friction points, and engineer solutions that optimize productivity and cognitive ease.

## Current State & Architecture
The Master Planner is a local, **Zero-Install** "cinematic" HTML-based application. It serves as the **Intent of Record**, running entirely within the browser via the `file://` protocol to accommodate strict IT managed-device environments (Nautilus). 

The system functions as a **Diff Engine**, comparing the user's mutable "Intent" against the rigid "Legal Status" provided by OAIS and external CO requests.

### Delivered Components
1. **Reconciliation Engine (MVP):** A self-contained `index.html` file that embeds all core logic to bypass CORS restrictions. It features:
   - **OAIS Sync:** Compares mainframe extracts against local Intent to flag "Gotcha Moments" (e.g., PRD mismatches).
   - **CO Intent Ingestion:** Parses Squadron Exports to identify conflicts between Commanding Officer requests and current detailing plans.
   - **Interactive Resolution:** Provides a UI for acknowledging conflicts and capturing justification notes.
2. **Master Database Schema:** A robust JSON data model (documented in `src/schema.js`) that captures the full Detailer and Placement Officer workflows, including historical PRD logs and FITREP continuity.
3. **Data Ingestion Workflow:** A documented M365 Power Automate and Power Query process (`HOWTO_DataIngestion.md`) to bridge the gap between secure mainframe extracts and the Master Planner.

## Repository Status
- **Source of Truth:** Domain knowledge, PRDs, and "Tracer Bullet" issues are tracked in the root and `issues/` directory.
- **Ready for Test:** Synthetic data files (`test_master_intent.json`, `test_oais_extract.json`, `test_co_export.json`) are available to verify engine functionality.
- **Security:** A `.gitignore` is in place to prevent the accidental commit of any actual PII/CUI data (SSNs, names, personnel records).

## Getting Started
To run the Reconciliation Engine on any machine, simply double-click the `index.html` file and load the corresponding JSON data files.
