import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { store } from "./store/index";

import { createApp } from "vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
const app = createApp(App);
app.use(store).use(router).mount("#app");
