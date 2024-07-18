import { defineStore } from "pinia";
import {
  type Product,
  type Category,
  getProducts,
  getCategories,
} from "~/api/catalog";

type UseCatalogStore = {
  products: Ref<Product[]>;
  categories: Ref<Category[]>;
  fetchCatalog: () => Promise<void>;
};

export const useCatalogStore = defineStore("catalog", (): UseCatalogStore => {
  const products = ref<Product[]>([]);
  const categories = ref<Category[]>([]);

  const fetchCatalog = async (): Promise<void> => {
    const resultProducts = await getProducts();
    const resultCategories = await getCategories();
    products.value.push(...resultProducts.results);
    categories.value.push(...resultCategories.results);
  };

  return {
    products,
    categories,
    fetchCatalog,
  };
});
