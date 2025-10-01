<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div
      style="background-color: #ffffff; width: 50%; height: max-content"
      class="p-5 pt-4 m-auto login-form mt-5"
    >
      <div class="text-center">
        <h2 class="mt-4">Log in to Vintage</h2>
        <p>Enter your details below</p>
      </div>

      <form @submit.prevent="login">
        <div class="my-4">
          <base-input
            type="email"
            identity="email"
            placeholder="Your email adress"
            label="Email"
            v-model="loginData.email"
          ></base-input>
        </div>

        <div class="my-4">
          <base-input
            type="password"
            identity="password"
            placeholder="Your password"
            label="Password"
            v-model="loginData.password"
          ></base-input>
        </div>

        <base-button class="btn-success login w-100 my-3">Login</base-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const store = useStore();
const router = useRouter();

const loginData = reactive({
  email: "",
  password: "",
  isLogin: true,
});

const login = async () => {
  await store.dispatch("auth/getLoginData", loginData);
  router.push("/");
};
</script>
