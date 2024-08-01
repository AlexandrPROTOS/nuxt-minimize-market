const BASE_URL = "https://api.apisful.com/v1/collections";

const CATEGORIES_URL = "/categories";
const PRODUCTS_URL = "/products";
const ORDERS_URL = "/orders/";

export type OrderRequest = {
  customer_name: string;
  costumer_phone: string;
  customer_email: string;
  products: Product["title"][];
  comment?: string;
};

export type Product = {
  category: string;
  created_at: string;
  id: string;
  images: string[];
  price: number;
  slug: string;
  title: string;
  updated_at: string;
  variants?: string[];
};

export type ExpandedVariant = {
  color: string;
  variant_image: string[];
};

export type DetailedProduct = Product & {
  variants?: ExpandedVariant[];
};

export type Category = {
  created_at: string;
  id: string;
  slug: string;
  title: string;
  updated_at: string;
};

type FetchProductsResponse = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Product[];
};

type FetchCategoriesResponse = {
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
        category: { icontains: categoryId },
      },
    };
  }
  const response: Promise<FetchProductsResponse> = $fetch(
    `${BASE_URL}${PRODUCTS_URL}`,
    options
  );
  return response;
};

export const fetchCategories = async (): Promise<FetchCategoriesResponse> => {
  const config = useRuntimeConfig();
  const response: Promise<FetchCategoriesResponse> = $fetch(
    `${BASE_URL}${CATEGORIES_URL}`,
    {
      headers: { "X-Api-Key": config.public.apiKey },
    }
  );
  return response;
};

export const fetchProduct = async (
  productId: Product["id"]
): Promise<DetailedProduct> => {
  const config = useRuntimeConfig();
  const response: Promise<DetailedProduct> = $fetch(
    `${BASE_URL}${PRODUCTS_URL}/${productId}?expand=variants`,
    {
      headers: { "X-Api-Key": config.public.apiKey },
    }
  );
  return response;
};

export const orderRequest = async (order: OrderRequest): Promise<string> => {
  const config = useRuntimeConfig();
  const response: Promise<string> = $fetch(`${BASE_URL}${ORDERS_URL}`, {
    method: "post",
    headers: {
      "X-Api-Key": config.public.apiKey,
    },
    body: order,
  });
  return response;
};
