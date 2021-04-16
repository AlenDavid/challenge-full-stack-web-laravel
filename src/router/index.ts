import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      auth: true,
    },
  },
  {
    path: "/students",
    name: "Students",
    meta: {
      auth: true,
    },
  },
  {
    path: "/managers",
    name: "Managers",
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to: any, from, next) => {
  const { isLogged } = store.state.user;

  const { auth = false } = to.meta;

  if (auth && !isLogged) next({ name: "Home" });
  else next();
});

export default router;
