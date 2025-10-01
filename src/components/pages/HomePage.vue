<template>
  <div class="container-fluid mt-5 py-0 px-0">
    <div class="jumbotron d-flex align-items-center">
      <div class="card-jumbo">
        <h1>Ready to decluttter you closet ?</h1>
        <div class="d-grid">
          <button class="btn-shop btn btn-success" type="button">
            Shop Now
          </button>
        </div>
      </div>
    </div>

    <div class="px-2 mt-5 mb-5">
      <div class="popular-items">
        <h1><span>ALL </span> ITEMS</h1>
        <hr style="border: 1px solid black; margin-bottom: rem" />
        <div>
          <card-product
            :products="productList"
            v-if="productStatus"
          ></card-product>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardProduct from "../card/CardProduct.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const productStatus = ref(false);
const productList = ref();

onMounted(async () => {
  try {
    await store.dispatch("product/getProductData");
    productStatus.value = true;
    productList.value = store.state.product.products;
    console.log(productList.value, "<<< product list value");
  } catch (error) {
    console.log(error);
  }
});
</script>
