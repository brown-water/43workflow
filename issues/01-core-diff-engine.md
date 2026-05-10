## What to build
A pure functional module that takes parsed OAIS data (Legal Status) and Master Planner Intent data, matches records by SSN, and outputs "Sync Required" alerts for PRD mismatches.

## Acceptance criteria
- [ ] The Diff Engine accepts two structured JSON inputs: OAIS State and Intent State.
- [ ] The engine matches records using SSN or DoD ID.
- [ ] If `Intent_PRD` is different from `OAIS_PRD`, an alert object is generated.
- [ ] The output is a structured list/array of discrepancies.

## Blocked by
- issues/00-define-schema.md
