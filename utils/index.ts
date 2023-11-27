import { DefaultSeoProps } from 'next-seo';
import { i18n } from '../next.config.js';

export const pageUrl = (locale: string, path?: string): string => {
  const currentLocale = i18n?.defaultLocale !== locale ? `/${locale}` : '';
  const currentPath = path === '/' && i18n?.defaultLocale !== locale ? '' : path;
  return `${process.env.NEXT_PUBLIC_SITE_URL}${currentLocale}${currentPath}`;
};

export const languageAlternates = (locales: string[], path?: string): DefaultSeoProps['languageAlternates'] => {
  return locales.map(locale => ({
    hrefLang: locale,
    href: pageUrl(locale, path),
  }));
};
