<template>
  <div class="col-lg-3 mb-4">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="d-flex align-items-center">
          <img
            :src="userData.imageLink"
            alt="Profile"
            width="40"
            height="40"
            class="rounded-circle"
            style="object-fit: cover"
          />
          <div class="ps-3">
            <p class="my-0 fs-6 text-secondary">{{userData.fullname}}</p>
          </div>
        </div>
      </li>
      <li class="list-group-item user-menu" @click="menuClicked('personal-info')">
        <i class="fa-solid fa-user pe-2"></i>Personal Info
      </li>

      <li class="list-group-item user-menu" @click="menuClicked('add-product')">
        <i class="fa-solid fa-plus pe-2"></i>Add Product
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu:hover {
  cursor: pointer;
}

/* .active-color {
  color: #4c4ddc;
} */

.inactive-color {
  color: #404040;
}
</style>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const emit = defineEmits(['changeComponent'])

const store = useStore()

const menuClicked = option => {
    emit("changeComponent", option)
}

const userData = computed(() => {
    return store.state.auth.userLogin
})
</script>
