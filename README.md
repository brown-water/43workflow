# 43workflow

This workspace is dedicated to identifying and developing projects that streamline day-job workflows for Navy Placement Officers and Detailers.

## Mission
To systematically examine current professional processes, identify friction points, and engineer solutions that optimize productivity and cognitive ease.

## Current State & Architecture
The Master Planner is evolving from a manual Excel/VBA tool into a modular, "cinematic" HTML-based application. It serves as the local **Intent of Record**, running locally (Zero-Install Vanilla JS) and diffs the user's mutable "Intent" against the rigid "Legal Status" provided by OAIS.

### Key Components Under Development
1. **The Read Bridge (Pseudo-Backend):** An ingestion and reconciliation pipeline to parse raw mainframe dumps (`SUPPLY_sYNTH.txt`) and longitudinal FITREP data (`SUBEVAL_DDMMYY.csv`), mapping them to a modern JSON schema.
2. **Reconciliation Engine (Diff Engine):** A core module within the Master Planner HTML app that compares the OAIS legal status against the Detailer's intent, surfacing "Sync Required" alerts (Gotcha Moments) and CO Intent conflicts.
3. **Data Ingestion Workflow:** A documented M365 Power Automate and Power Query process to handle the initial extraction and cleaning of legacy data across the Navy's Security Moat.

## Repository Status
- Domain knowledge, workflows, and terminology have been established (see `CONTEXT.md`, `blueprint.md`, and `HOWTO_DataIngestion.md`).
- A Product Requirements Document (PRD) for the Pseudo-Backend has been created.
- The Reconciliation Engine implementation has been broken down into vertical slice issues (located in the `issues/` directory), ready for development starting with the Master Database JSON Schema definition.
