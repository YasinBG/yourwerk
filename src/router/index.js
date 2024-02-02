import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import PrivacyView from "../views/PrivacyView.vue";
import TermsConditionView from "../views/TermsConditionView.vue";
import PresalePublicView from "../views/PresalePublicView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "WERK1000X" },
  },

  {
    path: "/Privacy",
    name: "Privacy",
    component: PrivacyView,
  },
  {
    path: "/TermsCondition",
    name: "TermsCondition",
    component: TermsConditionView,
  },
  {
    path: "/PresalePublic",
    name: "PresalePublic",
    component: PresalePublicView,
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
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "WERK1000X";
  next();
});
export default router;
