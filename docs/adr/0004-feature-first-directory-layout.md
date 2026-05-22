# 0004. Feature-First Directory Layout for Component Development

We decided to organize our front-end codebase using a Feature-First (domain-based) folder structure, grouping HTML templates, CSS styles, and JavaScript logic for each functional module together.

## Context

As the Master Planner expands to cover multiple distinct functional modules (Officer View, Command View, Board Shadow, and Slating), organizing files strictly by technical layers (e.g., separating all `.css` files into one folder and all `.js` files into another) creates significant developer friction. Developers must constantly traverse separate directory trees to make simple modifications to a single UI component.

## Considered Options

- **Option A: Feature-First (Domain-Based Components) (Selected):** Grouping HTML, JS, and CSS files within dedicated feature directories (e.g., `src/modules/command/`).
- **Option B: Layer-First (Technical-Based Folders):** Splitting files strictly by their type into top-level `html/`, `css/`, and `js/` directories.

## Consequences

- **High Modularity:** Each component or module is self-contained. Adding, removing, or refactoring a feature is clean and localized, preventing cross-module side effects.
- **Maintainability:** AI coding agents and human developers can easily find all assets relating to a specific UI widget or domain context in a single location.
- **Build Step Requirement:** The compiler script must intelligently search for and extract HTML, CSS, and JS components from nested directories to bundle them into the single-file Monolithic HTML Target.
