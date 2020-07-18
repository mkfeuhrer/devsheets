import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
