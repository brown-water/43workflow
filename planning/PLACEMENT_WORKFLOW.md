# Master Planner Architecture: Placement Officer Workflow

## The "Demand Signal" Pillar (Billet Maintenance)
The Placement Officer manages the **Requirement** (the Billet), ensuring that commands have the right quantity and quality of officers to execute their mission.

1.  **Billet Posting:** The mechanical process of marking a Billet Sequence Code (BSC) as available in OAIS.
    *   **Trigger:** Automated at Incumbent PRD - 12 months, or manually after a "Billet Scrub" with the Command.
    *   **Planner Logic:** The Master Planner tracks "POSTed" status to cue the Detailer that the "store is open."
2.  **Strategic Weighting (Command Health):** Determining fill priority based on objective and tactical metrics.
    *   **Objective:** Manning percentages at P+0, P+3, P+6, and P+9.
    *   **Tactical:** Maintaining a balance of qualified experts (SFTI, Test Pilots, FRS Instructors) and critical qualifications (ASO - 2D1 AQD).
    *   **Deployment Alignment:** Prioritizing fills for squadrons entering their "Workup Window" to ensure they are "Whole" before hitting the boat.

## The "Production" Pillar (The FRS Conveyor Belt)
Tracking the "Blank Slate" JOs from the Flight Replacement Squadron (FRS) to the Fleet.

### The Slating Workspace (Batch Placement)
*   **Squadron-Level Focus:** Assignments focus on the overall health and projected gaps of the squadron rather than specific BSCs.
*   **Temporary Tactical View:** Dragging a pilot from a production class into a squadron provides a temporary projection of their manning health throughout their deployment cycle.
*   **Reset Logic:** The Slating Workspace allows for complete resets at any time, protecting the persistent data until the slate is finalized.

### Optimization Logic (The "Best Fit")
*   **Student Preference Alignment:** The system tracks individual student preferences (East vs. West Coast) and flags misalignments during the drag-and-drop process.
*   **Global Health Balancing:** The primary goal is to optimize "Best Overall" health for both coasts, ensuring that no single squadron enters "Tactical Bankruptcy" while others are over-manned.

## The "Sync" Pillar (OAIS-Aware Orders)
Tracking the legal transformation of "Intent" into "Released Orders."

1.  **The Gaining Queue:** Filtering by `ACT.DESK` (e.g., 433A) to see all "Proposed" (Prop'd) officers requiring placement review.
2.  **The "Gaining Placement" Gate:** The official "Assent" where the Placement Officer validates the officer's fit and writes the orders.
3.  **Status Milestones:**
    *   **WRKG:** Orders are in the processing queue.
    *   **P46C:** Orders are in the payment/funding queue.
    *   **RLSD:** Orders are legally binding and released.
4.  **EDA/EDD Drift:** Automatically flagging shifts in arrival dates that create or extend a manning gap at the command.

## The "Waterfall" Pillar (The Projection Engine)
The **Waterfall View** is the visual "Intent of Record" used for Command coordination. It translates data into a Gantt-style manning timeline anchored in the **OAIS PRD**.

1.  **Legal Baseline:** The primary bar color is ALWAYS the OAIS PRD (typically 36 months).
2.  **Visual Delta Logic:** 
    *   **Shortenings:** If the **Intent PRD** or **Nominal Tour Length** is earlier than the OAIS PRD, the bar is truncated or colored to show the gap.
    *   **Extensions:** If the Intent PRD is later than the OAIS PRD, a secondary color (e.g., Yellow) highlights the delta months.
3.  **Historical PRD Tracking:** Every tour maintains a **Historical PRD Log**. Official changes in the PRD are captured and linked to the **Historical EDD** column, ensuring the evolution of an officer's timeline is preserved.

### Billet Maintenance & Suppression
*   **Billet-Level Notes:** Anchored to the BSC, these notes track command-specific requirements (e.g., "Requires 2D1 AQD") that persist through personnel turnovers.
*   **Suppression Toggle:** Allows the Placement Officer to manually "hide" a billet from the demand signal. Suppressed billets do not count against the "Tactical Bankruptcy" threshold or Manning Health percentages.

### Command Viewer Integration
*   **The Feedback Loop:** COs receive a **Squadron Export** (.json). They can input "CO Intent" (e.g., 5-month extension).
*   **One-Click Reconciliation:** Upon import, conflicts are highlighted. The Placement Officer can click "OK/Acknowledge," which triggers a **Quick-Note Pop-up** with an open text box.
*   **Manual Audit Trail:** The system captures the change source and date automatically, but requires the Placement Officer to enter a brief manual justification (e.g., "CO requested for Fall deployment") to finalize the update to the **Historical PRD Log**.
