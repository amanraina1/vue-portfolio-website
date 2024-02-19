import { createWebHistory, createRouter } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
const routes = [];

const router = createRouter({
  history: createWebHistory,
  routes,
});

export default router;
