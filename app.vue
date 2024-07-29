<script setup lang="ts">
const catalog = useCatalogStore();
const cart = useCartStore();

catalog.getCatalog();

onMounted(() => {
  cart.setCartFromLS();

  watch(cart.cart, (value) => {
    cart.addCartToLS(value);
  });
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
