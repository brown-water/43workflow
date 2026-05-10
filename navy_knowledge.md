# Navy Knowledge: 43workflow Reference

This document serves as the authoritative context for the **43workflow** project, providing a unified reference for terminology, data architecture, and operational logic.

---

## 1. Project Mission & Core Concepts

### Master Planner vs. OAIS
The project addresses the friction between the **Intent of Record** and the **System of Record**.
*   **Master Planner (Intent of Record):** A high-fidelity, "cinematic" HTML-based application (Zero-Install Vanilla JS/React) where the user manages future slates, pivots, and complex training tracks.
*   **OAIS (System of Record):** The legally binding Mainframe CLI where final orders are executed. It is rigid and does not capture "intent" or "draft" states.
*   **The "Diff Engine" Logic:** The Master Planner compares mutable Intent against the rigid Legal Status in OAIS, surfacing **"Sync Required"** alerts when discrepancies exist.

---

## 2. Domain Glossary

| Term | Definition |
| :--- | :--- |
| **Island Ecosystem** | The collection of isolated data tools (OAIS, Master Planner, Outlook, Squadron Tracker) requiring manual synchronization. |
| **Swivel-Chairing** | The manual process of copy-pasting data between systems (e.g., from Master Planner to OAIS). |
| **The 5-Step ETL Drill** | The current manual process to update the tracker: CLI Run -> Download -> Excel Import -> CSV Save -> Final Import. |
| **OAIS-Aware** | A state where the Master Planner automatically identifies discrepancies with the Mainframe status. |
| **Pseudo-Backend** | A queryable data layer built from merged flat files (TXT/CSV) using Power Query to reconcile OAIS and Intent data. |
| **Expert-in-the-Loop** | A design pattern where automation handles objective data (e.g., eligibility) while the human expert validates subjective career nuances. |
| **MIAP / MECH FTP** | The secure gateway and FTP server where reports are staged for download via CAC authentication. |

---

## 3. Data Architecture & Ingestion

### The Pipeline (The Read Bridge)
The Master Planner consumes data through a **Zero-Install Read Bridge**:
1.  **Manual Drop:** Raw `%-delimited` reports (e.g., `SUPPLY_sYNTH.txt`) are downloaded from MECH FTP to a local **Watch Folder**.
2.  **Excel Power Query:** Automatically cleans, transforms, and merges these files into structured tables.
3.  **Consumption:** The processed CSV/JSON is ingested by the Master Planner app.

### Key Data Fields (`headers.csv`)
*   **`ICOMM.SCRN.RSLT` (CSR Codes):** Command Screen Results, critical for board eligibility.
*   **`IULT.AUIC` / `IULT.EDA`:** Ultimate duty station and estimated date of arrival.
*   **`IPRD`:** Projected Rotation Date (the primary driver of the slate cycle).
*   **`BAQD` / `IAQD`:** Additional Qualification Designators (15+ slots for officer quals).
*   **`BSUBSPEC` / `ISUBSPEC`:** Subspecialty codes.

---

## 4. Workflow Modules

### A. Detailer Workflow (Person-Based)
*   **JO Slate:** Managing Junior Officer rotations.
*   **I-Stops (Training Pipelines):** Complex, multi-stop tracks (especially for COs) taking 7-9 months.
*   **BNRs, NOMs, & Pivots:** Handling high-volume, unstructured requests (e.g., CNO Speech Writer packages) that disrupt the normal slate.
*   **Order Trigger Date:** Calculated ~8 months prior to reporting to flag the "Needs Orders Drafted" queue.

### B. Placement Workflow (Billet-Based)
*   **Pop-up Vacancies:** Tracking unfilled seats independently of assigned officers.
*   **Billet Priority:** Strategic weighting of commands based on fill dates and deployment timelines.

---

## 5. Governance & Regulatory Framework

The project is governed by **MILPERSMAN 1301 series** instructions and annual selection boards.

### Key Instructions (`context/` PDFs)
*   **1301-100:** General officer assignment policies.
*   **1301-102 to 112:** Specific detailing instructions, administrative changes (CH-75), and board procedures.

### Selection Boards
The Master Planner provides an **"Expert-in-the-Loop" Guardrail** to replace manual "Board Shadow" checks.
*   **ADHSB:** Aviation Department Head Selection Board (FY26).
*   **AMCSB:** Aviation Major Command Selection Board (FY27).
*   **Convening Orders:** Define the specific criteria (Year Groups, AQDs, Time-in-Grade) used for the **Flagging System**.

---

## 6. Project Roadmap (Strategic Bridges)

1.  **Phase 1: Read Bridge:** Establishing the Pseudo-Backend to eliminate the "5-Step ETL Drill."
2.  **Phase 2: Board Guardrail:** Automating objective eligibility checks against board rules.
3.  **Phase 3: Text Interpolator:** Generating "ready-to-paste" text blocks for OAIS order writing.
4.  **Phase 4: Outlook Bridge:** Clipping email requests directly into the workflow.
