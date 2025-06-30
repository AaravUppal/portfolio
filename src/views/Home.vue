<template>
    <div class="dark transition-colors duration-500">
      <!-- Background with animated gradient -->
      <div class="fixed inset-0 bg-black transition-colors duration-500"></div>    
      <!-- Animated background particles -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-20 right-10 sm:top-40 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-10 left-1/4 sm:bottom-20 sm:left-1/3 w-40 h-40 sm:w-80 sm:h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
  
      <div class="relative z-10 min-h-screen flex flex-col">
        <!-- NavBar Component -->
        <NavBar />
        <!-- <router-view /> -->
        <!-- Hero Section -->
        <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div class="text-center mb-12 sm:mb-20">
            <div class="mb-6 sm:mb-8 relative inline-block">
              <div class="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
                <div class="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img src="../assets/dp.JPG" alt="Profile Image" class="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
            
            <h1 class="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight px-2">
              Aarav Uppal
            </h1>
            
            <p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              This website is not ready yet  
            </p>
            
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button 
                label="View My Work" 
                class="!bg-gradient-to-r !from-blue-600 !to-purple-600 hover:!from-blue-700 hover:!to-purple-700 !text-white !border-0 !px-6 sm:!px-8 !py-3 !text-base sm:!text-lg !font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                rounded
              />
              <RouterLink to="/contact" class="w-full sm:w-auto">
  <Button 
    label="Get In Touch"
    class="!bg-transparent !text-gray-300 !border-2 !border-gray-600 hover:!bg-gray-800 !px-6 sm:!px-8 !py-3 !text-base sm:!text-lg !font-semibold transition-all duration-300 w-full sm:w-auto"
    rounded
  />
</RouterLink>
            </div>
          </div>
  
          <!-- Skills Section -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            <Card class="!bg-gray-800/70 !backdrop-blur-sm !border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <template #content>
                <div class="text-center p-4 sm:p-6">
                  <div class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <i class="pi pi-code text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">this website</h3>
                  <p class="text-sm sm:text-base text-gray-300">Vue.js, Tailwind CSS, and deployed via vercel</p>
                </div>
              </template>
            </Card>
  
            <Card class="!bg-gray-800/70 !backdrop-blur-sm !border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <template #content>
                <div class="text-center p-4 sm:p-6">
                  <div class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <i class="pi pi-server text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Backend Development</h3>
                  <p class="text-sm sm:text-base text-gray-300">Java, Python, databases, APIs</p>
                </div>
              </template>
            </Card>
  
            <Card class="!bg-gray-800/70 !backdrop-blur-sm !border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <template #content>
                <div class="text-center p-4 sm:p-6">
                  <div class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <i class="pi pi-palette text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">UI/UX Design</h3>
                  <p class="text-sm sm:text-base text-gray-300">User-centered design, prototyping, and creating intuitive interfaces</p>
                </div>
              </template>
            </Card>
          </div>
  
          <!-- Tech Stack -->
          <div class="text-center mb-12 sm:mb-20 px-4">
            <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">Technologies I Love</h2>
            <div class="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Chip 
                v-for="tech in technologies" 
                :key="tech.name"
                :label="tech.name" 
                :class="tech.class"
                class="!px-3 sm:!px-4 !py-2 !text-xs sm:!text-sm !font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import Chip from 'primevue/chip'

  
  // Function to update title
  const updateTitle = () => {
    document.title = window.innerWidth < 500 ? "AU" : "Aarav Uppal";
  }
  
  // Set up lifecycle hooks
  onMounted(() => {
    window.addEventListener("resize", updateTitle);
    updateTitle(); // Initial call
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateTitle);
  })
  
  // Tech stack data
  const technologies = ref([
    { name: 'Java', class: '!bg-green-900 !text-green-200' },
    { name: 'Vue.js', class: '!bg-blue-900 !text-blue-200' },
    { name: 'Python', class: '!bg-yellow-900 !text-yellow-200' },
    { name: 'Tailwind CSS', class: '!bg-cyan-900 !text-cyan-200' },
    { name: 'SQL', class: '!bg-green-900 !text-green-200' },
    { name: 'PostgreSQL', class: '!bg-blue-900 !text-blue-200' },
    { name: 'AWS', class: '!bg-orange-900 !text-orange-200' },
  ])
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
  
  /* Ensure proper text rendering on mobile */
  @media (max-width: 640px) {
    .bg-clip-text {
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
  </style>