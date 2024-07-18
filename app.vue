<script setup lang="ts">
import { useCatalogStore } from "./stores/catalog";

const catalog = useCatalogStore();

catalog.getCatalog();
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
