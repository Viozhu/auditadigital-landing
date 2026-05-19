# docs/verification.md — Cómo Verificar

## 1. Build y TypeScript

```bash
./init.sh
# O por pasos:
pnpm install --frozen-lockfile
pnpm exec astro check
pnpm build
```

Exit 0 = verde. Cualquier error de TypeScript falla en `astro check`.

## 2. Dev server para revisión visual

```bash
pnpm dev
# → http://localhost:4321
```

## 3. Responsive (breakpoints obligatorios)

En Chrome DevTools (F12 → Toggle device toolbar):
- 360px — mobile
- 768px — tablet
- 1280px — desktop

Verificar: sin scroll horizontal, tipografía legible, CTAs con touch target >= 44px.

## 4. Lighthouse (performance, SEO, a11y)

```bash
pnpm build && pnpm preview
# → http://localhost:4321
```

Abrir Chrome DevTools → Lighthouse → Mobile → Analizar. Objetivos:
- Performance >= 90
- Best Practices >= 90
- SEO >= 90
- Accessibility >= 90 (goal, no bloqueante si hay issues menores)

## 5. Accesibilidad (axe DevTools)

Instalar extensión [axe DevTools](https://www.deque.com/axe/devtools/) en Chrome.
Con `pnpm dev` activo: Analyze → 0 violations críticas (Critical/Serious).

## 6. OpenGraph / Twitter card

```bash
# Verificar que las meta tags están en el HTML generado:
grep -i "og:title\|twitter:card" dist/index.html
```

## 7. Sitemap

```bash
ls dist/sitemap*.xml
# Debe existir sitemap-index.xml y sitemap-0.xml
```

## 8. Islands check

```bash
grep -r "client:" src/
# Solo debe aparecer si hay interactividad real demostrable
```
