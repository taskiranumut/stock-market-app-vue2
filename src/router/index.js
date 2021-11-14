import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/symbol/:id",
    name: "SymbolPage",
    component: () => import("@/views/SymbolPage.vue"),
  },
  {
    path: "/panel",
    name: "PanelPage",
    component: () => import("@/views/PanelPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
