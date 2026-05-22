# architecture.md

This document serves as the high-fidelity architecture map and technical blueprint for the **43workflow** project, detailing the target modular architecture and the strategic pipeline integrations.

---

## 1. The Target Architecture: The Modular Master Planner

To ensure maintainability, security, and scalability in strict Navy IT environments, the system is designed as a **Module-Based Client-Side Architecture** anchored in a central **Master Database** (represented as structured, local JSON state):

```mermaid
graph TD
    subgraph Local Environment (Zero-Install)
        UI[Master Planner HTML App]
        DB[Master Database - state.json]
        
        UI -->|Reads State| DB
        UI -->|Saves Intent/Updates| DB
    end
    
    subgraph Data Sources
        OAIS[OAIS Delimited Personnel Data]
        SUBEVAL[BOL/NSIPS FITREP CSVs]
        COEX[Squadron CO Intent JSON]
    end
    
    subgraph ETL Watch Folder (OneDrive/SharePoint)
        PQ[Excel Power Query / Power Automate]
        PQ -->|Automated Merge & Clean| DB
    end
    
    OAIS -->|Manual Download| PQ
    SUBEVAL -->|Manual Download| PQ
    COEX -->|Import via UI| UI
```

### Core Architecture Modules

*   **Master Database (The Core):** A structured, queryable data layer that merges external OAIS personnel status with local "Intent" slate data and persistent billet notes. It acts as the single, in-memory source of truth for all application views.
*   **Officer View Module (Person-Based):**
    *   Focuses on individual records, training history, and continuous FITREP performance.
    *   Maintains the **Historical PRD/EDD Log** on the officer's card.
*   **Command View Module (Activity-Based):**
    *   Aggregates personnel metrics to show unit-level health, manning percentages (P+0, P+3, P+6, P+9), and critical qualification gaps.
    *   Hosts the **Waterfall View** (a Gantt-style timeline demonstrating legal vs. intent tour-length drifts).
*   **Board Shadow Module (Eligibility-Based):**
    *   A secure verification environment where the planner cross-references officer records against seleção board convening rules (Year Groups, critical AQDs, designators).
    *   Facilitates tracking of subjective **Record Grades** (A/B/C) with full historical detail.
*   **Slating Module (Placement-Based):**
    *   The primary workspace for executing slates (FRS, DH, CO) using drag-and-drop allocations.
    *   Enables dry-run planning with safe, transactional state resets, saving final selections as structured **Slate History** (.json) records.

---

## 2. Strategic Ingestion & Execution Roadmap

### Phase 1: The Zero-Install Read Bridge (The Pseudo-Backend)
*   **Objective:** Eliminate the manual "5-Step ETL Drill" and establish an automated local data merge.
*   **Execution:** Leverage Excel Power Query and local watch folders to clean raw, cryptic mainframe data (`SUPPLY_sYNTH.txt`) and feed structured CSVs to the application.
*   **Outcome:** Frontend becomes instantly "OAIS-Aware" with a single daily file drop, completely bypassing mainframe integration barriers.

### Phase 1.1: The Performance Continuity Bridge (FITREP Integration)
*   **Objective:** Ingest qualitative performance data without manual transcription.
*   **Execution:** Import `SUBEVAL_DDMMYY.csv` files, matching them to officer profiles via SSN or DoD ID.
*   **Metrics Derived:**
    *   **Relative Value (RV):** Individual Trait Average (ITA) vs. Reporting Senior Cumulative Average (RSCA) to identify if the officer was "Above/Below the Nut."
    *   **Report Duration:** `TO - FROM` in months, serving as a critical tie-breaker for highly competitive orders slating (e.g., distinguishing an officer with long-duration EP reports).
    *   **Summary Group Size:** Competitiveness ratio (e.g., #1 of 2 vs. #1 of 30).
*   **Manual Overlay:** A "Hard Breakout" card to record narrative annotations (e.g., "#1 of 12 MP") which standard data tables cannot parse natively.

### Phase 2: The "Expert-in-the-Loop" Guardrail
*   **Objective:** Automate selec-board recorder shadow checks to eliminate human review errors.
*   **Execution:** Cross-reference officer files against custom annual selections parameters. The system screens and approves ~90% of objective criteria, flagging only subjective anomalies for Placement Officer review.

### Phase 3: Outlook-to-Tracker Bridge
*   **Objective:** Capture loose demands and command feedback directly from communications.
*   **Execution:** Deploy lightweight M365 Power Automate alerts or Outlook Quick Steps to clip emails into the Master Planner's interactive task list.

### Phase 4 (Post-MVP): The OAIS Text Interpolator
*   **Objective:** Automate order-writing translation steps.
*   **Execution:** Combine the slating database with standardized text formats to auto-generate ready-to-paste, multi-page text blocks, eliminating manual typing into the mainframe terminal emulator.

---

## 3. Front-End Component & Compilation Architecture

To support the modular evolution of the Master Planner while adhering strictly to NMCI security requirements, the front-end layout utilizes a specialized local compilation structure:

### A. Directory Layout (Feature-First)
Development is conducted modularly within the `src/` directory. Each primary functional module (Officer, Command, Board, Slating) owns a dedicated component folder containing its HTML template, scoped CSS, and JS controller:
- `src/core/` — Common database reconciliation, diff engines, and local state management.
- `src/components/` — Shared reusable widgets (menus, modals, form inputs).
- `src/modules/` — Monolithic functional pages (e.g., `modules/officer/` for Officer View, `modules/command/` for the Waterfall/Manning View).

### B. Offline Routing (Hash-Based)
Since browser history path routing is blocked when executing files directly from local storage, the Master Planner implements a vanilla JavaScript hash router (`window.location.hash` changes):
- Format: `#module-name/parameter` (e.g., `#officer/DoDID` or `#slating/frs-2026`).
- Enables natural browser Back/Forward history navigation and direct deep-linking to specific records or workspaces without network dependencies.

### C. State Engine (Transactional Cloning)
To separate long-lead slating dry-runs from core personnel data, the slating module uses an isolated "What-If" state container:
- Upon entering the Slating Workspace, the module generates a full deep clone of the Master Database in-memory via `structuredClone()`.
- Real-time Manning Health calculations and gaps are computed against this cloned state.
- Unsaved slates can be instantly discarded (`Reset Slate`), restoring the original state, or committed (`Commit Slate`), merging the cloned changes back to the persistent store.

### D. Compilation Engine (Vanilla Node Stitcher)
A custom, zero-dependency Node.js script (`build.js`) executes locally on the developer's workstation to bundle the feature-first files into a single deployable asset:
- **Build Target:** A single, monolithic, highly optimized HTML file (`dist/index.html`).
- **Mechanism:** Automatically inlines all scoped CSS files into `<style>` headers, stitches JS classes together under a modular execution scope, and wraps HTML snippets in standard `<template>` elements.
- **Outcome:** Guarantees absolute offline compatibility and zero-install execution (double-click to launch) over the NMCI `file://` protocol.

