<script setup lang="ts">
const catalog = useCatalogStore();
</script>

<template>
  <div v-if="catalog.categories.length > 0" class="categories">
    <p class="categories__name">Категории:</p>
    <ul class="categories__list">
      <CategoryItem
        v-for="category in catalog.categories"
        :key="category.id"
        :category="category"
        class="categories__item"
        :class="{
          'categories__item--active':
            catalog.activeFilterCategory === category.id,
        }"
        @click="catalog.selectCategory(category.id)"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.categories {
  display: inline-flex;
  margin-top: 24px;
  gap: 30px;

  &__name {
    margin: 0;
    font-size: 22px;
  }

  &__list {
    display: inline-flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px;
  }

  &__item {
    margin: 0;
    font-size: 22px;
    text-decoration: underline dotted gray;
    color: gray;

    &:not(.categories__item--active) {
      &:hover {
        color: rgb(73 73 73);
        cursor: pointer;
        transition: ease 50ms;
      }
    }

    &--active {
      text-decoration: unset;
      color: black;
    }
  }
}
</style>
