import './assets/main.css'    // Import Tailwind and other global styles
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // only if you use vue-router

const app = createApp(App)

app.use(router)  // only if you use vue-router

app.mount('#app')