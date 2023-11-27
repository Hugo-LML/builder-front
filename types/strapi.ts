export type StrapiAttributes<T> = {
  data: {
    attributes: T;
  };
};

export type StrapiAttributesArray<T> = {
  data: {
    attributes: T;
  }[];
};

export type StrapiSeo = {
  metaTitle: string;
  metaDescription: string;
  metaImage?: StrapiAssets;
};

export type StrapiAssets = StrapiAttributes<{
  url: string;
}>;
