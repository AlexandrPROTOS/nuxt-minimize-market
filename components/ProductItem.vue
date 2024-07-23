<script setup lang="ts">
import type { Product } from "~/api/catalog";

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
    validator({
      category,
      created_at,
      id,
      images,
      price,
      slug,
      title,
      updated_at,
      variants,
    }: Product) {
      return (
        typeof category === "string" &&
        typeof created_at === "string" &&
        typeof id === "string" &&
        typeof images === "object" &&
        typeof price === "number" &&
        typeof slug === "string" &&
        typeof title === "string" &&
        typeof updated_at === "string" &&
        (variants === undefined || typeof variants === "object")
      );
    },
  },
});
</script>

<template>
  <li class="products-item">
    <img :src="product.images[0]" alt="" class="products-item__img" />
    <p class="products-item__title">{{ product.title }}</p>
    <p class="products-item__price">{{ product.price }}$</p>
  </li>
</template>

<style scoped lang="scss">
.products-item {
  justify-content: space-between;
  width: calc(25% - 25px);
  height: 360px;
  padding: 15px;
  background-color: aliceblue;
  border: 2px solid gray;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 7px 1px black;
    transition: ease 50ms;
  }

  &__img {
    width: 100%;
    height: 70%;
    background-color: white;
    border-radius: 20px;
  }

  &__title {
    margin-top: 20px;
    font-weight: 600;
  }

  &__price {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 800;
  }

  &__title,
  &__price {
    text-align: center;
  }
}
</style>
