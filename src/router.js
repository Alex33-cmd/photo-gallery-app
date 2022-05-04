import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "@/pages/MainPage";
import DigitalPage from "@/pages/DigitalPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/digital",
    component: DigitalPage,
  },
  {
    path: "/film",
    component: () => import("./pages/FilmPage"),
  },
  {
    path: "/artwork",
    component: () => import("./pages/ArtworkPage"),
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
