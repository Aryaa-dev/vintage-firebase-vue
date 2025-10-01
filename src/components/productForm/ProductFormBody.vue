<template>
  <li class="list-group-item">
    <form @submit.prevent="addNewProduct">
      <!-- General Information Start -->
      <div>
        <p class="my-3 fs-5 fw-semibold">General Information</p>
        <div>
          <div class="mb-3">
            <base-input
              type="file"
              identity="recipeImage"
              label="Photo Product"
              @input="checkImage"
            ></base-input>

            <div>
              <img :src="productData.imageLink" :alt="productData.name" class="image">
            </div>
          </div>

          <div class="mb-3">
            <base-input
              type="text"
              identity="productTitle"
              placeholder="Give your product name"
              label="Product Name"
              v-model="productData.name"
            ></base-input>
          </div>

          <div class="mb-3">
            <base-input
              identity="productDescription"
              label="Product Description"
              placeholder="Give your product description"
              v-model="productData.description"
            ></base-input>
          </div>

          <div class="mb-3">
            <base-input
              identity="productPrice"
              label="Product Price"
              placeholder="Give your product price"
              v-model="productData.price"
            ></base-input>
          </div>

          <div class="mb-3">
            <base-input
              identity="productSize"
              label="Product Size"
              placeholder="Give your product size, ex: S or M or L"
              v-model="productData.size"
            ></base-input>
          </div>

        
        </div>
      </div>
      <!-- General Information End -->
      <div class="border-top py-3 d-flex my-4 justify-content-end">
        <base-button class="cancel-btn px-3 py-2 ms-1">Cancel</base-button>
        <base-button class="submit-recipe-btn px-3 py-2 ms-1"
          >Submit</base-button
        >
      </div>
    </form>
  </li>
</template>

<script setup>
import recipe from "@/recipe";
import BaseButton from "../ui/BaseButton.vue";
import BaseInput from "../ui/BaseInput.vue";
import BaseTextArea from "../ui/BaseTextArea.vue";
import BaseSelect from "../ui/BaseSelect.vue";
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const productData = reactive({
  imageLink: "",
  name: "",
  description: "",
  price: "",
  size: ""
});

const checkImage = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    productData.imageLink = reader.result;
  });
};

const store = useStore();
const router = useRouter();
const route = useRoute()

const addNewProduct = async () => {
  if (props.isEdit) {
    await store.dispatch('product/updateProduct', {
      id: route.params.id,
      newProduct: productData
    })
  } else {
    await store.dispatch('product/addNewProduct', productData)

  }
  router.push("/")
};

const props = defineProps({
  isEdit: { type: Boolean, default: false}
})

onMounted(() => {
  if(props.isEdit) {
    productData.value = store.state.product.productDetail

  }
})
</script>
