import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://onesimpleone.com/',
  base: '/',
  trailingSlash: 'never',
  integrations: [sitemap()],
});