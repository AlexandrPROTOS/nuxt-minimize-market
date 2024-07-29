<script setup lang="ts">
const cart = useCartStore();
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
        <p>
          {{ item.count }}
        </p>
        <p>{{ item.price }}р</p>
        <button
          @click="
            () => {
              item.count--;
              if (item.count === 0) {
                cart.deleteItemFromCart(item);
              }
            }
          "
        >
          -
        </button>
        <button @click="item.count++">+</button>
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
