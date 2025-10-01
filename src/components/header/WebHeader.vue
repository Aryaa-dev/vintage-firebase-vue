<template>
  <header
    class="shadow-sm container-fluid bg-white py-1 border-bottom fixed-top"
  >
    <div class="container-md d-flex justify-content-between align-items-center">
      <router-link to="/" style=" text-decoration: none">
        <div class="d-flex align-items-center justify-content-center px-2 mx-5">
          <img
            src="@/assets/images/logo-vintage.jpg"
            alt="Logo"
            style="width: 50px; border-radius: 100px"
          />
          <p
            class="mb-0 mx-2"
            style="
              font-size: 1.7rem;
              font-weight: 700;
              color: rgb(64, 160, 64);
              font-family: Funnel Display, sans-serif;
             ;
            "
          >
            Vintage
          </p>
        </div>
      </router-link>
      <navigation-bar></navigation-bar>
    </div>
  </header>
</template>

<script setup>
import NavigationBar from "@/components/header/NavigationBar.vue";
</script>
