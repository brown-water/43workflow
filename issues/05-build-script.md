## Problem Statement

In highly restricted secure military intranet environments (NMCI), Placement Officers and Detailers must run the Master Planner application locally. However, running a local Node.js or web server is blocked, and modern browsers enforce strict CORS policies that block native ES6 JavaScript Modules (`<script type="module">`) loaded via the `file://` protocol. This prevents the application from being developed modularly while maintaining zero-install, double-clickable compatibility.

Additionally, standard modern bundlers (like Vite or Webpack) introduce thousands of third-party `node_modules` dependencies, exposing the project to massive supply-chain security risks and making offline software maintenance impossible.

## Solution

Build a dependency-free, vanilla Node.js compilation script (`build.js`) using only core Node modules (`fs`, `path`). This script will recursively scan a Feature-First modular folder structure, parse Javascript modules to strip out browser-incompatible `import` and `export` statements, aggregate CSS stylesheets, inline HTML templates within standard `<template>` blocks, and compile them all into a single, self-contained monolithic `dist/index.html` file. 

This enables developers to build features using modern, modular engineering principles while delivering a single zero-install, double-clickable asset that bypasses NMCI restrictions.

## User Stories

1. As a developer, I want to write separate HTML, CSS, and JS files for each UI component, so that I can maintain a clean, organized, and modular codebase.
2. As a security compliance officer, I want the build toolchain to have zero third-party dependencies, so that we can completely avoid supply-chain vulnerability reviews.
3. As a deployment engineer, I want the build script to output a single, self-contained `index.html` file, so that Placement Officers can run the app offline over the `file://` protocol simply by double-clicking it.
4. As an offline developer, I want the build script to run instantly without requiring an internet connection or `npm install`, so that I can maintain the codebase on restricted networks.
5. As a developer, I want the build script to support a `--watch` mode, so that any changes I make to source files are automatically compiled into the monolithic target in real-time.
6. As a developer, I want clear, colored terminal compilation logs, so that I can easily verify how many files were stitched together and monitor the build health.
7. As a developer, I want the build script to abort and print helpful diagnostic errors if a file is malformed, so that I can fix bugs immediately without breaking the active deployment asset.

## Implementation Decisions

### 1. Zero-Dependency Build Toolchain
*   The script will use native Node.js core modules (`fs`, `path`, and standard regex).
*   Absolutely no NPM dependencies (e.g. Rollup, Webpack, Vite, or clean-css) are allowed.

### 2. Scanning and Traversal
*   The script recursively crawls the `src/` directory to discover:
    *   Stylesheets (`*.css`)
    *   HTML templates (`*.template.html`)
    *   JavaScript modules (`*.js`)
*   Supports both the current flat directory structure and the target Feature-First modular subfolders (`src/modules/` and `src/components/`).

### 3. CSS Aggregation
*   Stitches CSS rules sequentially.
*   Aggregates global design tokens (`:root`) first, followed by structural layout styles, and then component-scoped styles.
*   Inlines the concatenated stylesheet directly inside a `<style>` block in the HTML `<head>`.

### 4. HTML Template Wrapping
*   Discovers files ending in `.template.html` in nested subfolders.
*   Converts their paths into unique kebab-case IDs (e.g., `src/modules/officer/officer.template.html` wraps into `<template id="template-officer">`).
*   Appends these `<template>` elements to the end of the `<body>` element.

### 5. JS Topological Merging & De-Moduling
*   Reads JS modules and concatenates them in strict dependency order (Schema/Data Models -> Ingestion Parsers -> Diff Engines -> UI Component Controllers -> App Initializer).
*   Uses regular expressions to strip out `import` statements and named/default `export` syntax, making all variables and classes cleanly accessible in a unified, non-modular global scope inside a single `<script>` block.

## Testing Decisions

### What makes a good test
*   A good test verifies that the build script correctly outputs a single valid monolithic HTML file that can execute offline without attempting to fetch external JS modules.
*   We will test the build script by running it against real source code and asserting on the integrity of the generated output (e.g., ensuring no `import` or `export` keywords remain in the script blocks).

### Modules to be tested
*   **Module Stitcher**: Verifying CSS aggregation, HTML template parsing, and JS concatenation.
*   **RegEx De-Moduler**: Asserting that imports and exports are stripped cleanly without corrupting variable declarations or function logic.

## Out of Scope

*   Minification, tree-shaking, and code obfuscation (we keep the monolithic file human-readable to support easy local inspection and compliance review).
*   Compiling CSS preprocessors like Sass or Less (only native CSS is supported).
*   Compiling TypeScript syntax (all logic is kept in highly typed vanilla JS with JSDoc schemas for zero-install portability).

## Further Notes

*   Triage Label: `ready-for-agent`
