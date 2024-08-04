import { defineStore } from "pinia";
import {
  type Product,
  type Category,
  fetchProducts,
  fetchCategories,
} from "~/api/catalog";

type UseCatalogStore = {
  isCategoriesLoading: Ref<boolean>;
  isProductsLoading: Ref<boolean>;
  products: Ref<Product[]>;
  categories: Ref<Category[]>;
  activeFilterCategory: Ref<Category["id"]>;
  getCatalog: () => Promise<void>;
  selectCategory: (categoryId: Category["id"]) => void;
};

export const useCatalogStore = defineStore("catalog", (): UseCatalogStore => {
  const isCategoriesLoading = ref<boolean>(false);
  const isProductsLoading = ref<boolean>(false);
  const products = ref<Product[]>([]);
  const categories = ref<Category[]>([]);
  const activeFilterCategory = ref<Category["id"]>("all");

  const getCategories = async (): Promise<void> => {
    isCategoriesLoading.value = true;
    const resultCategories = await fetchCategories();
    categories.value.push(
      { created_at: "", id: "all", slug: "", title: "All", updated_at: "" },
      ...resultCategories.results
    );
    setTimeout(() => {
      isCategoriesLoading.value = false;
    }, 500);
  };

  const getProducts = async (categoryId?: Category["id"]): Promise<void> => {
    isProductsLoading.value = true;
    products.value = [];
    const resultProducts = await fetchProducts(categoryId);
    products.value.push(...resultProducts.results);
    setTimeout(() => {
      isProductsLoading.value = false;
    }, 500);
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
    isCategoriesLoading,
    isProductsLoading,
    products,
    categories,
    activeFilterCategory,
    getCatalog,
    selectCategory,
  };
});
