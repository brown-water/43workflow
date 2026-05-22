# The Placement Officer Blueprint: High-Fidelity Workflow Map

This document serves as the "Master Map" for the 43workflow project, detailing the target architecture and the strategic "Bridge" projects designed to eliminate systemic friction points. It establishes the Master Planner as the definitive Intent of Record, synchronized with OAIS (the System of Record).

## 1. The Target Architecture: The Modular Master Planner

To ensure maintainability and scalability, the system is designed as a **Module-Based Architecture** anchored in a central **Master Database**:

*   **Master Database (The Core):** A structured data layer that merges OAIS reports with manual "Intent" and persistent notes. It is the single source of truth for all personnel and billet data.
*   **Officer View Module:** Focuses on the "Person." Provides a comprehensive record of an officer's career, communications, and historical assessments.
*   **Command View Module:** Focuses on the "Activity." Aggregates data from the Master Database to show unit-level health, metrics, and CO-specific notes. Includes the **Waterfall View**.
*   **Board Shadow Module:** Focuses on "Eligibility." A high-stakes workspace for verifying board criteria and assigned **Record Grades** (A/B/C) with on-demand historical context.
*   **Slating Module:** Focuses on "Placement." A robust engine for various slating cycles (FRS, DH, CO). Uses configurable rulesets and saves slates as **Slate History** (.json) for audit and revision.

## 2. Strategic "Bridge" Projects (Execution Order)

### Phase 1: The Zero-Install Read Bridge
*   **Goal:** Eliminate the "5-Step ETL Drill" and establish the Pseudo-Backend.
*   **Mechanism:** Leverage **Power Query Ingestion** inside Excel to parse raw MECH FTP downloads from a local Watch Folder.
*   **Outcome:** The Master Planner becomes automatically "OAIS-Aware" with a single daily manual file drop, navigating around strict Naval IT Security Moats.

### Phase 1.1: The Performance Continuity Bridge (FITREP Integration)
*   **Goal:** Incorporate qualitative performance data into the Master Planner without manual entry.
*   **Mechanism:** Ingest a second flat file (e.g., `SUBEVAL_DDMMYY.csv`) containing longitudinal performance data. This file reconciles against the Master Database via the Officer's SSN/DoD ID.
*   **Key Data Points & Derived Metrics:**
    *   **Reporting Senior (RS) Identifier:** Name and UIC of the rater.
    *   **RSCA (Reporting Senior Cumulative Average):** The baseline for the rater's grading history at the time of the report.
    *   **ITA (Individual Trait Average):** The officer's specific grade for that period.
    *   **Relative Value (RV):** A calculated field (`ITA - RSCA`) used to determine if the officer was "Above or Below the Nut."
    *   **Report Duration:** Calculated as `TO - FROM` in months. This is a critical tie-breaker for slating (e.g., a 12-month #1 EP beats a 6-month #1 EP).
    *   **Promotion Recommendation:** (EP/MP/P/PR/SP) to track career trajectory.
    *   **Summary Group Data (All Tiers):**
        *   **IND_[TIER]:** Boolean indicator showing which recommendation the officer received (e.g., `IND_MP`).
        *   **SUM_[TIER]:** Total count of officers in that summary group for that tier (e.g., `SUM_EP`, `SUM_MP`).
        *   **NUMRATED / Summary Group Size:** Total number of officers in the competitive group (e.g., 1-of-1 vs. 1-of-20).
*   **Manual Qualitative Overlay:**
    *   **The "Hard Breakout" Field:** A manual entry field on the Officer's FITREP history card to record the exact ranking (e.g., "#1 of 5 EP" or "#1 of 12 MP"). This captures the specific rank found in narrative comments that automation cannot parse.
*   **Outcome:** Enables the **Board Shadow Module** to automatically flag "Breakout" reports and identify potential "Record Gaps" or continuity issues, while providing the **Slating Module** with duration-based tie-breaking for competitive shore tours.

### Phase 2: The "Expert-in-the-Loop" Guardrail
*   **Goal:** Mitigate the "High-Stakes" risk of manual Board Recorder Shadow checks.
*   **Mechanism:** Build a **Flagging System** that cross-references the new Pseudo-Backend against Board Convening Orders (Screen Groups, AQDs, Time-in-Grade).
*   **Outcome:** The system handles 90% of objective eligibility checks automatically. The remaining 10% of cases with subjective career history nuances are flagged for the Placement Officer's "Expert Review."
*   **Dependency:** Requires loading the specific Convening Order PDFs for all three boards into the `context/` folder.

### Phase 3: Outlook-to-Tracker Bridge
*   **Goal:** Capture high-volume, unstructured requests (CEO pivots) directly into the workflow.
*   **Mechanism:** (Pending further research) Potential M365 Power Automate flows or Outlook Quick Steps to clip emails into the Master Planner's task list.

## 3. Post-MVP / Future Growth

### The OAIS Text Interpolator
*   **Goal:** Reduce the manual "Swivel-Chairing" required to write 5-6 pages of orders in the Mainframe CLI.
*   **Mechanism:** An Excel-based tool within the Master Planner that combines officer data with Standardized Text templates (to be migrated from OneNote).
*   **Outcome:** Generates "ready-to-paste" text blocks, providing a "One-Click Copy" experience while avoiding the fragility of automating Mainframe Macros (Web/RD).
