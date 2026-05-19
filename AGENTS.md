# AGENTS.md — Mapa de Divulgación Progresiva

Este archivo es el punto de entrada para cualquier agente. Lee solo lo que necesitas.

## Roles

| Agente     | Puede leer         | Puede escribir                  | NUNCA hace                          |
|------------|--------------------|---------------------------------|-------------------------------------|
| leader     | Todo               | `progress/`, `feature_list.json`| Editar `src/`                       |
| implementer| `docs/`, `src/`    | `progress/impl_<slug>.md`       | Autoaprobarse, editar `progress/review_*` |
| reviewer   | `docs/`, `CHECKPOINTS.md`, `progress/impl_*` | `progress/review_<slug>.md` | Editar código |

## Lectura bajo demanda

1. **Antes de implementar** → lee `docs/conventions.md` y `docs/architecture.md`
2. **Para criterios de done** → lee `CHECKPOINTS.md`
3. **Para verificar** → lee `docs/verification.md`
4. **Para contexto del proyecto** → lee `CLAUDE.md`

## Regla de oro

`feature_list.json` nunca puede tener más de un item en `in_progress`.

## Dónde viven las cosas

```
CHECKPOINTS.md       ← criterios de "done" por feature
feature_list.json    ← backlog (pending / in_progress / done)
init.sh              ← verificación ejecutable
progress/current.md  ← plan vivo de la sesión activa
progress/history.md  ← bitácora append-only
docs/architecture.md ← decisiones Astro: output, islands, layouts
docs/conventions.md  ← naming, Tailwind, accesibilidad, breakpoints
docs/verification.md ← cómo probar (Lighthouse, a11y, responsive)
.claude/agents/      ← instrucciones detalladas por rol (gitignored, solo local)
```

> **Nota:** `.claude/` está en `.gitignore` — los archivos de agentes no se commitean.
> Viven solo en la máquina local. Si clonas el repo en una máquina nueva, recrea
> `.claude/agents/{leader,implementer,reviewer}.md` siguiendo los roles descritos en
> este archivo y los criterios de `CHECKPOINTS.md`.
