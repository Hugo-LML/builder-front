import AppSeo from '@/components/app/AppSeo';
import '@/sass/styles.scss';
import { store } from '@/store';
import { languageAlternates, pageUrl } from '@/utils';
import { DefaultSeoProps } from 'next-seo';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Provider } from 'react-redux';

const SITE_NAME = 'Next template';

type AppPageProps = {
  url: string;
  languageAlternates: DefaultSeoProps['languageAlternates'];
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps, router }: AppProps<AppPageProps>) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
      </Head>
      <AppSeo
        languageAlternates={pageProps.languageAlternates}
        pageUrl={pageProps.url}
        locale={router.locale as string}
        siteName={SITE_NAME}
      />
      <Provider store={store}>
        <main className={`${inter.className}`}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { asPath } = appContext.ctx;
  const { locale, locales } = appContext.router;

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    pageProps: {
      pageUrl: pageUrl(locale as string, asPath),
      languageAlternates: languageAlternates(locales ?? [], asPath),
    },
  };
};
