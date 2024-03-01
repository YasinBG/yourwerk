import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// import PrivacyView from "../views/PrivacyView.vue";
// import TermsConditionView from "../views/TermsConditionView.vue";
// import PresalePublicView from "../views/PresalePublicView.vue";
import BuyView from "../views/BuyView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "WERK1000X | Transaction Tool for the Entire WEB3 Ecosystem",
    },
  },

  {
    path: "/Privacy",
    name: "Privacy",
    component: () => import("../views/PresalePublicView.vue"),
  },
  {
    path: "/TermsCondition",
    name: "TermsCondition",
    component: () => import("../views/TermsConditionView.vue"),
  },
  {
    path: "/PresalePublic",
    name: "PresalePublic",
    component: () => import("../views/PresalePublicView.vue"),
  },
  {
    path: "/Buy",
    name: "Buy",
    component: BuyView,
    // component: () => import("../views/BuyView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  linkActiveClass: "active-link",
});
router.beforeEach((to, from, next) => {
  document.title =
    to.meta.title ||
    "WERK1000X | Transaction Tool for the Entire WEB3 Ecosystem";
  next();
});

export default router;
