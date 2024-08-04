<script setup lang="ts">
const catalog = useCatalogStore();
</script>

<template>
  <div class="categories">
    <p class="categories__name">Категории:</p>
    <Transition name="is-loading" mode="out-in">
      <ul v-if="catalog.isCategoriesLoading" class="categories__list">
        <SkeletonItem v-for="n in 4" :key="n" />
      </ul>
      <ul v-else class="categories__list">
        <CategoryItem
          v-for="category in catalog.categories"
          :key="category.id"
          :category="category"
          class="categories__item"
        />
      </ul>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.categories {
  display: flex;
  padding: 10px 20px;
  gap: 30px;
  background-color: rgb(255 255 255 / 0.6);
  border-radius: 30px;

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
  }
}

.is-loading-enter-active,
.is-loading-leave-active {
  transition: opacity 0.7s;
}

.is-loading-enter-from,
.is-loading-leave-to {
  opacity: 0;
}
</style>
