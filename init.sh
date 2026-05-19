#!/usr/bin/env bash
# init.sh — Verificación del harness. Exit 0 = verde.
set -euo pipefail

echo "▶ [1/3] pnpm install"
pnpm install --frozen-lockfile

echo "▶ [2/3] astro check (TypeScript)"
pnpm exec astro check

echo "▶ [3/3] astro build"
pnpm build

echo "✅ init.sh OK"
