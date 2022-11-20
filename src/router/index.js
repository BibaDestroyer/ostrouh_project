import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView'
import CreatorsView from "@/views/CreatorsView"
import FeedbackView from "@/views/FeedbackView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/creators',
    name: 'creators',
    component: CreatorsView
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: FeedbackView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
