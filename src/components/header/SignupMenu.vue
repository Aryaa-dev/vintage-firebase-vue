<template>
  <div
    class="header signup col-7 col-sm-3 fw-semibold d-flex align-items-center border-end"
  >
    <router-link to="/login">
      <button
        type="button"
        class="btn btn-outline-success mx-2 px-3"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </button>
    </router-link>

    <router-link to="/signup">
      <button
        type="button"
        class="btn btn-success px-4 py-2 mx-2"
        data-bs-toggle="modal"
        data-bs-target="#signUpModal"
        style="white-space: nowrap"
      >
        Sign Up
      </button></router-link
    >
  </div>
</template>
