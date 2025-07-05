<template>
  <div class="dark transition-colors duration-500">
    <!-- Enhanced Background with animated gradient -->
    <div class="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-1000"></div>
    
    <!-- Enhanced animated background with graph cubes and lightning -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Enhanced Graph cubes with glow effect -->
      <div class="absolute top-10 left-10 w-16 h-16 border border-sky-400/30 rotate-45 animate-pulse opacity-40 shadow-lg shadow-sky-400/20"></div>
      <div class="absolute top-32 right-20 w-12 h-12 border border-cyan-300/25 rotate-12 animate-pulse opacity-30 delay-1000 shadow-md shadow-cyan-300/20"></div>
      <div class="absolute bottom-40 left-1/4 w-20 h-20 border border-sky-300/20 rotate-6 animate-pulse opacity-25 delay-2000 shadow-lg shadow-sky-300/15"></div>
      <div class="absolute top-1/2 right-1/3 w-14 h-14 border border-cyan-400/30 rotate-45 animate-pulse opacity-35 delay-3000 shadow-md shadow-cyan-400/20"></div>
      <div class="absolute bottom-20 right-10 w-18 h-18 border border-sky-200/20 rotate-12 animate-pulse opacity-20 delay-4000 shadow-lg shadow-sky-200/15"></div>
      
      <!-- Enhanced Lightning elements with better gradients -->
      <div class="absolute top-20 left-1/3 w-1 h-32 bg-gradient-to-b from-sky-400/40 via-cyan-300/30 to-transparent rotate-12 animate-pulse opacity-30 shadow-lg shadow-sky-400/20"></div>
      <div class="absolute bottom-32 right-1/4 w-1 h-28 bg-gradient-to-b from-cyan-300/35 via-sky-300/25 to-transparent rotate-45 animate-pulse opacity-25 delay-1500 shadow-md shadow-cyan-300/20"></div>
      <div class="absolute top-1/3 right-10 w-1 h-24 bg-gradient-to-b from-sky-300/30 via-cyan-200/20 to-transparent rotate-6 animate-pulse opacity-20 delay-2500 shadow-lg shadow-sky-300/15"></div>
      
      <!-- Enhanced Fading particles with glow -->
      <div class="absolute top-16 left-16 w-2 h-2 bg-sky-400/50 rounded-full animate-pulse opacity-40 shadow-lg shadow-sky-400/30"></div>
      <div class="absolute top-40 right-32 w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse opacity-30 delay-1000 shadow-md shadow-cyan-300/25"></div>
      <div class="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-sky-300/30 rounded-full animate-pulse opacity-25 delay-2000 shadow-lg shadow-sky-300/20"></div>
      
      <!-- New floating elements -->
      <div class="absolute top-1/4 left-1/2 w-8 h-8 border border-sky-500/20 rounded-full animate-float opacity-20 delay-500"></div>
      <div class="absolute bottom-1/3 right-1/2 w-6 h-6 border border-cyan-400/25 rounded-full animate-float opacity-15 delay-2500"></div>
    </div>

    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- NavBar Component -->
      <NavBar />
      
      <!-- Hero Section with enhanced styling -->
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 flex-grow">
        <div class="text-center mb-12 sm:mb-20">
          <!-- Enhanced Profile Section -->
          <div class="mb-6 sm:mb-8 relative inline-block">
            <div class="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200 p-1 shadow-2xl shadow-sky-400/30 animate-float">
              <div class="w-full h-full rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                <img src="../assets/dp.JPG" alt="Profile Image" class="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110" />
                <div class="absolute inset-0 rounded-full bg-gradient-to-t from-sky-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            </div>
          
          <!-- Enhanced Title with better gradient -->
          <h1 class="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-sky-200 via-cyan-200 to-white bg-clip-text text-transparent leading-tight px-2 animate-gradient bg-size-200">
            Aarav Uppal
          </h1>
          
          <!-- Enhanced subtitle with typewriter effect -->
          <div class="mb-6 sm:mb-8">
            <p class="text-xl sm:text-2xl md:text-3xl text-sky-300 mb-2 font-light">
              Big Boi
            </p>
            <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              This website is not ready yet
            </p>
          </div>
          
          <!-- Enhanced action buttons -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 mb-8">
            <RouterLink to="/projects" class="w-full sm:w-auto">
              <Button 
                label="View My Work" 
                class="!bg-gradient-to-r !from-sky-400 !to-cyan-300 hover:!from-sky-500 hover:!to-cyan-400 !text-black !border-0 !px-8 sm:!px-10 !py-4 !text-base sm:!text-lg !font-semibold shadow-lg hover:shadow-xl hover:shadow-sky-400/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto"
                rounded
                icon="pi pi-arrow-right"
                iconPos="right"
              />
            </RouterLink>
            <RouterLink to="/contact" class="w-full sm:w-auto">
              <Button 
                label="Get In Touch"
                class="!bg-transparent !text-sky-300 !border-2 !border-sky-400 hover:!bg-sky-400/10 hover:!border-sky-300 !px-8 sm:!px-10 !py-4 !text-base sm:!text-lg !font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl hover:shadow-sky-400/20"
                rounded
                icon="pi pi-send"
                iconPos="right"
              />
            </RouterLink>
          </div>
          
          <!-- Social links -->
          <div class="flex justify-center gap-6 mb-8">
            <a href="#" class="text-gray-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
              <i class="pi pi-github text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
              <i class="pi pi-envelope text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Enhanced Skills Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          <Card class="!bg-gray-800/80 !backdrop-blur-md !border !border-sky-400/20 shadow-xl hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group">
            <template #content>
              <div class="text-center p-6 sm:p-8">
                <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full flex items-center justify-center shadow-lg shadow-sky-400/30 group-hover:shadow-xl group-hover:shadow-sky-400/40 transition-all duration-300">
                  <i class="pi pi-code text-2xl sm:text-3xl text-black"></i>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-sky-200 transition-colors duration-300">Frontend Development</h3>
                <p class="text-sm sm:text-base text-gray-300 leading-relaxed">Vue.js, React, Tailwind CSS, and modern web technologies</p>
              </div>
            </template>
          </Card>

          <Card class="!bg-gray-800/80 !backdrop-blur-md !border !border-cyan-400/20 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group">
            <template #content>
              <div class="text-center p-6 sm:p-8">
                <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/30 group-hover:shadow-xl group-hover:shadow-cyan-400/40 transition-all duration-300">
                  <i class="pi pi-server text-2xl sm:text-3xl text-black"></i>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-cyan-200 transition-colors duration-300">Backend Development</h3>
                <p class="text-sm sm:text-base text-gray-300 leading-relaxed">Java, Python, databases, APIs, and cloud services</p>
              </div>
            </template>
          </Card>

          <Card class="!bg-gray-800/80 !backdrop-blur-md !border !border-sky-300/20 shadow-xl hover:shadow-2xl hover:shadow-sky-300/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group">
            <template #content>
              <div class="text-center p-6 sm:p-8">
                <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-sky-300 to-white rounded-full flex items-center justify-center shadow-lg shadow-sky-300/30 group-hover:shadow-xl group-hover:shadow-sky-300/40 transition-all duration-300">
                  <i class="pi pi-palette text-2xl sm:text-3xl text-black"></i>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-sky-200 transition-colors duration-300">UI/UX Design</h3>
                <p class="text-sm sm:text-base text-gray-300 leading-relaxed">User-centered design, prototyping, and creating intuitive interfaces</p>
              </div>
            </template>
          </Card>
        </div>

        <!-- Enhanced Tech Stack -->
        <div class="text-center mb-12 sm:mb-20 px-4">
          <h2 class="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
            Technologies I Use
          </h2>
          <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Chip 
              v-for="tech in technologies" 
              :key="tech.name"
              :label="tech.name" 
              :class="tech.class"
              class="!px-4 sm:!px-6 !py-3 !text-sm sm:!text-base !font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
        
        <!-- CTA Section -->
        <div class="text-center bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-sky-400/20 shadow-2xl">
          <h3 class="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to work together?</h3>
          <p class="text-gray-300 mb-6 max-w-xl mx-auto">Let's create something amazing together. I'm always excited to take on new challenges and collaborate on innovative projects.</p>
          <RouterLink to="/contact">
            <Button 
              label="Start a Project" 
              class="!bg-gradient-to-r !from-sky-400 !to-cyan-300 hover:!from-sky-500 hover:!to-cyan-400 !text-black !border-0 !px-8 !py-4 !text-lg !font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              rounded
              icon="pi pi-arrow-right"
              iconPos="right"
            />
          </RouterLink>
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

// Enhanced tech stack data with lightning blue theme
const technologies = ref([
  { name: 'Java', class: '!bg-gradient-to-r !from-sky-900 !to-sky-800 !text-sky-200 hover:!from-sky-800 hover:!to-sky-700' },
  { name: 'Vue.js', class: '!bg-gradient-to-r !from-cyan-900 !to-cyan-800 !text-cyan-200 hover:!from-cyan-800 hover:!to-cyan-700' },
  { name: 'Python', class: '!bg-gradient-to-r !from-sky-800 !to-sky-700 !text-sky-100 hover:!from-sky-700 hover:!to-sky-600' },
  { name: 'Tailwind CSS', class: '!bg-gradient-to-r !from-cyan-800 !to-cyan-700 !text-cyan-100 hover:!from-cyan-700 hover:!to-cyan-600' },
  { name: 'SQL', class: '!bg-gradient-to-r !from-sky-900 !to-sky-800 !text-sky-200 hover:!from-sky-800 hover:!to-sky-700' },
  { name: 'PostgreSQL', class: '!bg-gradient-to-r !from-cyan-900 !to-cyan-800 !text-cyan-200 hover:!from-cyan-800 hover:!to-cyan-700' },
  { name: 'AWS', class: '!bg-gradient-to-r !from-sky-800 !to-sky-700 !text-sky-100 hover:!from-sky-700 hover:!to-sky-600' },
  { name: 'Node.js', class: '!bg-gradient-to-r !from-cyan-800 !to-cyan-700 !text-cyan-100 hover:!from-cyan-700 hover:!to-cyan-600' },
])
</script>

<style scoped>
/* Enhanced animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Enhanced gradient animations */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 6s ease infinite;
}

.bg-size-200 {
  background-size: 200% 200%;
}

/* Lightning animation */
@keyframes lightning-fade {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* Typewriter effect */
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #38bdf8; }
}

/* Enhanced glow effects */
.shadow-glow {
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
}

.shadow-glow-hover:hover {
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
}

/* Ensure proper text rendering on mobile */
@media (max-width: 640px) {
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
}

/* Enhanced hover effects */
.group:hover .group-hover\:shadow-xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(56, 189, 248, 0.1);
}

/* Parallax preparation */
.parallax-container {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.parallax-element {
  transform: translateZ(0);
  will-change: transform;
}
</style>