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
        typeof variants === "object"
      );
    },
  },
});
</script>

<template>
  <li>
    <span>{{ product.title }}</span>
  </li>
</template>
