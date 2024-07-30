import { defineStore } from "pinia";
import type { ExpandedVariant, DetailedProduct } from "~/api/catalog";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  count: number;
  variant?: ExpandedVariant;
};

const LS_CART_KEY = "cart";

export const useCartStore = defineStore("cart", () => {
  const cart = ref<CartItem[]>([]);
  const cartSum = computed(() => {
    let totalSum = 0;
    cart.value.forEach((item) => {
      totalSum += item.price * item.count;
    });
    return totalSum;
  });

  const setCartFromLS = (): void => {
    const cartInLocalStorage = localStorage.getItem(LS_CART_KEY);
    if (!cartInLocalStorage) {
      return;
    }
    cart.value = JSON.parse(cartInLocalStorage);
  };

  const addCartToLS = (value: CartItem[]): void => {
    localStorage.setItem(LS_CART_KEY, JSON.stringify(value));
  };

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

  const deleteItemFromCart = (item: CartItem): void => {
    const itemIndex = cart.value.findIndex((product) => product === item);
    cart.value.splice(itemIndex, 1);
  };

  return {
    cart,
    cartSum,
    setCartFromLS,
    addCartToLS,
    addItemInCart,
    deleteItemFromCart,
  };
});
