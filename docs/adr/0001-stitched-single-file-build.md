# 0001. Stitched Single-File Build for NMCI Compliance

We decided to use a local development build workflow that aggregates modular source code (HTML templates, CSS files, and JS modules) and compiles it into a single, self-contained monolithic `index.html` file for deployment.

## Context

In highly secure Navy Intranet (NMCI) environments, Placement Officers and Detailers must be able to run the Master Planner offline by double-clicking a local HTML file directly without running a local web server (which is restricted). Modern web browsers (Edge and Chrome) enforce strict CORS policies that block native ES6 Modules (`<script type="module">`) loaded via the `file://` protocol. 

## Considered Options

- **Option A: Monolithic Multi-Script Globals:** Splitting code across separate files and referencing them via standard `<script>` tags, exposing variables to the global `window` scope.
- **Option B: Stitched Single-File Build (Selected):** Writing modular ES6 files locally and using a compilation script to merge all components, CSS, and JS into a single deployable HTML file.
- **Option C: Custom Web Components in a Monolith:** Keeping all code in a single file during development and dividing it conceptually using Web Components.

## Consequences

- **Developer Experience:** We can write clean, modular, modern JavaScript and CSS files during development.
- **Delivery:** The final deployable asset is a single, zero-install, double-clickable `index.html` file that easily bypasses the NMCI CORS moat.
- **Build Step:** Developers must run a build script (`npm run build` or similar) to generate the deployable monolith, separating the active development source from the distribution output.
