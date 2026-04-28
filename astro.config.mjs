import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://university.github.io',
  base: '/university', // Matching current basePath
  output: 'static',
  i18n: {
    defaultLocale: 'bg',
    locales: ['bg', 'en'],
    routing: {
        prefixDefaultLocale: false
    }
  }
});
