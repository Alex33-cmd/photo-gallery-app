import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "@/views/MainPage";
import DigitalPage from "@/views/DigitalPage";

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
    component: () => import("./views/FilmPage"),
  },
  {
    path: "/artwork",
    component: () => import("./views/ArtworkPage"),
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
