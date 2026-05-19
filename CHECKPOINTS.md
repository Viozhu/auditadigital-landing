# CHECKPOINTS.md — Criterios de "Estado Final Correcto"

Una feature solo es `done` cuando pasa TODOS los checkpoints aplicables.

---

## CP-1 · Build

- [ ] `./init.sh` termina con exit code 0
- [ ] `pnpm exec astro check` sin errores de TypeScript
- [ ] `pnpm build` produce `dist/` sin warnings críticos

---

## CP-2 · Accesibilidad

- [ ] Todos los `<img>` tienen atributo `alt` descriptivo (no vacío salvo decorativas)
- [ ] Navegación por teclado funciona (Tab, Enter, Escape donde aplica)
- [ ] Contraste de texto >= 4.5:1 (AA) — verificar con DevTools o axe
- [ ] Landmarks ARIA correctos: `<nav>`, `<main>`, `<footer>`, `<section aria-label>`
- [ ] Sin `tabindex` > 0

---

## CP-3 · Performance (Lighthouse mobile)

- [ ] Performance >= 90
- [ ] Best Practices >= 90
- [ ] SEO >= 90
- [ ] Sin `client:*` innecesarios (islands solo con interactividad real)
- [ ] Imágenes vía `<Image />` de `astro:assets` o en `public/` con formato optimizado

---

## CP-4 · SEO

- [ ] `<title>` único y descriptivo en cada página
- [ ] `<meta name="description">` presente (150–160 chars)
- [ ] OpenGraph tags: `og:title`, `og:description`, `og:image`, `og:url`
- [ ] Twitter card: `twitter:card`, `twitter:title`, `twitter:description`
- [ ] `sitemap.xml` se regenera correctamente con `pnpm build`
- [ ] URLs canónicas correctas

---

## CP-5 · Responsive

Validar en mínimo tres breakpoints:

| Breakpoint | px    |
|------------|-------|
| Mobile     | 360   |
| Tablet     | 768   |
| Desktop    | 1280  |

- [ ] Sin overflow horizontal en ningún breakpoint
- [ ] Tipografía legible (mín. 14px en mobile)
- [ ] CTAs accesibles con dedo (mín. 44×44px touch target)
- [ ] MobileCTA visible solo en mobile, oculta en desktop

---

## CP-6 · Convenciones del proyecto

- [ ] Componentes en PascalCase bajo `src/components/`
- [ ] Estilos: solo tokens de `tailwind.config.js` (sin valores arbitrarios salvo `clamp()` en display)
- [ ] Variables de entorno del cliente con prefijo `PUBLIC_`
- [ ] Sin JSON suelto bajo `src/` (datos en `src/config/site.ts`)
- [ ] Sin imports de rutas absolutas fuera de `src/`
