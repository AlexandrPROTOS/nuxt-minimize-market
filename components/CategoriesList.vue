<script setup lang="ts">
const catalog = useCatalogStore();
</script>

<template>
  <div class="categories">
    <p class="categories-name">Категории:</p>
    <ul class="categories-list">
      <CategoryItem
        v-for="category in catalog.categories"
        :key="category.id"
        :category="category"
      />
    </ul>
  </div>
</template>
