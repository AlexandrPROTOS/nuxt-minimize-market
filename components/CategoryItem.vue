<script setup lang="ts">
import { type Category } from "~/api/catalog";
const catalog = useCatalogStore();

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
  <li class="category-item">
    <button
      class="category-item__btn"
      :class="{
        'category-item__btn--active':
          catalog.activeFilterCategory === category.id,
      }"
      :disabled="catalog.activeFilterCategory === category.id"
      @click="catalog.selectCategory(category.id)"
    >
      {{ category.title }}
    </button>
  </li>
</template>

<style scoped lang="scss">
.category-item {
  &__btn {
    font-size: 22px;
    text-decoration: underline dotted gray;
    color: gray;
    background: none;
    border: none;

    &--active {
      text-decoration: unset;
      color: black;
    }

    &:not(.category-item__btn--active) {
      &:hover {
        color: rgb(73 73 73);
        cursor: pointer;
        transition: ease 50ms;
      }
    }
  }
}
</style>
