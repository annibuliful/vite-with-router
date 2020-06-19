import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/Home.vue";
import AboutPage from "../views/About.vue";
export const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: "/about", name: "about", component: AboutPage },
    { path: "/", name: "home", component: HomePage }
  ]
});
