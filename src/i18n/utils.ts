import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useRelativePath(url: URL) {
    const lang = getLangFromUrl(url);
    return function rel(path: string) {
        const base = import.meta.env.BASE_URL.replace(/\/$/, '');
        const prefix = lang === defaultLang ? '' : `/${lang}`;
        return `${base}${prefix}${path.startsWith('/') ? path : `/${path}`}`;
    }
}
