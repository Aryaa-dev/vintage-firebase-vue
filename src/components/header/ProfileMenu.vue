<template>
  <div
    class="header__signup col-8 col-sm-4 fw-semibold d-flex justify-content-evenly align-items-center text-decoration-none"
    style="text-align: right"
  >
    <!-- <i class="fa-solid fa-user" style="color: #4c4ddc"></i> -->
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <img
            :src="userData.imageLink"
            alt="Profile"
            width="36"
            height="36"
            class="rounded-circle"
            style="object-fit: cover; margin-right: 0.5rem"
          />
        </a>

        <ul class="dropdown-menu">
          <router-link to="/user/personal-info" class="dropdown-item"
            >My Profile</router-link
          >

          <!-- <router-link to="/user/favorite-recipes" class="dropdown-item"
            >Favorited Recipes</router-link
          > -->

          <router-link to="/user/add-product" class="dropdown-item"
            >Add Product</router-link
          >

          <li><hr class="dropdown-divider" /></li>
          <li class="dropdown-item" @click="logout">Logout</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const router = useRouter();

const userData = computed(() => {
  return store.state.auth.userLogin;
});

const logout = () => {
  store.commit("auth/setUserLogout");
  router.push("/");
};
</script>
