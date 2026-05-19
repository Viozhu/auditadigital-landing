# docs/conventions.md — Convenciones del Proyecto

## Naming

| Cosa              | Convención       | Ejemplo                     |
|-------------------|------------------|-----------------------------|
| Componentes       | PascalCase       | `Hero.astro`, `MobileCTA.astro` |
| Páginas           | kebab-case       | `aviso-legal.astro`         |
| Config / data     | camelCase        | `pricingIncludes`, `processSteps` |
| CSS classes       | kebab-case       | `.strike-line`, `.hero-grid-bg` |
| Env vars cliente  | SCREAMING_SNAKE  | `PUBLIC_STRIPE_LINK`        |

## Estructura de carpetas

```
src/
  components/   ← secciones de la landing (PascalCase)
  config/       ← site.ts (única fuente de datos)
  layouts/      ← Layout.astro
  pages/        ← index + legales + api
  styles/       ← global.css + tokens.css
```

## Tailwind / Tokens

**Usar solo tokens del design system:**
- Colores: `ink`, `ink-2`, `ink-3`, `ink-4`, `line`, `line-2`, `mute`, `mute-2`, `paper`, `blue`, `blue-soft`, `blue-ink`, `green`, `orange`
- Tipografía: `font-display`, `font-body`, `font-mono` + tamaños nombrados (`text-mono-tag`, `text-small`, `text-body`, `text-body-l`, `text-h2`, `text-h1`, `text-display-m`, `text-display-l`, `text-display-xl`)
- Espaciado: escala custom (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- Border radius: `rounded-xs`, `rounded-s`, `rounded-m`

**Excepción permitida:** `clamp()` inline para display headings fluidos.
**Prohibido:** valores arbitrarios como `text-[17px]`, `gap-[23px]`, `#abc123` hardcodeado.

## Patrones visuales

- Número de sección: `<span class="text-orange">NN</span> · Label`
- Labels mono: prefijo `//` como decoración visual, `font-mono text-mono-tag`
- Ancho máximo de contenido: `max-w-[1240px] px-6`
- Grid dos columnas: `grid-cols-1 md:grid-cols-[220px_1fr]` (label + contenido)
- CTA buttons: `data-cta="<posición>"` para tracking Plausible

## Breakpoints de validación (CP-5)

| Nombre  | px   | Equivalente Tailwind |
|---------|------|----------------------|
| Mobile  | 360  | (base)               |
| Tablet  | 768  | `md:`                |
| Desktop | 1280 | `xl:`                |

## Accesibilidad

- Imágenes: `alt=""` para decorativas, texto descriptivo para informativas
- Botones/links: texto visible o `aria-label`
- Color: nunca transmitir info solo por color
- Focus: no quitar outline sin reemplazarlo
- Contraste: mínimo 4.5:1 AA

## Plausible Analytics

Eventos de tracking manual:
- `cta_click` → disparado por cualquier elemento con `data-cta="<position>"`
- El script de Plausible está en `Layout.astro` (`data-domain="auditadigital.com"`)

## Env vars

```
PUBLIC_STRIPE_LINK   # URL de Stripe checkout (o '#precio' por defecto)
PUBLIC_SLOTS         # Slots disponibles mostrados en Hero y Pricing (default: 14)
```

Solo en `.env` (no commitear). Usar `import.meta.env.PUBLIC_*` en componentes.
