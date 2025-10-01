<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff; width: 50%; height: max-content;" class="p-5 pt-4 m-auto signup-form mt-5">
      <div class="text-center">
        <h2 class="mt-4">Sign Up</h2>
        <p>Enter your details below</p>
      </div>
      <form class="mt-3" @submit.prevent="register">
        <div class="my-4">
          <base-input
            type="text"
            identity="fullname"
            placeholder="Enter your full name"
            label="Full name"
            v-model="signupData.fullname"
          ></base-input>
        </div>

        <div class="my-4">
          <base-input
            type="text"
            identity="username"
            placeholder="Enter your name"
            label="Username"
            v-model="signupData.username"
          ></base-input>
        </div>

        <div class="my-4">
          <base-input
            type="email"
            identity="email"
            placeholder="Enter your email"
            label="Email"
            v-model="signupData.email"
          ></base-input>
        </div>

        <div class="my-4">
          <base-input
            type="password"
            identity="password"
            placeholder="Enter your password"
            label="Password"
            v-model="signupData.password"
            @keyInput="passwordCheck"
          ></base-input>
          <p
            class="text-danger mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: passwordStatusDisplay }"
          >
            The password field must be at least 8 characters
          </p>
        </div>

        <div class="my-4">
          <base-input
            type="password"
            identity="confirmationPassword"
            placeholder="Enter your password"
            label="Confirmation Password"
            v-model="signupData.confirmationPassword"
            @keyInput="confirmationPasswordCheck"
          ></base-input>

          <p
            class="text-danger mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: confirmationPasswordDoesNotMatch }"
          >
            The password confirmation does not match
          </p>

          <p
            class="text-success mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: confirmationPasswordMatch }"
          >
            The password confirmation does match
          </p>
        </div>

        <div class="my-4">
          <base-input
            type="file"
            identity="recipeImage"
            label="Profile Photo"
            :isImage="true"
            @input="checkImage"
          >
            <div>
              <div class="border p-1 mt-2 rounded-circle">
                <img
                  :src="signupData.imageLink"
                  alt=""
                  class="rounded-circle"
                  width="140"
                  height="150"
                  style="object-fit: cover"
                />
              </div>
              <div class="text-center" style="transform: translateY(-24px)">
                <i
                  class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white"
                ></i>
              </div>
            </div>
          </base-input>
        </div>


        <base-button class="btn-success login w-100 my-3">Sign Up</base-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const signupData = reactive({
  fullname: "",
  username: "",
  email: "",
  password: "",
  confirmationPassword: "",
  isLogin: false,
  imageLink: "",
});

const passwordStatusDisplay = ref("none");

const passwordCheck = () => {
  if (signupData.password.length < 8) {
    passwordStatusDisplay.value = "block";
  } else {
    passwordStatusDisplay.value = "none";
  }
};

const confirmationPasswordDoesNotMatch = ref("none");
const confirmationPasswordMatch = ref("none");

const confirmationPasswordCheck = () => {
  if (signupData.confirmationPassword === "") {
    confirmationPasswordDoesNotMatch.value = "none";
    confirmationPasswordMatch.value = "none";
    return;
  }

  if (signupData.password !== signupData.confirmationPassword) {
    confirmationPasswordDoesNotMatch.value = "block";
    confirmationPasswordMatch.value = "none";
    return;
  }

  confirmationPasswordDoesNotMatch.value = "none";
  confirmationPasswordMatch.value = "block";
};

//belum ada checkImage tapi udah dipanggil
const checkImage = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    signupData.imageLink = reader.result;
  });
};

const register = async () => {
  console.log(signupData, "sigupData");
  if (
    signupData.password !== signupData.confirmationPassword ||
    signupData.password.length < 8
  ) {
    signupData.confirmationPassword = "";
    signupData.password = "";
    confirmationPasswordDoesNotMatch.value = "none";
    confirmationPasswordMatch.value = "none";
  } else {
    console.log("Kirim data:", signupData);

    await store.dispatch("auth/getRegisterData", signupData);
    router.push("/");
  }
};
</script>
