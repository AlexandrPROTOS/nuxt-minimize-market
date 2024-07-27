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
      </li>
    </ul>
    <p>{{ cart.cartSum }}</p>
  </div>
</template>
