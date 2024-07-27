import { defineStore } from "pinia";
import type { ExpandedVariant, DetailedProduct } from "~/api/catalog";

type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  count: number;
  variant?: ExpandedVariant;
};

export const useCartStore = defineStore("cart", () => {
  const cart = ref<CartItem[]>([]);
  const cartSum = computed(() => {
    let totalSum = 0;
    cart.value.forEach((item) => {
      totalSum += item.price * item.count;
    });
    return totalSum;
  });

  const addItemInCart = (
    product: DetailedProduct,
    variant?: ExpandedVariant
  ): void => {
    const foundItem = cart.value.find((item) => {
      if (variant) {
        return item.id === product.id && item.variant?.color === variant.color;
      }
      return item.id === product.id;
    });

    if (foundItem) {
      foundItem.count++;
      return;
    }

    const item: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price * 1,
      image: variant ? variant.variant_image[0] : product.images[0],
      count: 1,
      variant,
    };
    cart.value.push(item);
  };

  return { cart, cartSum, addItemInCart };
});
