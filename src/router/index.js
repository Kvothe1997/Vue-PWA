import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: `${process.env.BASE_URL}`,
    name: "Home",
    component: Home,
    meta: { transition: "null" }
  },
  {
    path: `${process.env.BASE_URL}menu`,
    name: "NavigationBarModal",
    component: () => import("../views/NavigationBarModal.vue"),
    meta: { transition: "menu" },
    children: [
      {
        path: "medidas_y_equivalencias",
        component: () =>
          import("../views/NavigationBarModalMedidasEquivalencias.vue")
      }
    ]
  },
  {
    path: `${process.env.BASE_URL}categoria/:categoria/:indexNumber(\\d+)`,
    name: "HomeWithCategory",
    component: Home,
    meta: { transition: "null" },
    props: true
  },
  {
    path: `${process.env.BASE_URL}:receta/:indexNumber(\\d+)`,
    name: "CardModal",
    component: () => import("../views/CardModal.vue"),
    meta: { transition: "cardModal" },
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
});

export default router;
