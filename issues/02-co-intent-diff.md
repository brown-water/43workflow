## What to build
Extend the Diff Engine to parse a returned `Squadron_Export.json` (CO Intent) and flag conflicts against the current Master Planner Intent (e.g., CO requests a 5-month extension).

## Acceptance criteria
- [ ] The Diff Engine can ingest a standard `Squadron_Export.json` format.
- [ ] It compares the CO's requested changes (e.g., extensions) against the Master Database Intent.
- [ ] Conflicts are flagged and returned as a specific type of alert.

## Blocked by
- issues/01-core-diff-engine.md
