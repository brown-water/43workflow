## What to build
Hook the Diff Engine into the Master Planner UI. Allow the user to load the OAIS `state.csv` (or JSON) and a `CO_Export.json`, run the diff, and display the basic alerts in the UI.

## Acceptance criteria
- [ ] UI provides a mechanism (e.g., file input) to load the OAIS data and CO export files.
- [ ] The Diff Engine is executed with the loaded data.
- [ ] Resulting alerts/discrepancies are rendered in the HTML interface (e.g., a "Sync Required" dashboard).

## Blocked by
- issues/02-co-intent-diff.md
