<template>
  <div :class="{ 'dark': isDark }" class="min-h-screen transition-colors duration-500">
    <!-- Background with animated gradient -->
    <div class="fixed inset-0 bg-white dark:bg-black transition-colors duration-500"></div>    
    <!-- Animated background particles -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-20 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-300/20 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>

    <div class="relative z-10">
      // NavBar Component
      <NavBar :isDark="isDark" @toggle-theme="toggleTheme" />
      <!-- Hero Section -->
      <main class=" mx-auto  py-20">
        <div class="text-center mb-20">
          <div class="mb-8 relative inline-block">
            <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div class="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <img src="./assets/dp.JPG" alt="Profile Image" class="w-full h-full object-cover rounded-full" />

              </div>
            </div>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
            Aarav Uppal
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hi, I’m Aarav — a half-Punjabi, half-Kannadiga soul raised in the vibrant city of Kolkata. Growing up immersed in diverse cultures, I’ve developed a unique perspective that I bring into everything I do.

I’m deeply passionate about Computer Science, and I’m on a journey to build something meaningful with it. When I’m not coding, you’ll probably find me lifting at the gym or exploring new ideas that spark curiosity. 
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              label="View My Work" 
              class="!bg-gradient-to-r !from-blue-600 !to-purple-600 hover:!from-blue-700 hover:!to-purple-700 !text-white !border-0 !px-8 !py-3 !text-lg !font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              rounded
            />
            <Button 
              label="Get In Touch" 
              class="!bg-transparent !text-gray-700 dark:!text-gray-300 !border-2 !border-gray-300 dark:!border-gray-600 hover:!bg-gray-100 dark:hover:!bg-gray-800 !px-8 !py-3 !text-lg !font-semibold transition-all duration-300"
              rounded
            />
          </div>
        </div>

        <!-- Skills Section -->
        <div class="grid md:grid-cols-3 gap-8 mb-20">
          <Card class="!bg-white/70 dark:!bg-gray-800/70 !backdrop-blur-sm !border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <template #content>
              <div class="text-center p-6">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <i class="pi pi-code text-2xl text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800 dark:text-white">Frontend Development</h3>
                <p class="text-gray-600 dark:text-gray-300">Vue.js, Tailwind CSS, and modern web technologies</p>
              </div>
            </template>
          </Card>

          <Card class="!bg-white/70 dark:!bg-gray-800/70 !backdrop-blur-sm !border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <template #content>
              <div class="text-center p-6">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <i class="pi pi-server text-2xl text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800 dark:text-white">Backend Development</h3>
                <p class="text-gray-600 dark:text-gray-300">Java, Python, databases, APIs</p>
              </div>
            </template>
          </Card>

          <Card class="!bg-white/70 dark:!bg-gray-800/70 !backdrop-blur-sm !border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <template #content>
              <div class="text-center p-6">
                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <i class="pi pi-palette text-2xl text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-800 dark:text-white">UI/UX Design</h3>
                <p class="text-gray-600 dark:text-gray-300">User-centered design, prototyping, and creating intuitive interfaces</p>
              </div>
            </template>
          </Card>
        </div>

        <!-- Tech Stack -->
        <div class="text-center mb-20">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Technologies I Love</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <Chip 
              v-for="tech in technologies" 
              :key="tech.name"
              :label="tech.name" 
              :class="tech.class"
              class="!px-4 !py-2 !text-sm !font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            />
          </div>
        </div>
      </main>
      <Footer />

    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import Divider from 'primevue/divider'
import Footer from './components/footer.vue'
import NavBar from './components/NavBar.vue'



const isDark = ref(false)

const technologies = ref([
  { name: 'Java', class: '!bg-green-100 !text-green-800 dark:!bg-green-900 dark:!text-green-200' },
  { name: 'Vue.js', class: '!bg-blue-100 !text-blue-800 dark:!bg-blue-900 dark:!text-blue-200' },
  { name: 'Spring Boot', class: '!bg-blue-100 !text-blue-800 dark:!bg-blue-900 dark:!text-blue-200' },
  { name: 'Java Script', class: '!bg-green-100 !text-green-800 dark:!bg-green-900 dark:!text-green-200' },
  { name: 'Python', class: '!bg-yellow-100 !text-yellow-800 dark:!bg-yellow-900 dark:!text-yellow-200' },
  { name: 'Tailwind CSS', class: '!bg-cyan-100 !text-cyan-800 dark:!bg-cyan-900 dark:!text-cyan-200' },
  { name: 'SQL', class: '!bg-green-100 !text-green-800 dark:!bg-green-900 dark:!text-green-200' },
  { name: 'PostgreSQL', class: '!bg-blue-100 !text-blue-800 dark:!bg-blue-900 dark:!text-blue-200' },
  { name: 'AWS', class: '!bg-orange-100 !text-orange-800 dark:!bg-orange-900 dark:!text-orange-200' },
  { name: 'Swift', class: '!bg-blue-100 !text-blue-800 dark:!bg-blue-900 dark:!text-blue-200' },
])

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  
  // Apply theme to document element for global dark mode
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
  
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})




</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom gradient animations */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}
</style>