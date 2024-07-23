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
  activeFilterCategory: Ref<Category["id"]>;
  getCatalog: () => Promise<void>;
  selectCategory: (categoryId: Category["id"]) => void;
};

export const useCatalogStore = defineStore("catalog", (): UseCatalogStore => {
  const products = ref<Product[]>([]);
  const categories = ref<Category[]>([]);
  const activeFilterCategory = ref<Category["id"]>("all");

  const getCategories = async (): Promise<void> => {
    const resultCategories = await fetchCategories();
    categories.value.push(
      { created_at: "", id: "all", slug: "", title: "All", updated_at: "" },
      ...resultCategories.results
    );
  };

  const getProducts = async (categoryId?: Category["id"]): Promise<void> => {
    products.value = [];
    const resultProducts = await fetchProducts(categoryId);
    products.value.push(...resultProducts.results);
  };

  const getCatalog = async (): Promise<void> => {
    getCategories();
    getProducts();
  };

  const selectCategory = (categoryId: Category["id"]): void => {
    activeFilterCategory.value = categoryId;
    if (activeFilterCategory.value === "all") {
      getProducts();
      return;
    }
    getProducts(activeFilterCategory.value);
  };

  return {
    products,
    categories,
    activeFilterCategory,
    getCatalog,
    selectCategory,
  };
});
