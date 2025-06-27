import './assets/main.css'  // Tailwind and global styles

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)  // ✅ this should come before any app.use

app.use(router)      // only if using vue-router
app.use(PrimeVue)    // use PrimeVue plugin

app.mount('#app')