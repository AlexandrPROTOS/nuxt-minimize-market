<script setup lang="ts">
const catalog = useCatalogStore();
</script>

<template>
  <ul class="products">
    <ProductItem
      v-for="product in catalog.products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>

<style scoped lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  margin-top: 30px;
  padding: 0;
  gap: 25px;
}
</style>
