<script setup lang="ts">
const catalog = useCatalogStore();
</script>

<template>
  <Transition name="is-loading" mode="out-in">
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

.is-loading-enter-active,
.is-loading-leave-active {
  transition: opacity 0.7s;
}

.is-loading-enter-from,
.is-loading-leave-to {
  opacity: 0;
}
</style>
