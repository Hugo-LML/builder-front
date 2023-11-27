type StrapiGraphqlParams = {
  query: string;
  variables?: {
    locale?: string;
    [key: string]: string | undefined;
  };
};

const StrapiGraphql = async <T>({ query, variables }: StrapiGraphqlParams): Promise<T> => {
  try {
    const response = await fetch(process.env.STRAPI_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return Promise.resolve<T>(data.data);
  } catch (error) {
    throw new Error(`Failed to fetch, ${error}`);
  }
};

export default StrapiGraphql;
