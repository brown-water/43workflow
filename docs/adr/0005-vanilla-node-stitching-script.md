# 0005. Vanilla Node.js Stitching Script for Monolithic Output

We decided to write a custom, dependency-free Vanilla Node.js script (`build.js`) using native Node.js core modules (`fs`, `path`) to compile our modular source code into a single Monolithic HTML Target.

## Context

To generate our Monolithic HTML Target while developing in a Feature-First modular structure, we need a compilation process. Standard modern build toolchains (like Vite, Webpack, or Rollup with inlining plugins) introduce massive `node_modules` folders, complex configuration files, and significant supply-chain dependency trees. If development needs to be conducted or modified in offline or secure environments, downloading or updating these external dependencies becomes a major roadblock.

## Considered Options

- **Option A: Lightweight Vanilla Node.js Stitching Script (Selected):** Writing a custom build script using core Node modules to parse our directory structure and inline HTML, CSS, and JS.
- **Option B: Vite Bundler with Single-File Plugins:** Installing Vite and specialized single-file plugins to transpile, minify, and bundle files.

## Consequences

- **Supply-Chain Freedom:** The build system has zero dependencies, completely eliminating security compliance reviews for third-party packages and supply-chain vulnerabilities.
- **Simplicity & Speed:** The build script is transparent, easy to customize, and executes in milliseconds with a simple `node build.js` command.
- **Development Portability:** The entire project can be moved, developed, and compiled on any machine with just Node.js installed, with no internet access or NPM package registry required.
