<template>
  <div class="row">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
      v-for="product in products"
    >
      
      <div class="card" style="width: 23rem; height: 37rem; position: relative">
        <!-- <img
          :src="product.imageLink"
          class="card-img-top"
          alt=""
          style="width: 100%; height: 20rem; object-fit: cover"
        /> -->
        <div class="card-body">
          <h5
            class="card-title"
            style="color: rgb(64, 160, 64); font-weight: 700; font-size: 1.5rem"
          >
            {{ product.price }}
          </h5>
          <p
            class="card-text"
            style="
              text-overflow: ellipsis;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            "
          >
            {{ product.description }}
          </p>
          <div class="d-flex justify-content-between mt-5">
            <p>Size : {{ product.size }}</p>
            <i class="fa-regular fa-heart mt-1 mx-2"></i>
          </div>

          <div
            class="d-flex justify-content-between mt-3 pt-3 border-top"
            style="
              position: absolute;
              bottom: 0;
              right: 0;
              left: 0;
              padding: 0rem 1rem 0.8rem 1rem;
            "
          >
            <button
              class="btn delete-btn btn-outline-danger px-3 py-2 rounded-pill"
              @click="deleteProduct(product.id)"
            >
              Delete
            </button>
            <button
              class="btn btn-outline-success px-3 py-2 rounded-pill"
              @click="editProduct(product.id)"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

defineProps({
  products: Array,
});

const deleteProduct = async (id) => {
  await store.dispatch("product/deleteProduct", id);
};

const editProduct = async (id) => {
  router.push("/product/edit/" + id);
};

const products = computed(() => {
  const allProduct = store.state.product.products;
  return allProduct;
});
</script>
