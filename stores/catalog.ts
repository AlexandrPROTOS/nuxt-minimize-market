import { defineStore } from "pinia";
import {
  type Product,
  type Category,
  fetchProducts,
  fetchCategories,
} from "~/api/catalog";

type UseCatalogStore = {
  products: Ref<Product[]>;
  categories: Ref<Category[]>;
  getCatalog: () => Promise<void>;
};

export const useCatalogStore = defineStore("catalog", (): UseCatalogStore => {
  const products = ref<Product[]>([]);
  const categories = ref<Category[]>([]);

  const getCategories = async (): Promise<void> => {
    const resultCategories = await fetchCategories();
    categories.value.push(
      { created_at: "", id: "all", slug: "", title: "All", updated_at: "" },
      ...resultCategories.results
    );
  };

  const getProducts = async (): Promise<void> => {
    const resultProducts = await fetchProducts();
    products.value.push(...resultProducts.results);
  };

  const getCatalog = async (): Promise<void> => {
    getCategories();
    getProducts();
  };

  return {
    products,
    categories,
    getCatalog,
  };
});
