## What to build
Implement the "One-Click Reconciliation" UI. Clicking "Acknowledge" on a conflict triggers the Quick-Note pop-up and updates the local Master Planner state.

## Acceptance criteria
- [ ] A conflict presented in the UI has an "Acknowledge" or "Update" button.
- [ ] Clicking the button opens a Quick-Note modal to capture the `PRD Change Note` justification.
- [ ] Saving the note updates the Master Database Intent (and the Historical PRD Log) and clears the alert.

## Blocked by
- issues/03-integrate-html-app.md
