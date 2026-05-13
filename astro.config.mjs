import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://auditadigital.com',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
