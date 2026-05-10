# CLAUDE.md

Guidance for Claude Code (claude.ai/code) in this repo.

## Commands

Use **pnpm** (not npm or yarn).

```bash
pnpm dev         # dev server at localhost:4321
pnpm build       # static build → dist/
pnpm preview     # preview the built output
pnpm install     # install deps
pnpm add <pkg>   # add dependency
pnpm add -D <pkg> # add dev dependency
pnpm remove <pkg> # remove dependency
```

No test suite or linter.

## Environment Variables

| Variable | Default | Purpose |
|---|---|---|
| `PUBLIC_STRIPE_LINK` | `'#precio'` | Stripe checkout URL passed to all CTA buttons |
| `PUBLIC_SLOTS` | `14` | Number of available slots shown in Hero and Pricing |

Set in `.env` (not committed). Both `PUBLIC_` prefix — safe to expose client-side.

## Architecture

Single-page static (Astro `output: 'static'`), Tailwind CSS. No framework components — all `.astro`.

**Data flow:** `index.astro` reads env vars, passes `stripeLink` and `slots` as props to section components. No global state, no stores.

**Page sections:** Nav → Hero → VideoPlaceholder → Pains → Pillars → Process → About → Testimonials → Pricing → FAQ → Footer → MobileCTA (fixed bottom bar on mobile).

`src/layouts/Layout.astro` — HTML shell. Loads Google Fonts (Space Grotesk, Geist, JetBrains Mono), Plausible analytics (`data-domain="auditadigital.com"`).

## Design System

All tokens in `tailwind.config.js`. Use these, not arbitrary values:

**Colors (dark theme only):** `ink` / `ink-2` / `ink-3` / `ink-4` (backgrounds, darkest to slightly lighter), `line` / `line-2` (borders), `mute` / `mute-2` (secondary text), `paper` (white text), `blue` / `blue-soft` / `blue-ink` (primary action), `green` (accent/positive), `orange` (accent/highlight).

**Typography:** `font-display` (Space Grotesk, headings), `font-body` (Geist, default), `font-mono` (JetBrains Mono, tags/labels/code-style text). Named sizes: `text-mono-tag`, `text-small`, `text-body`, `text-body-l`, `text-h2`, `text-h1`, `text-display-m`, `text-display-l`, `text-display-xl`. Large display headings use `clamp()` inline styles for fluid sizing.

**Spacing:** Custom scale — 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 (in px).

**Border radius:** `rounded-xs` (2px), `rounded-s` (4px), `rounded-m` (6px).

**Utility classes** (`src/styles/global.css`): `.strike-line` (orange diagonal strike-through pseudo-element), `.hero-grid-bg` / `.final-grid-bg` (subtle grid background with radial mask).

## Conventions

- Section numbers: `<span class="text-orange">NN</span> · Label` pattern (e.g. `08 · Precio`).
- CTA buttons use `data-cta="<position>"` for Plausible event tracking (`cta_click` event).
- Mono labels/comments use `//` prefix as visual decoration (not real code comments).
- Max content width: `max-w-[1240px] px-6`.
- Two-column grid: `grid-cols-1 md:grid-cols-[220px_1fr]` (label + content) used across sections.