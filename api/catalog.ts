const BASE_URL = "https://api.apisful.com/v1/collections";

export const PRODUCTS = "/products";
export const CATEGORIES = "/categories";

export type Product = {
  category: string;
  created_at: string;
  id: string;
  images: string[];
  price: number;
  slug: string;
  title: string;
  updated_at: string;
  variants: string[];
};

export type Category = {
  created_at: string;
  id: string;
  slug: string;
  title: string;
  updated_at: string;
};

export type FetchProductsResponse = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Product[];
};

export type FetchCategoriesResponse = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Category[];
};

export const fetchProducts = async (
  categoryId?: Category["id"]
): Promise<FetchProductsResponse> => {
  const config = useRuntimeConfig();
  const options = {
    headers: {
      "X-Api-Key": config.public.apiKey,
    },
    params: {},
  };
  if (categoryId) {
    options.params = {
      filter: {
        category: { icontains: `${categoryId}` },
      },
    };
  }
  const response: Promise<FetchProductsResponse> = $fetch(
    `${BASE_URL}${PRODUCTS}`,
    options
  );
  const result = await response;
  return result;
};

export const fetchCategories = async (): Promise<FetchCategoriesResponse> => {
  const config = useRuntimeConfig();
  const options = {
    headers: {
      "X-Api-Key": config.public.apiKey,
    },
  };
  const response: Promise<FetchCategoriesResponse> = $fetch(
    `${BASE_URL}${CATEGORIES}`,
    options
  );
  const result = await response;
  return result;
};
