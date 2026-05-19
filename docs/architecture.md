# docs/architecture.md — Decisiones de Arquitectura Astro

## Output Mode

`output: 'hybrid'` con `@astrojs/vercel/serverless`. La mayoría de páginas son estáticas (SSG por defecto). Solo las rutas bajo `src/pages/api/` son serverless (contact form endpoint).

Cambiar a `export const prerender = false` en una página la convierte a SSR. No hacerlo sin justificación — el objetivo es estático por defecto.

## Islands (client:*)

**Política:** cero `client:*` salvo interactividad real demostrable.

Las secciones FAQ, Testimonials, Pricing, etc. son estáticas — sin hydration. Si en algún momento se agrega un componente interactivo (acordeón con JS, slider), usar `client:visible` (no `client:load`) para respetar performance.

## Layouts

Un solo layout: `src/layouts/Layout.astro`. Carga:
- Fuentes: Space Grotesk, Geist, JetBrains Mono (Google Fonts)
- Analytics: Plausible (`data-domain="auditadigital.com"`)
- Meta base, Open Graph, Twitter card

## Páginas

| Ruta                    | Tipo       | Notas                        |
|-------------------------|------------|------------------------------|
| `/`                     | SSG        | Landing principal             |
| `/contact`              | SSG        | Formulario de contacto        |
| `/aviso-legal`          | SSG        | Texto legal                   |
| `/privacidad`           | SSG        | Política de privacidad        |
| `/api/contact`          | Serverless | Endpoint resend email         |

## Datos / Config

Toda la data de contenido vive en `src/config/site.ts` (precios, testimonios, FAQs, pillars, etc.). **Prohibido** JSON suelto bajo `src/`. Sin content collections por ahora (no hay contenido dinámico/markdown).

## Estilos

- Tailwind utility-first con `applyBaseStyles: false`
- Tokens: `tailwind.config.js` + `src/styles/tokens.css` (variables CSS)
- Global: `src/styles/global.css` (utility classes como `.strike-line`, `.hero-grid-bg`)
- Sin CSS modules. Sin `<style>` global en componentes (solo scoped o Tailwind).

## Sitemap

`@astrojs/sitemap` genera `sitemap-index.xml` en build. `site: 'https://auditadigital.com'` en `astro.config.mjs`.

## Imágenes

Imágenes estáticas en `public/`. Para imágenes optimizables (JPG/PNG en `src/`), usar `<Image />` de `astro:assets`. Actualmente las imágenes están en raíz del repo / `public/` — moverlas a `public/` es suficiente para este proyecto.
