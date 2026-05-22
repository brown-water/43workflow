# 0002. Hash-Based Routing for Offline Navigation

We decided to implement a client-side Hash-Based Router (`window.location.hash`) for navigating between modules and deep-linking records.

## Context

Running the Master Planner as a local file (`file:///...`) blocks standard History API path-based routing (e.g., `/officer/123`), as the browser attempts to request a separate file or directory from the local system. Without a routing mechanism, users cannot use the browser's Back/Forward buttons, and sharing or bookmarking specific views or officer records is impossible.

## Considered Options

- **Option A: Hash-Based Routing (Selected):** Parsing `window.location.hash` changes (e.g., `#officer/12345`) to mount and render views dynamically.
- **Option B: In-Memory Tab Switching:** Toggling CSS classes (`display: none`) to switch views based on in-memory state.

## Consequences

- **User Experience:** The browser back/forward buttons function naturally, allowing users to return to previous search results or officer profiles.
- **Deep-Linking:** Detailers and Placement Officers can deep-link directly to specific views (e.g., `#officer/DoD-ID-Here` or `#slating/frs-slate-2026`).
- **Simplicity:** The router is implemented using vanilla JS `hashchange` listeners, keeping the system free of external routing dependencies and fully compatible with zero-install deployments.
