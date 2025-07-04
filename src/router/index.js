import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../components/Contact.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top smoothly
    return { top: 0, behavior: 'smooth' }
  }
})

export default router