## What to build
Create the definitive TypeScript/JSDoc interfaces mapping the Master Database, including `OfficerRecord`, `BilletRecord`, `Target_Ultimate_UIC`, `Target_PRD`, and `I_Stops`. This provides the concrete target for the Diff Engine and defines the "Intent" schema.

## Acceptance criteria
- [ ] A file `schema.ts` (or `schema.js` with JSDoc) is created defining the Master Database structure.
- [ ] Schema includes all fields required by the Detailer Workflow (`Target_Ultimate_UIC`, `Target_PRD`, `Slate_Cycle`, `FITREP_Expectation`, `Billets_Priority`, `I_Stops`, `Order_Trigger_Date`, `Nomination_Status`, `Manual_Override_Flag`).
- [ ] Schema includes all fields required by the Placement Officer Workflow (Historical PRD Log, PRD Change Note, etc.).

## Blocked by
None - can start immediately
