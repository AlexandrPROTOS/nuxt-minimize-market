<script setup lang="ts">
import type { Category } from "~/api/catalog";

defineProps({
  category: {
    type: Object as PropType<Category>,
    required: true,
    validator({ created_at, id, slug, title, updated_at }: Category) {
      return (
        typeof created_at === "string" &&
        typeof id === "string" &&
        typeof slug === "string" &&
        typeof title === "string" &&
        typeof updated_at === "string"
      );
    },
  },
});
</script>

<template>
  <li>
    <span>{{ category.title }}</span>
  </li>
</template>
