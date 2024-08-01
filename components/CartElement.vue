<script setup lang="ts">
import type { CartItem } from "~/stores/cart.ts";
const cart = useCartStore();

defineProps({
  item: {
    type: Object as PropType<CartItem>,
    required: true,
    validator({ id, title, price, image, count, variant }: CartItem) {
      return (
        typeof id === "string" &&
        typeof title === "string" &&
        typeof price === "number" &&
        typeof image === "string" &&
        typeof count === "number" &&
        (typeof variant === "object" || variant === undefined)
      );
    },
  },
});

const changeCount = (item: CartItem, newCount: CartItem["count"]): void => {
  item.count = newCount;
  if (newCount < 1) {
    cart.deleteItemFromCart(item);
  }
};
</script>
<template>
  <li class="cart-element">
    <img class="cart-element__img" :src="item.image" />
    <p class="cart-element__title">
      {{ item.title }}
      <span v-if="item.variant"> / {{ item.variant?.color }}</span>
    </p>
    <p class="cart-element__price">{{ item.price }}$ за шт.</p>
    <div class="cart-element__count-change">
      <button @click="changeCount(item, item.count - 1)">-</button>
      <p class="cart-element__count">{{ item.count }} шт.</p>
      <button @click="changeCount(item, item.count + 1)">+</button>
    </div>
    <button
      class="cart-element__btn-delete"
      @click="cart.deleteItemFromCart(item)"
    >
      удалить
    </button>
    <p class="cart-element__result">{{ item.price * item.count }}$</p>
  </li>
</template>

<style scoped lang="scss">
.cart-element {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 20px 10px;
  border-bottom: 2px solid black;

  & button {
    cursor: pointer;
    background-color: aliceblue;
    border-radius: 5px;

    &:hover {
      background-color: rgb(78 131 244);
    }

    &:active {
      background-color: gray;
    }
  }

  &__img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    flex-shrink: 0;
    object-fit: cover;
  }

  &__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 250px;
    margin: 0;
    margin-left: 30px;
    border-right: 1px solid black;

    & span {
      display: flex;
    }
  }

  &__price {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    min-height: 60px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    border-right: 1px solid black;
  }

  &__count-change {
    display: flex;
    align-items: center;
    height: 30px;
    min-width: 130px;
    margin: auto 20px;
    padding: 0;
    gap: 10px;
  }

  &__count {
    margin-right: auto;
    margin-left: auto;
    font-weight: 600;
  }

  &__btn-delete {
    width: 100px;
    height: 30px;
    margin-right: auto;
    margin-left: 50px;
    align-self: center;
  }

  &__result {
    font-weight: 600;
    text-align: center;
    align-self: center;
  }
}
</style>
