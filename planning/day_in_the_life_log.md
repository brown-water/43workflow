# Day in the Life: Placement Officer Workflow Log

## The Routine
| Phase | Activities | Tools Involved | Friction Level |
| :--- | :--- | :--- | :--- |
| **Kick-off** | Opening 3x Excel, Mainframe CLI (Browser), SharePoint, Outlook (8-10 emails). | Excel, CLI, Edge, Outlook | High (Context Switching) |
| **Tasking** | Manually logging email requests (RD changes, squadron plans, school changes) into Excel Task Tracker. | Outlook, Excel (VBA) | Medium (Manual Entry) |
| **ETL/Reporting** | Run report in CLI -> Separate login to download -> Import to Excel -> Save as CSV -> Final Import. | CLI, Browser, Excel | High (Step-intensive) |
| **Order Writing** | "Data Bridge": Copy-pasting names to CLI, re-typing 4-5 fields per school per officer. | Master Planner (Excel), CLI | Critical (Error-prone) |

## Current Pain Points
1.  **Human "Swivel-Chair" Integration:** Acting as the manual data bridge between the Master Planner and the Mainframe CLI.
2.  **Fragmented ETL:** A 5-step process just to get data into a usable CSV format for Manning reports.
3.  **Task Loss Prevention:** Relying on a manual Excel/VBA tracker because M365 tools have proven unreliable for high-volume task management.

## Potential "43workflow" Projects
1.  **Project: CLI Bridge:** Investigating if the CLI browser tool can be interfaced with (e.g., via a browser extension or automation script) to pull/push data directly from the Master Planner.
2.  **Project: ETL Streamliner:** Simplifying the CLI-to-CSV pipeline. Can we bypass the Excel "Save As" step or automate the download/convert process?
3.  **Project: Outlook-to-Task-Tracker:** Creating a more robust way to "clip" email data into the Task Tracker without manual re-typing.
