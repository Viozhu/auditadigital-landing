# Light Mode — Global Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add light/dark mode support across all pages, defaulting to OS preference with localStorage override via a toggle button.

**Architecture:** Map all Tailwind semantic color tokens to CSS custom properties. CSS vars switch value under `[data-theme="light"]` and `@media (prefers-color-scheme: light)`. A fixed floating toggle button in `Layout.astro` covers all pages (Nav only exists on the landing page).

**Tech Stack:** Astro, Tailwind CSS, vanilla JS (inline script, no framework)

---

## File Map

| File | Change |
|------|--------|
| `tailwind.config.js` | Replace all hex color values with `var(--color-*)` references |
| `src/styles/tokens.css` | Add CSS vars for dark (default) and light theme |
| `src/styles/global.css` | Body hardcoded colors → CSS vars; grid bg utilities → CSS vars |
| `src/layouts/Layout.astro` | Inline no-flash init script + floating toggle button |

> Note: `Nav.astro` is only rendered on `index.astro`. Since `Layout.astro` wraps every page, the toggle lives there as a fixed floating button — one toggle, consistent on all pages.

---

### Task 1: Map Tailwind color tokens to CSS vars

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Replace hardcoded hex values with CSS var references**

Open `tailwind.config.js` and replace the entire `colors` block:

```js
colors: {
  ink:           'var(--color-ink)',
  'ink-2':       'var(--color-ink-2)',
  'ink-3':       'var(--color-ink-3)',
  'ink-4':       'var(--color-ink-4)',
  line:          'var(--color-line)',
  'line-2':      'var(--color-line-2)',
  mute:          'var(--color-mute)',
  'mute-2':      'var(--color-mute-2)',
  paper:         'var(--color-paper)',
  blue:          'var(--color-blue)',
  'blue-soft':   'var(--color-blue-soft)',
  'blue-ink':    'var(--color-blue-ink)',
  green:         'var(--color-green)',
  orange:        'var(--color-orange)',
},
```

- [ ] **Step 2: Verify build still passes**

```bash
pnpm build
```

Expected: `dist/` generated with no errors.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.js
git commit -m "feat(theme): map Tailwind color tokens to CSS vars"
```

---

### Task 2: Define dark and light CSS vars in tokens.css

**Files:**
- Modify: `src/styles/tokens.css`

- [ ] **Step 1: Replace tokens.css with full dark + light var definitions**

Replace the entire file contents:

```css
/* tokens.css — auditadigital */

/* ── Dark (default) ─────────────────────────────── */
:root {
  --color-ink:       #050505;
  --color-ink-2:     #0b0b0c;
  --color-ink-3:     #121214;
  --color-ink-4:     #18181c;
  --color-line:      #1f1f23;
  --color-line-2:    #2a2a30;
  --color-mute:      #6a6a73;
  --color-mute-2:    #9b9ba6;
  --color-paper:     #ffffff;
  --color-blue:      #2e5bff;
  --color-blue-soft: #1a3399;
  --color-blue-ink:  #0e1f5c;
  --color-green:     #a3ff12;
  --color-orange:    #ff5c00;

  /* Tipografía */
  --ad-font-display: "Space Grotesk", system-ui, -apple-system, sans-serif;
  --ad-font-body:    "Geist", "Inter", system-ui, sans-serif;
  --ad-font-mono:    "JetBrains Mono", ui-monospace, "SF Mono", monospace;
}

/* ── Light (explicit toggle) ─────────────────────── */
[data-theme="light"] {
  --color-ink:       #f8f8fa;
  --color-ink-2:     #f0f0f4;
  --color-ink-3:     #e8e8ee;
  --color-ink-4:     #e0e0e8;
  --color-line:      #d4d4dc;
  --color-line-2:    #c8c8d2;
  --color-mute:      #80808c;
  --color-mute-2:    #54545f;
  --color-paper:     #0a0a10;
  --color-blue:      #2e5bff;
  --color-blue-soft: #dde4ff;
  --color-blue-ink:  #e8ecff;
  --color-green:     #3a8200;
  --color-orange:    #ff5c00;
}

/* ── Light (OS preference, no explicit override) ─── */
@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    --color-ink:       #f8f8fa;
    --color-ink-2:     #f0f0f4;
    --color-ink-3:     #e8e8ee;
    --color-ink-4:     #e0e0e8;
    --color-line:      #d4d4dc;
    --color-line-2:    #c8c8d2;
    --color-mute:      #80808c;
    --color-mute-2:    #54545f;
    --color-paper:     #0a0a10;
    --color-blue:      #2e5bff;
    --color-blue-soft: #dde4ff;
    --color-blue-ink:  #e8ecff;
    --color-green:     #3a8200;
    --color-orange:    #ff5c00;
  }
}
```

- [ ] **Step 2: Start dev server and verify dark mode still looks correct**

```bash
pnpm dev
```

Open `http://localhost:4321`. With OS in dark mode: site looks identical to before. With OS in light mode: site shows light palette.

- [ ] **Step 3: Commit**

```bash
git add src/styles/tokens.css
git commit -m "feat(theme): add dark and light CSS var definitions"
```

---

### Task 3: Update global.css to use CSS vars

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Replace hardcoded body colors**

In `global.css`, the `body` rule currently has:
```css
background-color: #050505;
color: #ffffff;
```

Replace with:
```css
background-color: var(--color-ink);
color: var(--color-paper);
```

- [ ] **Step 2: Replace hardcoded colors in .hero-grid-bg and .final-grid-bg**

Both utilities use `#1f1f23` (which equals `--color-line`). Replace every instance:

`.hero-grid-bg` — replace both `#1f1f23` occurrences with `var(--color-line)`:
```css
.hero-grid-bg {
  background-image:
    linear-gradient(var(--color-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-line) 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: -1px -1px;
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 0%, transparent 75%);
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 0%, transparent 75%);
  opacity: 0.35;
  pointer-events: none;
}
```

`.final-grid-bg` — same replacement:
```css
.final-grid-bg {
  background-image:
    linear-gradient(var(--color-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-line) 1px, transparent 1px);
  background-size: 60px 60px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, #000 0%, transparent 75%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, #000 0%, transparent 75%);
  opacity: 0.5;
}
```

- [ ] **Step 3: Verify in browser**

With dev server running, open `http://localhost:4321`. Body background and grid backgrounds should switch correctly between dark and light (test by temporarily adding `data-theme="light"` to `<html>` in devtools).

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git commit -m "feat(theme): update global.css body and grid utilities to use CSS vars"
```

---

### Task 4: Add no-flash theme-init script + toggle button to Layout.astro

**Files:**
- Modify: `src/layouts/Layout.astro`

- [ ] **Step 1: Add inline theme-init script inside `<head>`**

Add this as the FIRST `<script>` tag inside `<head>`, before any stylesheets or other scripts. It MUST be a plain inline script (no `type="module"`, no `defer`, no `async`) to run synchronously before paint:

```html
<script is:inline>
  (function () {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (_) {}
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
</script>
```

Place it immediately after `<meta name="viewport" .../>` and before the `<title>` tag.

- [ ] **Step 2: Add floating toggle button before `</body>`**

Add before the closing `</body>` tag:

```html
<button
  id="theme-toggle"
  aria-label="Cambiar tema"
  style="position:fixed;bottom:24px;right:24px;z-index:9999;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--color-ink-3);border:1px solid var(--color-line);color:var(--color-paper);cursor:pointer;font-size:16px;transition:background 0.15s,border-color 0.15s;"
>
  <span id="theme-icon">☀</span>
</button>

<script is:inline>
  (function () {
    var btn = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-icon');

    function updateIcon() {
      var theme = document.documentElement.getAttribute('data-theme');
      icon.textContent = theme === 'dark' ? '☀' : '☾';
    }

    updateIcon();

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (_) {}
      updateIcon();
    });
  })();
</script>
```

- [ ] **Step 3: Verify no-flash and toggle behavior**

1. Run `pnpm dev`, open `http://localhost:4321`
2. Click the toggle button — page switches between dark and light instantly
3. Refresh the page — theme is preserved (no flash to wrong theme on load)
4. Open `http://localhost:4321/contact`, `http://localhost:4321/aviso-legal`, `http://localhost:4321/privacidad` — toggle visible and working on all pages

- [ ] **Step 4: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat(theme): add no-flash init script and floating toggle button"
```

---

### Task 5: Final verification and production build

**Files:** none

- [ ] **Step 1: Run full production build**

```bash
pnpm build
```

Expected: no errors, `dist/` generated.

- [ ] **Step 2: Preview production build**

```bash
pnpm preview
```

Open `http://localhost:4321`. Test:
- Dark mode default (if OS is dark)
- Light mode via toggle
- Toggle persists after page refresh
- All 4 pages: `/`, `/contact`, `/aviso-legal`, `/privacidad`
- No flash of wrong theme on load in both modes

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat(theme): complete light/dark mode implementation"
```
