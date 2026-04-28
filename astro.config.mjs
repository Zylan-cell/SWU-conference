import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zylan-cell.github.io',
  base: '/SWU-conference',
  output: 'static',
  i18n: {
    defaultLocale: 'bg',
    locales: ['bg', 'en'],
    routing: {
        prefixDefaultLocale: false
    }
  }
});
