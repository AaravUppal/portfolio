import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/contact', name: 'contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router