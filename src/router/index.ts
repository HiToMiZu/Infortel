import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ProcessView from '@/views/ProcessView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ReviewsView from '@/views/ReviewsView.vue'
import ContactView from '@/views/ContactView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/process',
      name: 'process',
      component: ProcessView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
