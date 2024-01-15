import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyView from '../views/PrivacyView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Privacy',
    name: 'Privacy',
    component: PrivacyView
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
