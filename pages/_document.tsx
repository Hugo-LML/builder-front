import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <body className={'overflow-x-hidden bg-white text-black antialiased'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
