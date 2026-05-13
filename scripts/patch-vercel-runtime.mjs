import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const configPath = '.vercel/output/functions/_render.func/.vc-config.json';

if (existsSync(configPath)) {
  const config = JSON.parse(readFileSync(configPath, 'utf-8'));
  config.runtime = 'nodejs20.x';
  writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log('[patch] .vc-config.json runtime → nodejs20.x');
} else {
  console.warn('[patch] .vc-config.json not found — skipping');
}
