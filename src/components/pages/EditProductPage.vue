<template>
  <main>
    <div class="container-md my-5 py-5">
      <product-form
        v-if="detailData && !isLoading"
        :isEdit="true"
      ></product-form>
    </div>
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

import ProductForm from "../productForm/ProductForm.vue";

const store = useStore();
const route = useRoute();

let detailData = ref();
const isLoading = ref(true);

onMounted(async () => {
  try {
    const result = await store.dispatch(
      "product/getProductDetail",
      route.params.id
    );
    detailData.value = result; // set value properly
    isLoading.value = false;
  } catch (err) {
    console.log(err);
  }
});
</script>
