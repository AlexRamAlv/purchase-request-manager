import { createRouter, createWebHistory } from "vue-router";
import DasboardView from "../views/DasboardView.vue";
import RequestersView from "../views/RequestersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dasboard",
      component: DasboardView,
    },
    {
      path: "/solicitantes",
      name: "requesters",
      component: RequestersView,
    },
    {
      path: "/solicitudes",
      name: "requests",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RequestsView.vue"),
    },
  ],
});

export default router;
