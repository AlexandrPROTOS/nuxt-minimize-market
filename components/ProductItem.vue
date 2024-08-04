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
    <NuxtLink :to="`/product/${product.id}`" class="products-item__link">
      <img :src="product.images[0]" alt="" class="products-item__img" />
      <p class="products-item__title">{{ product.title }}</p>
      <p class="products-item__price">{{ product.price }}$</p>
    </NuxtLink>
  </li>
</template>

<style scoped lang="scss">
.products-item {
  justify-content: space-between;
  width: calc(33.33% - 25px);
  height: 360px;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(255 255 255 / 0.8);
  border: 2px solid gray;
  border-radius: 25px;
  box-shadow: 5px 5px 20px 5px rgb(255 255 255 / 0.8);

  &__link {
    text-decoration: none;
    color: black;

    &:visited {
      color: black;
    }
  }

  &__img {
    width: 100%;
    height: 60%;
    background-color: white;
    border-radius: 20px;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 7px 1px rgb(124 124 216);
    transition: ease 100ms;
  }

  &:not(:hover) {
    transition: ease-in-out 500ms;
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
