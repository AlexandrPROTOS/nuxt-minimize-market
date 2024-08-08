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
      :disabled="
        catalog.activeFilterCategory === category.id ||
        catalog.isProductsLoading
      "
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
    color: rgb(0 0 0);
    background: none;
    border: none;
    border-radius: 5px;

    &--active {
      color: white;
      background-color: black;
      transition: ease 0.4s;
    }

    &:not(.category-item__btn--active) {
      &:hover {
        color: white;
        cursor: pointer;
        background-color: rgba(0 79 250 / 0.5);
        transition: ease 0.4s;
      }
    }
  }
}

@media (width <= 1000px) {
  .category-item {
    &__btn {
      font-size: 18px;

      &:not(.category-item__btn--active) {
        &:hover {
          color: black;
          background: none;
          transition: none;
        }
      }
    }
  }
}

@media (width <= 500px) {
  .category-item {
    width: calc(50% - 10px);
    text-align: center;
    background-color: rgb(255 255 255);
    border-radius: 5px;

    &__btn {
      width: 100%;
    }
  }
}
</style>
