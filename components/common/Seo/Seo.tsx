import { NextSeo } from 'next-seo';
import { FC } from 'react';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

const Seo: FC<SeoProps> = ({ title, description, image }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        images: image ? [{ url: image }] : [],
      }}
    />
  );
};

export default Seo;
