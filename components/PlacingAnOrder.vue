<script setup lang="ts">
import { type OrderRequest, orderRequest } from "~/api/catalog";

const sleep = (timeMs: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, timeMs));
};

const cart = useCartStore();

const orderName = ref("");
const orderTel = ref("");
const orderEmail = ref("");
const orderComment = ref("");

const isOrderPending = ref(false);

const placeAnOrder = async (): Promise<void> => {
  isOrderPending.value = true;

  const order: OrderRequest = {
    customer_name: orderName.value,
    costumer_phone: orderTel.value,
    customer_email: orderEmail.value,
    products: cart.cart.map((item) => item.id),
  };

  if (orderComment.value) {
    order.comment = orderComment.value;
  }

  try {
    await orderRequest(order);
    await sleep(500);
    cart.cart.length = 0;
    orderName.value = "";
    orderTel.value = "";
    orderEmail.value = "";
    orderComment.value = "";
  } finally {
    isOrderPending.value = false;
  }
};
</script>

<template>
  <form class="order" @submit.prevent="placeAnOrder">
    <input
      v-model="orderName"
      type="text"
      placeholder="Как вас зовут?"
      required
      minlength="2"
    />
    <input
      v-model="orderTel"
      type="tel"
      placeholder="Номер телефона (+7)"
      required
      minlength="11"
    />
    <input
      v-model="orderEmail"
      type="email"
      placeholder="Электронная почта"
      required
    />
    <textarea
      v-model="orderComment"
      rows="5"
      placeholder="Комментарий или пожелания:"
    />
    <button type="submit" :disabled="isOrderPending">Заказать</button>
  </form>
</template>

<style scoped lang="scss">
.order {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-right: auto;
  gap: 15px;
}
</style>
