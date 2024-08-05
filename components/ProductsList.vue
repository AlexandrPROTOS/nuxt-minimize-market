<script setup lang="ts">
const catalog = useCatalogStore();
</script>

<template>
  <Transition
    name="is-loading"
    mode="out-in"
    :duration="{ enter: 500, leave: 800 }"
  >
    <ul v-if="catalog.isProductsLoading" class="products">
      <SkeletonProduct v-for="n in 6" :key="n" />
    </ul>
    <ul v-else class="products">
      <ProductItem
        v-for="product in catalog.products"
        :key="product.id"
        class="products__item"
        :product="product"
      />
    </ul>
  </Transition>
</template>

<style scoped lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 30px 60px 60px;
  padding: 0;
  gap: 25px;
}

@media (width <= 1000px) {
  .products {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media (width <= 768px) {
  .products {
    max-width: 250px;
    gap: 15px;
  }
}

.is-loading-enter-active,
.is-loading-leave-active {
  transition: opacity 500ms ease;
}

.is-loading-enter-from,
.is-loading-leave-to {
  opacity: 0;
}
</style>
