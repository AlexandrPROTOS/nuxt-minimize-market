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
