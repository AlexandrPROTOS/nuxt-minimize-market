<script setup lang="ts">
import type { CartItem } from "~/stores/cart";

const cart = useCartStore();
const changeCount = (item: CartItem, newCount: CartItem["count"]): void => {
  item.count = newCount;
  if (newCount < 1) {
    cart.deleteItemFromCart(item);
  }
};
</script>

<template>
  <div>
    <ul>
      <li
        v-for="item in cart.cart"
        :key="item.id + item.variant?.color"
        style="display: flex; gap: 10px"
      >
        <img :src="item.image" width="40" height="40" />
        <p>
          {{ item.title }}
          <span v-if="item.variant"> ({{ item.variant?.color }}) </span>
        </p>
        <p>{{ item.count }}</p>
        <p>{{ item.price }}р</p>
        <button @click="changeCount(item, item.count - 1)">-</button>
        <button @click="changeCount(item, item.count + 1)">+</button>
        <button @click="cart.deleteItemFromCart(item)">удалить</button>
        <p>{{ item.price * item.count }}</p>
      </li>
    </ul>
    <p>{{ cart.cartSum }}</p>
    <form action="">
      <input type="text" placeholder="Как вас зовут?" />
      <input
        type="text"
        placeholder="Как нам с вами связаться(номер телефона)?"
      />
      <button type="button">Заказать</button>
    </form>
  </div>
</template>
