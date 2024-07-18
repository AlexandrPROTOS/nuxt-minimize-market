<script setup lang="ts">
const catalog = useCatalogStore();
</script>

<template>
  <transition name="opacity">
    <div v-show="catalog.categories.length" class="catalog">
      <CategoriesList />
      <ProductsList />
    </div>
  </transition>
</template>

<style scoped lang="scss">
.catalog {
  transition: 0.7s ease;
}

.opacity-enter-from,
.opacity-enter-to {
  opacity: 0;
  transition: 1s ease-in-out;
}
</style>
