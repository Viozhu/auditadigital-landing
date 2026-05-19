# Light Mode — Global Implementation

**Date:** 2026-05-19  
**Status:** Approved

## Overview

Add light/dark mode support across all pages of auditadigital.com. Default respects OS `prefers-color-scheme`; user can override via toggle in Nav. Preference persisted in `localStorage`.

## Approach

CSS custom properties mapped into Tailwind config (Approach A). Zero changes to component markup — all color logic lives in CSS vars that switch per theme.

## Affected Files

| File | Change |
|------|--------|
| `tailwind.config.js` | Map all semantic color tokens to `var(--color-*)` |
| `src/styles/tokens.css` | Define dark (default) + light CSS var values |
| `src/styles/global.css` | Body colors → CSS vars; grid bg utilities → CSS vars |
| `src/layouts/Layout.astro` | Inline theme-init script in `<head>` (no-flash) |
| `src/components/Nav.astro` | Add sun/moon toggle button |

No changes to pages, other components, or Tailwind class names anywhere.

## Light Palette

| Token | Dark | Light |
|-------|------|-------|
| `ink` | `#050505` | `#f8f8fa` |
| `ink-2` | `#0b0b0c` | `#f0f0f4` |
| `ink-3` | `#121214` | `#e8e8ee` |
| `ink-4` | `#18181c` | `#e0e0e8` |
| `line` | `#1f1f23` | `#d4d4dc` |
| `line-2` | `#2a2a30` | `#c8c8d2` |
| `mute` | `#6a6a73` | `#80808c` |
| `mute-2` | `#9b9ba6` | `#54545f` |
| `paper` | `#ffffff` | `#0a0a10` |
| `blue` | `#2e5bff` | `#2e5bff` |
| `blue-soft` | `#1a3399` | `#dde4ff` |
| `blue-ink` | `#0e1f5c` | `#e8ecff` |
| `green` | `#a3ff12` | `#3a8200` |
| `orange` | `#ff5c00` | `#ff5c00` |

Note: palette may be updated later when a new style guide is provided. With CSS vars, this requires only editing `tokens.css`.

## Token Structure in tokens.css

```css
/* Dark default */
:root {
  --color-ink: #050505;
  /* ... all tokens */
}

/* Light via class toggle */
[data-theme="light"] {
  --color-ink: #f8f8fa;
  /* ... all tokens */
}

/* Light via OS preference (only when no explicit override) */
@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    --color-ink: #f8f8fa;
    /* ... all tokens */
  }
}
```

## Theme Init Script (no-flash)

Inline in `<head>` before any render:

```js
(function() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();
```

## Toggle Button

Placed in `Nav.astro` — desktop nav row and mobile nav. Icon: `☀` when in dark mode (click → light), `☾` when in light mode (click → dark). On click: toggles `data-theme` on `<html>` and writes to `localStorage`.

## Constraints

- Script must be synchronous inline in `<head>` (not `defer`, not `type="module"`) to prevent flash of wrong theme.
- `theme('colors.green')` in scoped `<style>` blocks resolves to `var(--color-green)` at build time — this is valid and dynamic at runtime.
- Neon green (`#a3ff12`) has poor contrast on white backgrounds — light mode maps to forest green `#3a8200`.
