<script setup lang="ts">
import { type Product, fetchProduct } from "~/api/catalog";
const route = useRoute();

const product = ref<Product>({
  category: "",
  created_at: "",
  id: "",
  images: [],
  price: 0,
  slug: "",
  title: "",
  updated_at: "",
  variants: [],
});
const productImg = ref("");

const productId: Product["id"] = route.params.id as string;

const getProduct = async (productId: Product["id"]): Promise<void> => {
  const resultProduct = await fetchProduct(productId);
  product.value = resultProduct;
  productImg.value = product.value.images[0];
};

getProduct(productId);
</script>

<template>
  <div class="product">
    <section class="product__imgs">
      <img :src="productImg" :alt="product.title" class="product__big-img" />
      <ul v-if="product.images.length > 1" class="product__imgs-list">
        <li
          v-for="image in product.images"
          :key="image"
          class="product__imgs-item"
        >
          <img :src="image" :alt="product.slug" class="product__mini-img" />
        </li>
      </ul>
    </section>
    <section class="product__information">
      <p>{{ product.title }}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
        delectus blanditiis corporis quaerat asperiores illum atque ab
        laudantium. Ea velit vero repellat ab rem eligendi doloremque doloribus
        eveniet nisi atque.
      </p>
      <select id="" name="">
        <option v-for="variant in product.variants" :key="variant" value="">
          {{ variant }}
        </option>
      </select>
      <p>{{ product.price }}</p>
      <button>Добавить в корзину</button>
    </section>
  </div>
</template>

<style scoped lang="scss">
.product {
  display: flex;
  margin-top: 24px;
  gap: 50px;

  &__big-img {
    display: block;
    width: 300px;
    height: 345px;
    border-radius: 40px;
  }

  &__imgs-list {
    display: inline-flex;
    list-style: none;
    margin-top: 20px;
    padding: 0;
    gap: 10px;
  }

  &__mini-img {
    width: 100px;
    height: 115px;
    border-radius: 10px;
  }

  &__big-img,
  &__mini-img {
    background-color: white;
  }

  &__information {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
