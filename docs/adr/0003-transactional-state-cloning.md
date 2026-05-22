# 0003. Transactional State Cloning for Slating Workspace

We decided to use a transactional cloning strategy (`structuredClone`) to separate temporary "What-If" slates from the persistent Master Database.

## Context

Detailers and Placement Officers need to run experimental slating scenarios (e.g., assigning a batch of FRS graduates to open squadron billets) to see the downstream impact on community Manning Health and command requirements. Mutating the persistent Master Database directly during these experimental phases would corrupt the core record data and make reverting complex draft operations fragile and prone to human error.

## Considered Options

- **Option A: Transactional State Cloning (Selected):** Creating a deep memory clone of the active personnel and billet data using `structuredClone` when entering a Slating Workspace. All live updates mutate the clone, which can be discarded (Reset Slate) or written back (Commit Slate).
- **Option B: Delta Action Ledger:** Treating the Master Database as read-only and tracking active slating changes as a list of transaction events applied dynamically on top of the base state.

## Consequences

- **Isolation:** Experimental slating remains fully isolated from the base personnel and command records. Uncommitted slates can never contaminate official data.
- **Developer Simplicity:** Bypasses the need for complex event-sourcing engines or state-replay code. The Slating Workspace simply acts on a standard data object.
- **Rollback:** Resetting a draft slate is as simple as discarding the cloned state object, guaranteeing a complete and instant reset to the persistent state.
