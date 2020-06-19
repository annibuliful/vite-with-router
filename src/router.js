import { createRouter, createWebHistory } from "vue-router";

import Test from "./components/Test.vue";

export const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: "/test", name: "Hello", component: Test },
    { path: "/", name: "Name", component: Test }
  ]
});
