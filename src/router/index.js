import { createWebHistory, createRouter } from "vue-router";
import CardModal from "../views/CardModal.vue";
import Home from "../views/Home.vue";
import NavigationBarModal from "../views/NavigationBarModal.vue";
import NavigationBarModalMedidasEquivalencias from "../views/NavigationBarModalMedidasEquivalencias.vue";

const routes = [
  {
    path: `${process.env.BASE_URL}`,
    name: "Home",
    component: Home,
    meta: { transition: "null" }
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
    component: CardModal,
    meta: { transition: "cardModal" },
    props: true
  },
  {
    path: `${process.env.BASE_URL}menu`,
    name: "NavigationBarModal",
    component: NavigationBarModal,
    meta: { transition: "menu" },
    children: [
      {
        path: "medidas_y_equivalencias",
        component: NavigationBarModalMedidasEquivalencias
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
});

export default router;
