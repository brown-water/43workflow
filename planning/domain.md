# domain.md

This document serves as the authoritative, comprehensive domain guide for the **43workflow** project. It details the operational realities, terminologies, selection board constraints, and distinct user workflows of Navy Placement Officers and Detailers.

---

## 1. Core Mission & Strategic Conflict

The primary purpose of the **43workflow** toolsuite is to manage the operational friction between the **Intent of Record** and the **System of Record**:

*   **Master Planner (Intent of Record):** An interactive, visual planning dashboard (Zero-Install Vanilla HTML/JS) where Navy personnel managers sketch out future slates, draft assignments, and manage long-lead training pathways.
*   **OAIS (System of Record):** The rigid, official mainframe terminal where official, legally binding orders are written and released. It possesses no "draft" or "intent" states, only active, finalized personnel statuses.
*   **The Reconciliation "Diff Engine":** Automatically highlights "Gotcha Moments"—divergences where the mutable intent of the detailers/placement officers drifts from the frozen mainframe facts in OAIS.

---

## 2. Distinct Personnel Workflows

### A. Detailer Workflow (Person-Based)
The Detailer is the advocate for the **Officer's Career**, ensuring personnel are selected, trained, slated, and transitioned correctly.

1.  **Junior Officer (JO) Slating:** Managing cyclical rotations for junior officers. Differentiates draft slated intentions from active, officially released OAIS assignments.
2.  **Training Pipelines (I-Stops):** Complex, multi-stop training tracks (especially critical for prospective COs and XOs) that span 7 to 9 months before arrival. The system calculates an `Order_Trigger_Date` (~8 months prior to the report date) to auto-populate a "Needs Orders Drafted" queue.
3.  **BNRs, NOMs, and Pivots:** Handling high-volume, off-cycle disruptions. Tracks `Nomination_Status` for high-visibility assignments (e.g., CNO Speech Writer) and enables a `Manual_Override_Flag` when officers are reassigned to special qualifications (e.g., TOPGUN).

### B. Placement Officer Workflow (Billet-Based)
The Placement Officer is the advocate for the **Command's Readiness**, ensuring Navy units are correctly manned with the right quality and quantity of personnel to deploy.

1.  **Billet Posting (BSC Maintenance):** The mechanical process of marking a Billet Sequence Code (BSC) as open and available in OAIS (typically triggered at Incumbent PRD - 12 months, or after a command audit).
2.  **Strategic Manning Health:** Weighted prioritization of command manning based on:
    *   **Objective Manning:** Manning percentages at critical operational milestones (P+0, P+3, P+6, P+9 months).
    *   **Tactical Manning:** Ensuring necessary numbers of key experts (SFTI, Test Pilots, FRS Instructors) and qualifications (e.g., Air Safety Officer - 2D1 AQD).
    *   **Workup Alignment:** Directing personnel arrivals to align with a command's "Workup Window" prior to deployment.
3.  **Waterfall Projection Engine:** A Gantt-style timeline visualization anchored in the **OAIS PRD**. Highlights shortfalls (when Intent PRD is shorter than the legal tour length) or extensions (rendered in warning colors when the Intent PRD exceeds the legal baseline).

---

## 3. Selection Boards & Governance

All assignments are governed by **MILPERSMAN 1301 series** instructions and annual selection boards:
*   **ADHSB:** Aviation Department Head Selection Board.
*   **AMCSB:** Aviation Major Command Selection Board.
*   **Convening Orders:** Mandated selection guidelines that define strict Year Groups, Time-in-Grade, and AQD criteria.
*   **The Guardrail System:** Bypasses manual spreadsheet cross-referencing by automatically flagging candidates meeting 90% of objective convening order rules, freeing human coordinators to focus on subjective career exceptions.

---

## 4. Operational Glossary

| Term | Operational Reality |
| :--- | :--- |
| **BSC (Billet Sequence Code)** | A unique code identifying a specific workspace or billet in a command structure. |
| **PRD (Projected Rotation Date)** | The target calendar date an officer is scheduled to rotate out of their current command. |
| **EDD / EDA** | Estimated Date of Departure (EDD) and Estimated Date of Arrival (EDA). Mismatch flags operational gaps. |
| **Swivel-Chairing** | The tedious manual task of copy-pasting data between the Master Planner and the mainframe CLI. |
| **Gotcha Moments** | Discrepancies between slate records and official mainframe states that cause administrative delays. |
| **Relative Value (RV)** | Mapped performance ranking metric showing if an officer rated above/below their rater's historical average. |

---

## 5. User Persona: Day-in-the-Life & Friction Logs

### The Daily Routine:
1.  **Swivel-Chair Entry:** Logging email requests (squadron re-plans, school delays) manually from Outlook into Excel trackers.
2.  **Delimited ETL Ingestion:** Generating mainframe text reports, exporting, and converting manually using multiple applications just to inspect data updates.
3.  **Orders Copy-Paste:** Re-typing 4 to 5 fields per training stop per officer into the mainframe CLI terminal.

### Immediate Focus Areas for Ingestion Tools:
*   **CLI Bridge:** Safe scripting or browser automation options to minimize duplicate typing.
*   **ETL Streamliner:** Bypassing Excel save routines by parsing raw mainframe exports in the browser directly.
*   **Outlook-to-Tracker Connector:** Eliminating manually keyed task pipelines using integrated M365 routines.
