# PERS-43 Offline HTML App Design Philosophy
**Version 3.0 | Covenant Design System — Light Mode | Offline HTML Baseline**

> **Changelog from v2.0:** Light mode adopted as default. Color system now follows Covenant warm-linen surfaces verbatim. Brown Water gold identity retained as the accent system. React/TypeScript/Vite references stripped — architecture is vanilla HTML/CSS/JS, single-file, offline. All Covenant governance rules, typography discipline, motion system, and component behavior preserved in full.

---

## 0. Purpose & Authority Hierarchy

This document defines the non-negotiable design standards, architectural constraints, and UX philosophy for all offline HTML applications built by or for PERS-43. It is the primary context-injection document for AI software development agents. Read it in full before writing a single line of HTML, CSS, or JavaScript.

**Source Authority (in priority order):**
1. **NMCI Deployment Constraints** — Physical environment. Overrides all aesthetic preferences.
2. **Covenant Design System** — Visual philosophy, component governance, typography, motion. (UI-UX.md v3.0, UX-PATTERNS.md v2.0)
3. **Brown Water Identity** — Gold accent values and operational color identity for PERS-43.
4. **Module-Level Strategy Docs** — Per-tool feature specifications (PRDs, inference engine specs).

> **Agent Rule:** When sources appear to conflict, apply the resolution in Section 13. Do not independently resolve conflicts — flag them and halt.

---

## 1. The Deployment Environment — NMCI First

All tools run on NMCI government workstations. Every architectural decision flows from this constraint.

### Hard Constraints
- **Zero external network calls.** No CDN imports. No `fetch()` to external URLs. No `@import` for Google Fonts (blocks rendering, fails silently behind NMCI proxies). Every dependency is inlined inside the single HTML file.
- **No `localStorage` or `sessionStorage` for PII.** Non-PII filter/view state *may* use `localStorage` where persistence is explicitly required by the feature spec — never for personnel data, names, UICs tied to individuals, or any CUI field.
- **No `IndexedDB`** in standalone tools (reserved for future server-backed applications).
- **Single-file delivery.** One `.html` file. Opens by double-click from Windows desktop or SharePoint library. No build step. No server. No internet.
- **No install.** The file is the app.
- **CUI-aware.** No data transmitted off-machine. No telemetry. No analytics.
- **Browser target: Chrome 110+ / Edge 110+.**
  - No CSS nesting syntax (`& .child`)
  - No `@container` queries
  - No `@layer` cascade layers
  - No `backdrop-filter: blur()` as a sole visual signal (may be hardware-disabled)
  - No `dvh` / `svh` viewport units (use `vh` with fallback)
  - No Tailwind or any runtime CSS framework

### Inlined Library Policy
All third-party JavaScript is copied inline in a `<script>` tag. Approved:
- **PapaParse** — CSV parsing. Inline the minified build.
- All other libraries require explicit approval before addition.

---

## 2. Design Philosophy — Five Covenant Principles

These are not aesthetic preferences. They are operational requirements.

1. **Warm Navy / Cinematic restraint.** Warm linen surfaces with deep navy for primary structural elements and brass-gold accents. Pure white (`#FFFFFF`) is explicitly prohibited — it causes eye fatigue. The warm surface IS the interface.
2. **Gold as signal.** Brass and khaki gold marks what matters — active navigation, section dividers, key structural labels. Gold is an operational indicator. Never use it for decoration or large surface fills.
3. **Typography carries structure.** Information hierarchy lives in typeface, weight, and scale — not color alone. Any view must be readable in grayscale.
4. **Data is never softened.** Numbers, codes, and identifiers render in monospace at full contrast. No animated count-ups. No rounded softening of data values.
5. **Motion confirms state only.** Animation communicates state changes. If removing an animation has no functional consequence, the animation must not exist.

---

## 3. Color Token System

### Token Authority — Hard Rule
If a hex value appears anywhere in the CSS outside of the `:root` declaration — in a component rule, a `style` attribute, or a JavaScript style assignment — it is a violation. Find the appropriate token or define a new one in `:root`. No exceptions.

### Background Layer Tokens — Warm Linen (Light Mode)

These surfaces define the Covenant depth hierarchy. They are warm, not clinical.

```css
:root {
  --color-bg-void:     #F5F0E8;   /* Page body. Absolute floor — warm linen. */
  --color-bg-base:     #F0EBE1;   /* Primary app surface. Default page background. */
  --color-bg-surface:  #EAE4D8;   /* Cards, panels, containers. One level above base. */
  --color-bg-elevated: #E2DBCc;   /* Dropdowns, tooltips, modals, table headers. */
  --color-bg-overlay:  #D8D0C0;   /* Row/card hover states. Focused input backgrounds. */
  --color-bg-dark:     #1A2332;   /* Deep navy — topbar and primary structural headers only. */
}
```

### Gold Accent Tokens (Brown Water / Covenant Brass)

```css
:root {
  --color-gold-primary: #B8923A;   /* Nav borders, section dividers, structural labels. NOT decorative. */
  --color-gold-bright:  #C5A059;   /* High-emphasis text, active states, heading accents. NOT backgrounds. */
  --color-gold-dim:     #8A6E3E;   /* Inactive gold, secondary rule lines. NOT primary actions. */
  --color-gold-glow:    rgba(184, 146, 58, 0.10); /* Ambient behind gold elements. NOT as fill. */
}
```

### Text Tokens

```css
:root {
  --color-text-primary:   #1C1A16;   /* All primary body copy. Default on light backgrounds. */
  --color-text-secondary: #4A4540;   /* Supporting labels, secondary field values. */
  --color-text-muted:     #7A7268;   /* Inactive labels, placeholder text, column headers. */
  --color-text-dim:       #A8A098;   /* Disabled states, very low-emphasis metadata. */
  --color-text-inverse:   #F0EBE1;   /* Text rendered on --color-bg-dark (topbar). */
}
```

### Border Tokens

```css
:root {
  --color-border-subtle:  #D4CCB8;   /* Internal table rules, low-emphasis separators. */
  --color-border-default: #C4BAA4;   /* Standard card/panel borders, form field outlines. */
  --color-border-strong:  #A89880;   /* Focused input states, emphasized panel edges. */
  --color-border-gold:    #B8923A;   /* Topbar gold rule. The one permanent gold line. Never removed. */
}
```

### Manning Status Tokens

> **Critical Rule:** Status color tokens represent manning/readiness urgency ONLY. Repurposing a status color for a non-status UI element destroys the semantic integrity of the signal system. Do not do it.

| Status | Condition | Background Token | Text/Dot Token |
|---|---|---|---|
| MANNED (green) | Actual ≥ Required | `--color-status-green` | `--color-status-green-text` |
| DEGRADED (amber) | Actual ≥ 80% Required | `--color-status-amber` | `--color-status-amber-text` |
| CRITICAL (red) | Actual < 80% Required | `--color-status-red` | `--color-status-red-text` |
| STABLE (gray) | No gap / not applicable | `--color-status-gray` | `--color-status-gray-text` |

```css
:root {
  --color-status-green:      #D4EDDA;  --color-status-green-text:  #1E6B35;
  --color-status-amber:      #FFF3CD;  --color-status-amber-text:  #856404;
  --color-status-red:        #F8D7DA;  --color-status-red-text:    #842029;
  --color-status-gray:       #E8E4DC;  --color-status-gray-text:   #5A5650;
}
```

### Color Prohibitions

| Prohibited | Why |
|---|---|
| Any hardcoded hex outside `:root` | Single source of truth. Constraint C-11. |
| Pure white (`#FFFFFF`) as any surface | Eye fatigue. Violates Covenant Principle 1. |
| Gradient fills on cards, tables, or panels | Violates flat Covenant surface aesthetic. |
| Purple, teal, or blue as general UI accents | Semantic confusion with potential future escalation tiers. |
| Status colors for non-status UI elements | Destroys urgency signal integrity. |
| Gold as a large surface fill or decorative element | Gold is a signal. Covenant Principle 2. |

---

## 4. Typography System

### Font Roles — Two Fonts, Two Jobs

| Font | Token | Role | Used For | NEVER Used For |
|---|---|---|---|---|
| Verdana | `--font-body`, `--font-display` | UI & Structure | Page titles, headers, narrative copy, form labels, inputs, sub-text | Data table cells, numeric stat lockups, codes |
| DM Mono | `--font-data` | Data / Meta | All table cells, filter inputs, chip labels, badge text, timestamps, UICs, BSCs, status codes | Long-form narrative paragraphs |

Using the wrong font in a context is a design violation, not a style preference.

### Font Loading — Three-Layer Fallback Protocol (NMCI-Hardened)

NMCI proxy infrastructure may block remote font loads without warning. Every tool must implement all three layers.

**Layer 1 — Inline `@font-face` with base64 `.woff2`** (preferred for single-file offline tools):
Embed font data directly in the `<style>` block. Guaranteed to load regardless of network state.

**Layer 2 — Remote `<link>` tag** (use only if network availability is confirmed):
Place in `<head>`. Never use `@import` inside CSS — `@import` blocks rendering and fails silently.

**Layer 3 — System stack** (always active as final fallback):

```css
:root {
  --font-body:    'Verdana', Arial, sans-serif;
  --font-display: 'Verdana', Arial, sans-serif;
  --font-data:    'DM Mono', 'Consolas', 'Courier New', monospace;
}

.font-fallback {
  --font-body:    Arial, sans-serif;
  --font-display: Arial, sans-serif;
  --font-data:    'Consolas', 'Courier New', Courier, monospace;
}
```

**Font Detection Script** — include in every tool, runs at page load:

```javascript
(function () {
  'use strict';
  var TIMEOUT = 2500; // accounts for NMCI proxy latency

  function fallback(reason) {
    document.documentElement.classList.add('font-fallback');
    console.warn('[PERS43] Font fallback active:', reason);
  }

  if (!document.fonts || typeof document.fonts.check !== 'function') {
    fallback('FontFace API unavailable'); return;
  }

  var timeout = new Promise(function (resolve) {
    setTimeout(function () { resolve('timeout'); }, TIMEOUT);
  });

  Promise.race([document.fonts.ready, timeout]).then(function () {
    var ok = document.fonts.check('1em "Verdana"') &&
             document.fonts.check('1em "DM Mono"');
    if (!ok) fallback('Primary fonts failed to load');
  });
}());
```

### Type Scale Tokens

```css
:root {
  /* DISPLAY (Verdana) */
  --type-display-xl:  48px;   /* Hero stat numbers */
  --type-display-lg:  36px;   /* Page section titles */
  --type-display-md:  28px;   /* Card titles, sub-section heads */
  --type-display-sm:  24px;   /* Mixed-case hero cards */

  /* BODY (Verdana) */
  --type-body-lg:     20px;   /* Lead paragraphs */
  --type-body-md:     18px;   /* Primary inputs, search text, labels */
  --type-body-sm:     16px;   /* Minimum readable body copy */

  /* DATA (DM Mono) */
  --type-data-xl:     20px;   /* Large callout values */
  --type-data-md:     18px;   /* Target interactive text size */
  --type-data-sm:     16px;   /* Standard table values */
  --type-data-xs:     16px;   /* ABSOLUTE FLOOR: badges, metadata, column headers */

  /* LINE HEIGHTS */
  --leading-tight:    1.1;
  --leading-normal:   1.5;
  --leading-data:     1.5;

  /* LETTER SPACING */
  --tracking-display: 0.04em;
  --tracking-caps:    0.12em;
  --tracking-data:    0.06em;
}
```

### Typography Application Rules

| Context | Font | Size | Treatment |
|---|---|---|---|
| Page / section titles | `--font-display` | `--type-display-md` | Weight 600, mixed-case |
| Navigation links | `--font-data` | `--type-data-xs` | UPPERCASE, `--tracking-caps` |
| Table column headers | `--font-data` | `--type-data-xs` | UPPERCASE, `--tracking-caps`, `--color-text-muted` |
| Table cell values | `--font-data` | `--type-data-sm` | `--tracking-data` |
| Status badge labels | `--font-data` | `--type-data-xs` | UPPERCASE |
| Form inputs | `--font-data` | `--type-data-md` | |
| Narrative / description copy | `--font-body` | `--type-body-md` | |
| Data freshness timestamp | `--font-data` | `--type-data-xs` | `--color-text-dim` |
| Dropdown option text | `--font-body` | `--type-data-md` | |

### Typography Prohibitions

| Prohibited | Why |
|---|---|
| Any text below 16px | 16px Floor Law — accessibility violation for the target demographic |
| `font-style: italic` anywhere | Sub-pixel rendering blur on standard NMCI monitors |
| `text-transform: uppercase` on card titles | Destroys bouma/word-shape predictability |
| Animated or counting-up data values | Implies real-time data; erodes data freshness trust |
| Emoji as content or status indicators | Renders inconsistently across NMCI browser configurations |
| Inter, Bebas Neue, Libre Baskerville | Explicitly deprecated |

---

## 5. Spacing System

### 8px Base Grid

All spacing values are multiples of 8px. Do not invent intermediate values.

```css
:root {
  --space-1:   4px;   /* Micro: icon-to-label, badge internal padding */
  --space-2:   8px;   /* Tight: chip padding, inline element gaps */
  --space-3:  12px;   /* Default internal padding */
  --space-4:  16px;   /* Standard component padding */
  --space-5:  24px;   /* Section internal spacing */
  --space-6:  32px;   /* Between major components */
  --space-7:  48px;   /* Section-to-section rhythm */
  --space-8:  64px;   /* Page-level vertical breathing room */

  /* BORDER RADIUS */
  --radius-none: 0px;    /* Tables, hard-edged panels */
  --radius-xs:   2px;    /* Status dots, tiny elements */
  --radius-sm:   4px;    /* Input fields, chips, data panels */
  --radius-md:   6px;    /* Cards, panels, dropdowns */
  --radius-lg:   8px;    /* Modals */
  --radius-pill: 100px;  /* Toggle chips, filter pills */
  /* HARD RULE: No component exceeds border-radius 10px in PERS-43 tools. */
}
```

---

## 6. Layout Architecture

### Three Structural Zones — Required on Every Page

Every tool uses the same three-zone architecture. These zones never overlap and never vary between tools.

| Zone | Spec | Description |
|---|---|---|
| **Topbar** | 56px, `position: fixed`, `top: 0` | App name, page navigation, data freshness indicator. Never scrolls. Background: `--color-bg-dark`. Text: `--color-text-inverse`. |
| **Gold Rule** | 2px, `position: fixed`, `top: 56px` | The permanent visual anchor. `background: --color-border-gold`. Never hidden, never conditional, never subject to scroll. |
| **Content Area** | `margin-top: 58px`, scrollable | All page content. Max-width 1440px, centered. Background: `--color-bg-base`. |

```css
.topbar {
  position: fixed; top: 0; left: 0; right: 0; height: 56px;
  background: var(--color-bg-dark);
  display: flex; align-items: center;
  padding: 0 var(--space-6); gap: var(--space-5);
  z-index: 1000;
}
.gold-rule {
  position: fixed; top: 56px; left: 0; right: 0; height: 2px;
  background: var(--color-border-gold); z-index: 1001;
}
.content-area {
  margin-top: 58px;
  padding: var(--space-6);
  max-width: 1440px;
  margin-left: auto; margin-right: auto;
}
```

### Layout Prohibitions

| Prohibited | Compliant Alternative |
|---|---|
| Sidebar navigation | Topbar-only navigation |
| Hamburger / drawer menu | Topbar nav with active state |
| Drop shadows on data tables | Border + background contrast only |
| Widget drag-and-drop | Fixed institutional layout |

---

## 7. Component Specifications

### 7.1 Data Tables

Tables are the primary output surface for these tools. They must be scannable under time pressure.

```css
.data-table {
  width: 100%; border-collapse: collapse;
  font-family: var(--font-data); font-size: var(--type-data-md);
}
.data-table thead th {
  background: var(--color-bg-elevated);
  font-size: var(--type-data-xs); letter-spacing: var(--tracking-caps);
  text-transform: uppercase; color: var(--color-text-muted);
  padding: var(--space-3) var(--space-4);
  text-align: left; white-space: nowrap;
  cursor: pointer; user-select: none;
  border-bottom: 2px solid var(--color-border-default);
  position: sticky; top: 0;
}
.data-table td {
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-primary);
  line-height: var(--leading-data);
  border-bottom: 1px solid var(--color-border-subtle);
  vertical-align: middle;
}
.data-table tbody tr:hover td {
  background: var(--color-bg-overlay); cursor: pointer;
}
```

**Table Rules:**
- Sticky `thead` on all vertically scrollable tables
- Click-to-sort on relevant columns — sort indicator always visible
- Left-align text cells; right-align number cells
- Status cells: colored left-border (`border-left: 3px solid var(--color-status-X-text)`) rather than full cell fill — preserves readability on light backgrounds
- No outer drop shadows on tables
- No gradient row backgrounds
- Alternating row shading via CSS `:nth-child(even) { background: var(--color-bg-surface); }` is permitted on large tables for scannability
- Zero results: explicit empty-state message row, not a silent empty grid

**Quick-Flag Column (when required):**
- First data column; `position: sticky`; pinned left
- Icons at 16px, centered in 24px container
- Max 3 flags visible; `+N` overflow indicator if more
- No flag text — icons only; all icons require a tooltip (Section 7.5)
- Urgent flags: `--color-status-red-text`

### 7.2 Status Dots

```css
.status-dot {
  width: 8px; height: 8px; border-radius: 50%;
  display: inline-block; flex-shrink: 0;
}
.status-dot--green { background: var(--color-status-green-text); }
.status-dot--amber { background: var(--color-status-amber-text); }
.status-dot--red   {
  background: var(--color-status-red-text);
  box-shadow: 0 0 6px var(--color-status-red-text);
  animation: dot-pulse-red 2s ease-in-out infinite;
}

@keyframes dot-pulse-red { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
```

Red dot pulse is the **only permitted animation on live data content**.

### 7.3 Status Badges

```css
.badge {
  display: inline-flex; align-items: center; gap: var(--space-1);
  font-family: var(--font-data); font-size: var(--type-data-xs);
  letter-spacing: var(--tracking-caps); text-transform: uppercase;
  padding: 3px 8px; border-radius: var(--radius-xs);
  border: 1px solid transparent; white-space: nowrap;
}
.badge--green { background: var(--color-status-green); color: var(--color-status-green-text); }
.badge--amber { background: var(--color-status-amber); color: var(--color-status-amber-text); }
.badge--red   { background: var(--color-status-red);   color: var(--color-status-red-text);   }
.badge--gray  { background: var(--color-status-gray);  color: var(--color-status-gray-text);  }
```

### 7.4 Filter Bar & Chips

```css
.filter-bar {
  display: flex; gap: var(--space-3); align-items: center; flex-wrap: wrap;
  background: var(--color-bg-surface); border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md); padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
}

.filter-input {
  flex: 1; min-width: 220px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-default); border-radius: var(--radius-sm);
  padding: 10px 12px; color: var(--color-text-primary);
  font-family: var(--font-data); font-size: var(--type-data-md);
  letter-spacing: var(--tracking-data); outline: none;
  transition: border-color var(--duration-fast) ease;
}
.filter-input::placeholder { color: var(--color-text-dim); }
.filter-input:focus { border-color: var(--color-border-strong); }

.chip {
  font-family: var(--font-data); font-size: var(--type-data-xs);
  letter-spacing: var(--tracking-caps); text-transform: uppercase;
  padding: 5px 10px; border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-pill); color: var(--color-text-dim);
  background: transparent; cursor: pointer;
  transition: all var(--duration-fast) ease;
}
.chip:hover  { border-color: var(--color-border-default); color: var(--color-text-secondary); }
.chip.active { border-color: var(--color-gold-primary); background: var(--color-gold-glow); color: var(--color-gold-bright); }
```

**Filter behavior rules:**
- Filters are always inline — never in modals
- Active filter count badge is always visible when filters are applied
- Always provide a "Clear Filters / Reset" affordance when any filter is active
- Debounce text filter inputs: 300ms
- Never auto-submit — filter on `input` event with debounce

### 7.5 Tooltip System

```css
.tooltip {
  position: absolute;
  background: var(--color-bg-elevated);
  color: var(--color-text-primary);
  font-family: var(--font-data); font-size: var(--type-data-sm);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-sm);
  max-width: 280px; white-space: normal;
  z-index: 2000; pointer-events: none;
  opacity: 0; transition: opacity var(--duration-fast) ease;
}
.tooltip.is-visible { opacity: 1; }
```

| Property | Value |
|---|---|
| Trigger | Mouse hover via `data-tooltip` attribute |
| Show delay | 400ms (prevents flicker on scan) |
| Hide delay | 100ms |
| Animation | `opacity 0→1`, 150ms only. No scale. No translate. |

### 7.6 Mode Toggle

Used when a view requires switching between two analytical lenses.

```css
.mode-toggle {
  display: inline-flex;
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-sm); overflow: hidden;
}
.mode-toggle__btn {
  font-family: var(--font-data); font-size: var(--type-data-xs);
  letter-spacing: var(--tracking-caps); text-transform: uppercase;
  padding: 8px 20px; background: transparent; border: none;
  color: var(--color-text-muted); cursor: pointer;
  transition: all var(--duration-fast) ease;
}
.mode-toggle__btn:hover  { color: var(--color-text-primary); }
.mode-toggle__btn.active {
  background: var(--color-gold-glow); color: var(--color-gold-bright);
}
```

### 7.7 Cards / Panels

```css
.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  padding: var(--space-4);
}
.card--priority { border-top: 2px solid var(--color-gold-primary); }
.card-title {
  font-family: var(--font-display); font-size: var(--type-display-sm);
  font-weight: 600; color: var(--color-text-primary);
  margin: 0 0 var(--space-3) 0;
}
```

### 7.8 Information Comparison Modal (Baseball Card)

When side-by-side entity comparison is needed:
- Background: `--color-bg-surface`
- Backdrop: semi-transparent `--color-bg-dark` overlay at ~60% opacity
- **NOT `backdrop-filter: blur()`** — may be hardware-disabled on NMCI
- Border-radius: `--radius-lg` (8px)
- All data fields: `--font-data` at `--type-data-md`
- Close: top-right `✕`, `--color-text-muted`, hover to `--color-text-primary`
- Max-width: 900px, centered

### 7.9 CSS Bar Charts (Manning Visualization)

CSS div-based only. No `<canvas>`. No SVG chart libraries. No external charting dependencies.

```html
<div class="bar-row">
  <span class="bar-label">VFA-147</span>
  <div class="bar-track">
    <div class="bar-fill" style="width: 73%; background: var(--color-status-green-text);"></div>
  </div>
  <span class="bar-value">11/15</span>
</div>
```

Fill color maps directly to the manning status token for that unit. Never an arbitrary color.

### 7.10 Settings / Configuration Panel

For tools that require view configuration persistence:
- Slide-over panel from right edge, 320px wide
- Background: `--color-bg-surface`; border-left: `1px solid var(--color-border-default)`
- Close via `✕` button or clicking outside
- Section headings: `--font-data`, `--type-data-xs`, uppercase, `--tracking-caps`
- **Stores non-PII only** (filter state, column visibility, display preferences)
- Never stores personnel identifiers or CUI fields

### 7.11 Shareability Protocol

For sharing filter/view state between users:
- Export: JSON blob of current filters, sorts, and UI toggles → clipboard with toast notification
- Import: paste area accepts JSON blob → validates structure → applies local state
- **JSON blob contains NO PII** — filter and sort configuration only
- Clipboard API is available on NMCI

### 7.12 Data Freshness Indicator

Every page that displays imported data must render a freshness timestamp, right-aligned in the topbar:

```
Data Last Refreshed: 2026-05-26 14:30
```

- Font: `--font-data`, `--type-data-xs`, `--color-text-dim`
- Color: `--color-text-dim` (de-emphasized but always visible)
- Source: timestamp captured at CSV parse time
- Position: topbar, right-aligned
- This is not decorative. Users must always know how stale their view is.

---

## 8. Motion System

```css
:root {
  --duration-instant:  80ms;   /* Button press, checkbox tap */
  --duration-fast:    150ms;   /* Hover states, chip active */
  --duration-normal:  250ms;   /* Dropdown open, panel reveal */
  --duration-slow:    400ms;   /* Page-load stagger entries */

  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);   /* Entrances */
  --ease-in:    cubic-bezier(0.4,  0, 1,   1);   /* Exits */
  --ease-inout: cubic-bezier(0.65, 0, 0.35, 1);  /* State transitions */
}
```

### Page Load Reveal — Required on All Pages

Primary content regions receive one staggered entrance sequence on load. Total sequence completes in under 600ms. Elements start invisible and offset downward. Fires once. Never repeats.

```css
.reveal { opacity: 0; transform: translateY(12px); }
.reveal.is-visible {
  animation: reveal-enter var(--duration-slow) var(--ease-out) forwards;
}
@keyframes reveal-enter { to { opacity: 1; transform: translateY(0); } }

[data-delay="1"] { animation-delay:   0ms; }
[data-delay="2"] { animation-delay:  80ms; }
[data-delay="3"] { animation-delay: 160ms; }
[data-delay="4"] { animation-delay: 240ms; }
[data-delay="5"] { animation-delay: 320ms; }
```

```javascript
// Double rAF ensures paint before animation fires
document.addEventListener('DOMContentLoaded', function () {
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
    });
  });
});
```

### Permitted Animations — Complete List

Any animation not on this list requires explicit authorization before implementation.

| Animation | Target | Duration | Trigger | Purpose |
|---|---|---|---|---|
| Page load reveal | All `.reveal` elements | 400–600ms staggered | DOMContentLoaded | Communicates page readiness |
| Hover state | Nav links, table rows, cards | 150ms | `:hover` | Confirms interactivity |
| Focus ring | All interactive elements | 80ms | `:focus-visible` | Keyboard nav accessibility |
| Dropdown open | Filter selects | 250ms | click / focus | State change feedback |
| Red dot pulse | `.status-dot--red` | 2s loop | Always-on CSS | Communicates urgency |
| Chip active toggle | `.chip.active` | 150ms | JS class toggle | Confirms filter selection |
| Mode toggle switch | `.mode-toggle__btn.active` | 150ms | JS class toggle | Confirms scope change |
| Tooltip fade | `.tooltip.is-visible` | 150ms | hover + 400ms delay | Information disclosure |

### Motion Prohibitions

- **No animation on large data tables** (100+ rows). Animation kills usability at scale.
- **No animated data values.** No count-up on load. No value transitions on update. Data represents real career-affecting Sailor records. Animating values implies real-time updates and destroys trust in the data freshness indicator.

---

## 9. CSV Import Pipeline

All tools that ingest PERS report data follow this exact pattern.

### Input Format
- Source: OAIS/PERS mainframe exports, typically 159-column fixed-width reports
- Unique billet key: `AAUIC` + `BBSC`
- Parser: PapaParse (inlined), `{ header: true, skipEmptyLines: true }`

### Required Validation on Import
Before rendering any data, validate in this sequence:
1. Required columns are present — fail loudly with missing column list if not
2. `AAUIC` / UIC fields are non-empty on at least one row
3. Date fields parse to valid dates, or are blank (blank is acceptable)
4. Record count is non-zero

### Column Name Normalization
OAIS column names contain spaces, slashes, and special characters. Normalize on import:

```javascript
const normalized = Object.fromEntries(
  Object.entries(row).map(([k, v]) => [k.trim(), v?.trim() ?? ''])
);
```

### Error Handling
- Import failure: human-readable message identifying the specific problem (wrong column count, missing field, etc.)
- Never swallow errors silently
- Heavy parse operations (500+ rows): use `setTimeout(fn, 0)` to yield to the UI thread before processing; show a status indicator

---

## 10. PERS Data Display Rules

### Prefix Conventions — Mirror the Source System

| Prefix | Meaning | Example Columns | Display Label |
|---|---|---|---|
| `I_` / `I` | Incumbent (officer in the billet) | `INAME`, `IDESIG`, `IAQD` | "Incumbent" |
| `P_` / `P` | Prospective (incoming officer) | `PNAME`, `PDESIG`, `PEDA` | "Prospective" |
| `B_` / `B` | Billet (authorized requirement) | `BDESIG`, `BAQD`, `BTITLE` | "Billet Req" |

### Source of Truth Rules (Hardcoded — No Override Without Explicit Flag)
- **IDESIG** is source of truth for officer role/designator — not BDESIG
- **BAQD** defines qualification requirement — must appear in IAQD list for a match (order does not matter)
- **Never display:** `PACTION.DESK`, `PASGN.DESK`, `BSUBSPEC`, `ISUBSPEC`, `BBA`, or any `_1` / `_2` suffix columns

### Manning Status Display
- SEPARATING is always an overlay sub-tag — never overwrites the phase. Officer retains manning contribution until actual loss date.
- PRD (IPRD) vs. EDA (PEDA) delta drives gap visualization — the "waterfall"
- It is acceptable to dip below minimums *between* deployments. It is never acceptable during deployment.

---

## 11. Accessibility Floor

- **16px Typography Floor** — hard minimum for all operational text strings, no exceptions
- WCAG AA contrast: 4.5:1 for body text, 3:1 for large text
- All interactive elements keyboard-navigable; tab order is logical
- Focus ring: `outline: 2px solid var(--color-gold-primary); outline-offset: 2px`
- No information conveyed by color alone — always pair with a text label or icon
- All tables: `<th scope="col">` on every column header, always
- All status flag icons: tooltip text present (Section 7.5)
- `<button>` for actions; `<a>` for navigation only — never `<div onclick>`
- Minimum click/tap target: 32px × 32px

---

## 12. File & Naming Conventions

### Output File Naming
```
PERS43_[ToolName]_v[Major].[Minor].html
```
Examples: `PERS43_ManningDashboard_v1.3.html`, `PERS43_FastTrack_v0.4.html`

### Single-File HTML Structure — Required Order
```
<head>
  meta, title
  <style> — ALL CSS, ALL :root tokens, ALL component styles
</head>
<body>
  .topbar
  .gold-rule
  .content-area
    [page content]
</body>
<!-- Inlined library <script> tags (PapaParse, etc.) -->
<!-- App logic <script> — after libraries -->
```

### Version Embedding
- Version visible in `<title>` tag
- Version visible in a footer element inside `.content-area`
- **Major:** breaking change to data model or export format
- **Minor:** new features, non-breaking changes

---

## 13. Conflict Resolutions

Where Covenant (SideCar/React) and PERS-43 offline HTML requirements diverge, these resolutions are canonical:

| Topic | Covenant / SideCar | PERS-43 Resolution |
|---|---|---|
| **Architecture** | React + TypeScript + Vite build | **Vanilla HTML/CSS/JS, single file.** No framework, no build step. |
| **Color mode** | Light mode (warm linen) | **Light mode adopted.** Covenant surfaces apply verbatim. |
| **Font loading** | Remote `<link>` preferred | **Three-layer fallback required.** Inline `@font-face` preferred for guaranteed offline load. |
| **`localStorage`** | Non-PII settings permitted | **Non-PII only.** Never for personnel data or CUI fields. |
| **`backdrop-filter`** | Not used | **Prohibited.** Hardware-disabled on some NMCI configurations. |
| **Border radius** | Up to 16px landing cards, 32px search | **Hard cap: 10px.** No exceptions in PERS-43 tools. |
| **CSS architecture** | Component files, TypeScript imports | **Inline `<style>` block only.** All rules in one place. |
| **Data adapter layer** | `SideCarAdapter.ts` | **Direct PapaParse parse + JS transform.** No abstraction layer needed at this scale. |
| **PRD tiers** | SideCar PRD urgency tiers (gray/green/yellow/red/escalated) | **Renamed to Manning Status** (STABLE/MANNED/DEGRADED/CRITICAL). Same semantic pattern; domain-appropriate labels. |

---

## 14. What This System Is Not

- ❌ Not a consumer app. No border-radius above 10px. No decorative gradients.
- ❌ Not mobile-first. Target: 1920×1080. Minimum supported: 1280×800.
- ❌ Not real-time. No WebSockets, no polling. Data is imported from a file.
- ❌ Not a React app. No JSX. No build step. No `npm install`.
- ❌ Not authenticated at the UI layer. No login screens. Access control is at the file/SharePoint level.
- ❌ Not a PDF/Word generator. That is a separate workflow.

---

## 15. Full Token Cheatsheet — Copy Into Every New Tool

```css
:root {
  /* BACKGROUNDS (Warm Linen — Light Mode) */
  --color-bg-void:        #F5F0E8;
  --color-bg-base:        #F0EBE1;
  --color-bg-surface:     #EAE4D8;
  --color-bg-elevated:    #E2DBCC;
  --color-bg-overlay:     #D8D0C0;
  --color-bg-dark:        #1A2332;

  /* GOLD (Brown Water / Covenant Brass) */
  --color-gold-primary:   #B8923A;
  --color-gold-bright:    #C5A059;
  --color-gold-dim:       #8A6E3E;
  --color-gold-glow:      rgba(184, 146, 58, 0.10);

  /* NAVY */
  --color-navy:           #3E5C76;
  --color-navy-bright:    #5B82A6;

  /* TEXT */
  --color-text-primary:   #1C1A16;
  --color-text-secondary: #4A4540;
  --color-text-muted:     #7A7268;
  --color-text-dim:       #A8A098;
  --color-text-inverse:   #F0EBE1;

  /* BORDERS */
  --color-border-subtle:  #D4CCB8;
  --color-border-default: #C4BAA4;
  --color-border-strong:  #A89880;
  --color-border-gold:    #B8923A;

  /* MANNING STATUS */
  --color-status-green:       #D4EDDA;  --color-status-green-text:  #1E6B35;
  --color-status-amber:       #FFF3CD;  --color-status-amber-text:  #856404;
  --color-status-red:         #F8D7DA;  --color-status-red-text:    #842029;
  --color-status-gray:        #E8E4DC;  --color-status-gray-text:   #5A5650;

  /* TYPOGRAPHY */
  --font-body:    'Verdana', Arial, sans-serif;
  --font-display: 'Verdana', Arial, sans-serif;
  --font-data:    'DM Mono', 'Consolas', 'Courier New', monospace;

  --type-display-xl: 48px;  --type-display-lg: 36px;
  --type-display-md: 28px;  --type-display-sm: 24px;
  --type-body-lg:    20px;  --type-body-md:    18px;  --type-body-sm: 16px;
  --type-data-xl:    20px;  --type-data-md:    18px;
  --type-data-sm:    16px;  --type-data-xs:    16px;

  --leading-tight:  1.1;   --leading-normal:  1.5;   --leading-data:   1.5;
  --tracking-display: 0.04em; --tracking-caps: 0.12em; --tracking-data: 0.06em;

  /* SPACING */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 24px;  --space-6: 32px;  --space-7: 48px;  --space-8: 64px;

  /* BORDER RADIUS */
  --radius-none: 0px;  --radius-xs: 2px;   --radius-sm: 4px;
  --radius-md:   6px;  --radius-lg: 8px;   --radius-pill: 100px;

  /* MOTION */
  --duration-instant: 80ms;   --duration-fast:   150ms;
  --duration-normal:  250ms;  --duration-slow:   400ms;
  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:    cubic-bezier(0.4,  0, 1,   1);
  --ease-inout: cubic-bezier(0.65, 0, 0.35, 1);
}
```

---

*Document Owner: PERS-43 | Version 3.0 | 2026*
*Authority Sources: Covenant Design System (UI-UX.md v3.0, UX-PATTERNS.md v2.0) + Brown Water Identity*
*Reference alongside: Career Phase Inference Engine Spec v1.3 · FastTrack PRD v1.1 · PERS-43 Placement Officer Knowledge Base*
