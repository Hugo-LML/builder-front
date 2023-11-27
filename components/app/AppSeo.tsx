import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import { FC } from 'react';

type AppSeoProps = {
  siteName: string;
  pageUrl: string;
  locale: string;
  languageAlternates: DefaultSeoProps['languageAlternates'];
};

const AppSeo: FC<AppSeoProps> = ({ siteName, pageUrl, locale, languageAlternates }) => {
  return (
    <DefaultSeo
      defaultTitle={siteName}
      titleTemplate={`%s - ${siteName}`}
      openGraph={{
        locale,
        site_name: siteName,
        url: pageUrl,
        type: 'website',
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
      canonical={pageUrl}
      languageAlternates={languageAlternates}
    />
  );
};

export default AppSeo;
