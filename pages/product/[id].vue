<script setup lang="ts">
import {
  type DetailedProduct,
  type ExpandedVariant,
  fetchProduct,
} from "~/api/catalog";

const route = useRoute();
const cart = useCartStore();

const product = ref<DetailedProduct>({
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
const currentVariant = ref<ExpandedVariant | undefined>();
const productImg = ref("");
const productId: DetailedProduct["id"] = route.params.id as string;

const changeImage = (image: string): void => {
  productImg.value = image;
};

const selectVariant = (variantIdx: number): void => {
  if (product.value.variants) {
    currentVariant.value = product.value.variants[variantIdx];
    changeImage(currentVariant.value.variant_image[0]);
  }
};

const getProduct = async (productId: DetailedProduct["id"]): Promise<void> => {
  const resultProduct = await fetchProduct(productId);
  product.value = resultProduct;
  if (!product.value.variants || product.value.variants.length === 0) {
    productImg.value = product.value.images[0];
    return;
  }
  selectVariant(0);
};

getProduct(productId);
</script>

<template>
  <div class="product">
    <section class="product__imgs">
      <img :src="productImg" :alt="product.title" class="product__big-img" />
      <ul
        v-if="product.variants && product.variants.length > 0 && currentVariant"
        class="product__imgs-list"
      >
        <li
          v-for="image in currentVariant.variant_image"
          :key="image"
          class="product__imgs-item"
          @click="changeImage(image)"
        >
          <img :src="image" :alt="product.slug" class="product__mini-img" />
        </li>
      </ul>
    </section>
    <section class="product__information">
      <h2 class="product__information-title">{{ product.title }}</h2>
      <p class="product__information-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
        delectus blanditiis corporis quaerat asperiores illum atque ab
        laudantium. Ea velit vero repellat ab rem eligendi doloremque doloribus
        eveniet nisi atque.
      </p>
      <p class="product__information-price">Цена: {{ product.price }}$</p>
      <select
        v-if="product.variants && product.variants.length > 0"
        id=""
        name=""
        class="product__information-select"
        @change="
          selectVariant(Number(($event.target as HTMLSelectElement).value))
        "
      >
        <option
          v-for="(variant, idx) in product.variants"
          :key="idx"
          :value="idx"
          class="product__information-option"
        >
          {{ variant.color }}
        </option>
      </select>
      <button
        class="product__information-btn"
        @click="cart.addItemInCart(product, currentVariant)"
      >
        В корзину
      </button>
    </section>
  </div>
</template>

<style scoped lang="scss">
.product {
  display: flex;
  margin-top: 24px;
  padding: 25px;
  gap: 50px;
  background-color: rgb(201 184 187);
  border-radius: 15px;

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
    cursor: pointer;
    border-radius: 10px;
  }

  &__big-img,
  &__mini-img {
    background-color: white;
    object-fit: contain;
  }

  &__information {
    display: flex;
    flex-direction: column;
    align-content: center;

    &-title,
    &-description {
      margin: 0;
      text-align: center;
    }

    &-description {
      margin-top: 20px;
      font-size: large;
    }

    &-price {
      margin: 0;
      margin-top: 20px;
      font-size: large;
      font-weight: 600;
      text-align: center;
    }

    &-select {
      width: 300px;
      height: 30px;
      margin-top: 20px;
      font-weight: 600;
      text-align: center;
      cursor: pointer;
      background-color: aliceblue;
      border-radius: 10px;
      align-self: center;
    }

    &-btn {
      width: 300px;
      height: 50px;
      margin-top: 70px;
      font-size: large;
      cursor: pointer;
      background-color: aliceblue;
      border-radius: 15px;
      align-self: center;

      &:hover {
        background-color: rgb(78 131 244);
      }

      &:active {
        background-color: gray;
      }
    }
  }
}
</style>
