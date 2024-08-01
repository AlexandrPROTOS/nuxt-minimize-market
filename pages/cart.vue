<script setup lang="ts">
const cart = useCartStore();
</script>

<template>
  <div class="cart">
    <ul class="cart__list">
      <CartElement
        v-for="item in cart.cart"
        :key="item.id + item.variant?.color"
        :item="item"
      />
    </ul>
    <section class="cart__deal-section">
      <div class="cart__deal-titles">
        <p class="cart__order">Оформление заказа</p>
        <p class="cart__result-price">
          Итого: <span>{{ cart.cartSum }}$</span>
        </p>
      </div>
      <PlacingAnOrder v-if="cart.cart.length" class="cart__form" />
      <div v-else>
        Корзина пуста. Для оформления заказа
        <NuxtLink to="/">добавьте товар</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding: 25px;
  background-color: rgb(201 184 187);
  border-radius: 15px;

  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 15px;
  }

  &__deal-titles {
    display: flex;
    justify-content: space-between;
  }

  &__order,
  &__result-price {
    font-size: 22px;
    font-weight: 800;
  }
}
</style>
