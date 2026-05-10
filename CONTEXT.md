# Placement Officer Domain Context

## Core Terms

| Term | Definition |
| :--- | :--- |
| **OAIS** | The legally binding **System of Record** (Mainframe CLI). The final execution tool for orders. |
| **Master Planner** | The user's primary **Intent of Record** and workflow manager. A "cinematic" HTML-based application that serves as the central hub for decision-making. |
| **Island Ecosystem** | The collection of isolated data tools (OAIS, Master Planner, Outlook, Squadron Tracker) that require manual "swivel-chair" data entry to stay synchronized. |
| **Swivel-Chairing** | The manual process of copy-pasting or re-typing data from one system (e.g., Master Planner) to another (e.g., OAIS). |
| **The 5-Step ETL Drill** | The manual process of extracting data from the CLI to update the Squadron Tracker (CLI Run -> Download -> Excel Import -> CSV Save -> Final Import). |
| **Gotcha Moment** | A discrepancy error where OAIS does not match the Master Planner's intent. |
| **OAIS-Aware** | A state where the Master Planner automatically identifies discrepancies between its intent and the legal status in OAIS, surfacing "Sync Required" alerts. |
| **Watch Folder** | A designated local or network directory where automated exports are deposited for the Master Planner to ingest. |
| **MIAP** | The Multi-Host Internet Access Portal. The secure gateway requiring CAC authentication for all systems. |
| **MECH FTP** | The specific FTP server (Mainframe Exchange) where report files are staged for download. |
| **M365 Bridge** | Using the Microsoft 365 suite (Power Automate, SharePoint) to automate data flow in highly restricted IT environments. |
| **Security Moat** | The multi-layered authentication (CAC, MIAP, Secure Browser) that prevents external tools from accessing internal data. |
| **Power Query Ingestion** | Using Excel's built-in "Get Data" feature to automatically clean and transform the `?` delimited files from a local folder. |
| **Mainframe Macro** | VBA or Javascript-based automation scripts that run within the Reflection Desktop or Web CLI to automate report generation. |
| **Pseudo-Backend** | A structured, queryable data layer built from merged flat files (TXT/CSV). It reconciles OAIS data against Master Planner intent, prioritizing the Planner for reporting while flagging sync needs. |
| **SUBEVAL** | The primary data source for the **Performance Continuity Bridge**. Typically exported as `SUBEVAL_DDMMYY.csv`, it contains longitudinal FITREP data (ITA, RSCA, Summary Groups) used to calculate Relative Value and track breakout performance. |
| **The Interpolator** | A tool (Excel-based) that combines raw data with standardized text templates to create ready-to-paste text blocks for OAIS. |
| **SharePoint Destination** | The intended final state where the Pseudo-Backend is converted into a SharePoint List for office-wide collaboration. |
| **Board Shadow** | The manual, high-stakes verification process (4-5 checks) performed before a board to ensure eligibility. |
| **Board Eligibility Guardrail** | A tool to automatically cross-reference the Pseudo-Backend against binary (black/white) board eligibility criteria. |
| **Record Grade** | A qualitative assessment (A, B, or C) of an officer's record strength. Previously manual; now **Assisted** by the Performance Continuity Bridge which surfaces longitudinal ITA vs. RSCA data and promotion trajectories. |
| **ITA (Individual Trait Average)** | The average of an officer's marks across all graded traits (Professional Expertise, Leadership, etc.) for a single FITREP period. |
| **RSCA (Reporting Senior Cumulative Average)** | The historical average of all marks given by a specific Reporting Senior for a specific rank. Comparing ITA to RSCA determines the Relative Value of a report. |
| **Relative Value (RV)** | The numerical difference between an officer's Individual Trait Average (ITA) and the Reporting Senior's Cumulative Average (RSCA). A primary metric for identifying "breakout" performance. |
| **Hard Breakout** | A manually entered qualitative ranking (e.g., "#1 of 5 EP"). While automated data provides the number of EPs (`SUM_EP`), the "Hard Breakout" captures the specific ordinal rank found in narrative comments. |
| **Report Duration** | The length of a performance period in months (`TO - FROM`). Used as a high-fidelity tie-breaker in competitive slating (JO Slate). |
| **IND_EP** | Individual EP indicator. A boolean flag in the FITREP data showing if the officer received an Early Promote recommendation. |
| **SUM_EP** | Summary Group EP count. The total number of officers in a specific competitive group who received an EP. |
| **Board History Log** | A persistent, officer-anchored note structure that tracks assessments, grades, and outcomes. Access is restricted to "On-Demand" to prevent poisoning current board assessments with historical bias. |
| **Ineligibility Trigger** | A historical event (e.g., DPM letter, declining selection) tracked in the Board History Log that has permanent or multi-year legal impacts on future board eligibility. |
| **Sanitized Workspace** | A UI state for board shadowing that defaults to showing only current, objective data to ensure an unbiased assessment, with historical snapshots available via deliberate expansion. |
| **Flagging System** | A logic layer that identifies clear-cut eligibility mismatches, record anomalies, or historical Ineligibility Triggers. |
| **Expert-in-the-Loop** | A design pattern where automation handles binary eligibility while the human expert (the Placement Officer) assigns Record Grades and writes board-specific notes. |
| **Billet-Based Placement** | The management of command requirements (rank, designator, billets) in coordination with Commanding Officers. |
| **Person-Based Detailing** | The management of individual officer careers, qualifications, and preferences to match them with open billets. |
| **Strategic Weighting** | The logic for auto-prioritizing squadrons for FRS graduates, primarily driven by Manning Health, projected gaps, and Deployment Windows. |
| **Manning Health** | A quantitative metric representing the raw number of officers assigned vs. **BA (Billets Authorized)**, projected across P+0 to P+9 windows. |
| **BA (Billets Authorized)** | The official number of officer positions allowed for a specific command; the denominator for Manning Health. |
| **Record Strength** | A qualitative assessment of a command based on individual officer qualifications (e.g., **WTI - Weapons and Tactics Instructor**, TPS) and history at Valued Commands. |
| **ACTC Level 5** | The highest tier of Aircrew Training Continuum qualifications, which vary by community (e.g., WTI, Seahawk Weapons Instructor) and are tracked at the individual record level. |
| **Tactical Pivot** | A manual override flag that allows the Placement Officer to prioritize a command for a fill regardless of its calculated health metrics (e.g., due to a CEO request). |
| **Deployment Window** | A manually defined start and end date for a command's deployment cycle, used to weight the urgency of filling gaps. |
| **OAIS PRD** | The official, legally binding Projected Rotation Date as reported by OAIS. |
| **Intent PRD** | A manually edited Projected Rotation Date within the Master Planner used for "What-If" scenarios and command coordination. |
| **PRD Sync Alert** | A visual indicator (e.g., yellow highlights in the Waterfall) used when the Intent PRD differs from the OAIS PRD, signaling a required administrative action. |
| **Waterfall View** | A Gantt-style manning timeline where the primary bar color represents the **OAIS PRD** (Legal Ground Truth). Deviations (extensions/shortenings) are highlighted in secondary colors. |
| **Nominal Tour Length** | The community-specific expected duration of a tour ( e.g., 33 months for VFA JO, 30 months for VFA DH), which often differs from the initial 36-month OAIS PRD. |
| **Historical PRD Log** | A persistent record within an officer's tour data that tracks all official changes to their PRD, linked to the Historical EDD (Estimated Date of Departure) column. |
| **PRD Change Note** | A manual, open-text metadata field (no presets) that captures the expert-in-the-loop justification for a PRD shift. |
| **CO Intent** | Edits made by a CO in the Command Viewer. Importing these highlights conflicts against the **Intent PRD**, allowing for a one-click "Acknowledge/Update" to align the Master Planner. |
| **Squadron Export** | A scoped .json file containing the billets and officer records for a single UIC, used to populate the Command Viewer. |
| **Manual Audit Trail** | The combined record of automated event tagging (Source, User, Date) and manual PRD Change Notes within the Historical PRD Log. |
| **Slating Workspace** | A "What-If" environment where the Placement Officer can batch-assign FRS graduates to squadrons to visualize community-wide impact. |
| **Student Preference** | A data field for FRS graduates tracking their desired coast (East/West) to assist in "Best Fit" slating. |
| **Reset Slate** | A function that clears all temporary assignments in the Slating Workspace, returning the system to its persistent state. |
| **Master Database** | The central "Single Source of Truth" containing all officer records, billet data, communication logs, and persistent notes that feed into all modules. |
| **Officer View Module** | A modernized, person-centric interface focusing on an individual officer's career history, qualifications, and record assessments. |
| **Command View Module** | A unit-centric interface that aggregates officers by AUIC/UIC to track Manning Health, Record Strength, and Billet Maintenance. |
| **Board Shadow Module** | A specialized workspace for high-stakes eligibility verification and record grading, linked to the Master Database for eligible candidates. |
| **Slating Module** | A complex decision-support engine for batch-assigning officers to billets (e.g., FRS grads, DH Slate), requiring ruleset configuration and .json retention. |
| **Slate History** | Persistent .json records of finalized or in-progress slates, allowing for historical audit and emergency re-slating (e.g., injury/attrition). |
| **Detailer Workflow** | Detailed in [DETAILER_WORKFLOW.md](./DETAILER_WORKFLOW.md). |
