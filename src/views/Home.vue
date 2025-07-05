<template>
  <div class="dark transition-colors duration-500">
    <!-- Enhanced Background with animated gradient -->
    <div class="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-1000"></div>
    
    <!-- Enhanced animated background with graph cubes and lightning -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Enhanced Graph cubes with glow effect -->
      <div class="absolute top-10 left-10 w-16 h-16 sm:w-16 sm:h-16 border border-sky-400/30 rotate-45 animate-pulse opacity-40 shadow-lg shadow-sky-400/20"></div>
      <div class="absolute top-32 right-20 w-12 h-12 sm:w-12 sm:h-12 border border-cyan-300/25 rotate-12 animate-pulse opacity-30 delay-1000 shadow-md shadow-cyan-300/20"></div>
      <div class="absolute bottom-40 left-1/4 w-20 h-20 sm:w-20 sm:h-20 border border-sky-300/20 rotate-6 animate-pulse opacity-25 delay-2000 shadow-lg shadow-sky-300/15"></div>
      <div class="absolute top-1/2 right-1/3 w-14 h-14 sm:w-14 sm:h-14 border border-cyan-400/30 rotate-45 animate-pulse opacity-35 delay-3000 shadow-md shadow-cyan-400/20"></div>
      <div class="absolute bottom-20 right-10 w-18 h-18 sm:w-18 sm:h-18 border border-sky-200/20 rotate-12 animate-pulse opacity-20 delay-4000 shadow-lg shadow-sky-200/15"></div>
      
      <!-- Enhanced Lightning elements with better gradients -->
      <div class="absolute top-20 left-1/3 w-1 h-32 sm:w-1 sm:h-32 bg-gradient-to-b from-sky-400/40 via-cyan-300/30 to-transparent rotate-12 animate-pulse opacity-30 shadow-lg shadow-sky-400/20"></div>
      <div class="absolute bottom-32 right-1/4 w-1 h-28 sm:w-1 sm:h-28 bg-gradient-to-b from-cyan-300/35 via-sky-300/25 to-transparent rotate-45 animate-pulse opacity-25 delay-1500 shadow-md shadow-cyan-300/20"></div>
      <div class="absolute top-1/3 right-10 w-1 h-24 sm:w-1 sm:h-24 bg-gradient-to-b from-sky-300/30 via-cyan-200/20 to-transparent rotate-6 animate-pulse opacity-20 delay-2500 shadow-lg shadow-sky-300/15"></div>
      
      <!-- Enhanced Fading particles with glow -->
      <div class="absolute top-16 left-16 w-2 h-2 sm:w-2 sm:h-2 bg-sky-400/50 rounded-full animate-pulse opacity-40 shadow-lg shadow-sky-400/30"></div>
      <div class="absolute top-40 right-32 w-1 h-1 sm:w-1 sm:h-1 bg-cyan-300/40 rounded-full animate-pulse opacity-30 delay-1000 shadow-md shadow-cyan-300/25"></div>
      <div class="absolute bottom-24 left-1/3 w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 bg-sky-300/30 rounded-full animate-pulse opacity-25 delay-2000 shadow-lg shadow-sky-300/20"></div>
      
      <!-- New floating elements -->
      <div class="absolute top-1/4 left-1/2 w-8 h-8 sm:w-8 sm:h-8 border border-sky-500/20 rounded-full animate-float opacity-20 delay-500"></div>
      <div class="absolute bottom-1/3 right-1/2 w-6 h-6 sm:w-6 sm:h-6 border border-cyan-400/25 rounded-full animate-float opacity-15 delay-2500"></div>
    </div>

    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- NavBar Component -->
      <NavBar />
      
      <!-- Hero Section with enhanced mobile styling -->
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-20 flex-grow">
        <!-- Mobile-first minimalist design -->
        <div class="block sm:hidden">
          <!-- Mobile Layout - Centered and Minimal -->
          <div class="flex flex-col items-center space-y-8 px-4">
            <!-- Profile Image - Centered and Prominent -->
            <div class="relative parallax-container animate-fade-in">
              <div class="parallax-image-wrapper relative" :style="{ transform: `scale(${imageScale})` }">
                <!-- Enhanced glow effect -->
                <div class="absolute -inset-8 bg-gradient-to-r from-sky-400/30 via-cyan-300/30 to-sky-400/30 rounded-full blur-2xl animate-pulse-glow"></div>
                
                <!-- Rotating border rings -->
                <div class="relative border-animation-wrapper">
                  <div class="absolute -inset-6 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 rounded-full opacity-20 animate-spin-slow"></div>
                  <div class="absolute -inset-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-300 rounded-full opacity-30 animate-spin-reverse"></div>
                  <div class="absolute -inset-2 bg-gradient-to-r from-sky-200 via-cyan-400 to-sky-200 rounded-full opacity-40 animate-spin-slow"></div>
                  
                  <!-- Inner frame -->
                  <div class="relative bg-gray-800 rounded-full p-2 shadow-2xl">
                    <!-- Circular image -->
                    <div class="w-56 h-56 rounded-full overflow-hidden relative group">
                      <img 
                        src="../assets/dp.JPG" 
                        alt="Aarav Uppal - Profile" 
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <!-- Shimmer effect -->
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
                      
                      <!-- Floating orbs -->
                      <div class="absolute -top-4 -right-4 w-4 h-4 bg-sky-400/80 rounded-full animate-float-slow blur-sm"></div>
                      <div class="absolute -bottom-4 -left-4 w-3 h-3 bg-cyan-300/70 rounded-full animate-float-slow blur-sm" style="animation-delay: 2s;"></div>
                      <div class="absolute -top-2 -left-6 w-2 h-2 bg-sky-300/60 rounded-full animate-float-slow blur-sm" style="animation-delay: 4s;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Minimalist Text Content -->
            <div class="text-center space-y-6 animate-slide-up">
              <!-- Title with typewriter effect -->
              <h1 class="text-4xl font-bold bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent animate-gradient bg-size-200">
                Aarav Uppal
              </h1>
              
              <!-- Subtitle with fade-in -->
              <p class="text-sky-300 font-light text-lg animate-fade-in-delay">
                Big Boi
              </p>
              
              <!-- Single action button -->
              <div class="pt-4">
                <RouterLink to="/about">
                  <Button 
                    label="About me" 
                    class="!bg-gradient-to-r !from-sky-400 !to-cyan-300 hover:!from-sky-500 hover:!to-cyan-400 !text-black !border-0 !px-8 !py-3 !text-base !font-semibold shadow-lg hover:shadow-xl hover:shadow-sky-400/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-bounce-subtle"
                    rounded
                    icon="pi pi-user"
                    iconPos="right"
                  />
                </RouterLink>
                
              </div>
              
              <!-- Minimal social links -->
              <div class="flex justify-center gap-8 pt-4 animate-fade-in-delay-2">
                <a href="#" class="text-gray-400 hover:text-sky-300 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                  <i class="pi pi-github text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-sky-300 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                  <i class="pi pi-linkedin text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-sky-300 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                  <i class="pi pi-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Layout - Unchanged -->
        <div class="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20">
          <!-- Left Side - Introduction -->
          <div class="text-center lg:text-left space-y-6 lg:space-y-8">
            <!-- Enhanced Title with better gradient -->
            <h1 class="text-6xl md:text-7xl lg:text-6xl font-bold bg-gradient-to-r from-white via-sky-200 via-cyan-200 to-white bg-clip-text text-transparent leading-tight animate-gradient bg-size-200">
              Aarav Uppal
            </h1>
            
            <!-- Enhanced subtitle with typewriter effect -->
            <div class="space-y-3 lg:space-y-4">
              <p class="text-2xl md:text-3xl text-sky-300 font-light">
                Big Boi
              </p>
              <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                This website is not ready
              </p>
            </div>
            
            <!-- Enhanced Introduction Text -->
            <div class="space-y-6">
              <p class="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Welcome to my digital space! I'm a passionate developer who loves creating 
                innovative solutions and pushing the boundaries of what's possible with code.
              </p>
              <p class="text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                When I'm not coding, you'll find me exploring new technologies, 
                collaborating on exciting projects, and always learning something new.
              </p>
            </div>
            
            <!-- Enhanced action buttons -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <RouterLink to="/projects" class="w-full sm:w-auto">
                <Button 
                  label="View My Work" 
                  class="!bg-gradient-to-r !from-sky-400 !to-cyan-300 hover:!from-sky-500 hover:!to-cyan-400 !text-black !border-0 !px-10 !py-4 !text-lg !font-semibold shadow-lg hover:shadow-xl hover:shadow-sky-400/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto"
                  rounded
                  icon="pi pi-arrow-right"
                  iconPos="right"
                />
              </RouterLink>
              <RouterLink to="/about" class="w-full sm:w-auto">
                <Button 
                  label="About Me"
                  class="!bg-transparent !text-sky-300 !border-2 !border-sky-400 hover:!bg-sky-400/10 hover:!border-sky-300 !px-10 !py-4 !text-lg !font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl hover:shadow-sky-400/20"
                  rounded
                  icon="pi pi-user"
                  iconPos="right"
                />
              </RouterLink>
            </div>
            
            <!-- Social links -->
            <div class="flex justify-center lg:justify-start gap-6">
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
          
          <!-- Right Side - Enhanced Profile Image -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative parallax-container">
              <!-- Animated border layers -->
              <div class="parallax-image-wrapper relative" :style="{ transform: `scale(${imageScale})` }">
                <!-- Outer glow effect -->
                <div class="absolute -inset-8 bg-gradient-to-r from-sky-400/20 via-cyan-300/20 to-sky-400/20 rounded-3xl blur-xl animate-pulse"></div>
                
                <!-- Animated border frame -->
                <div class="relative border-animation-wrapper">
                  <div class="absolute -inset-4 bg-gradient-to-r from-sky-400 via-cyan-300 via-sky-200 to-sky-400 rounded-2xl opacity-75 animate-gradient bg-size-200"></div>
                  <div class="absolute -inset-3 bg-gradient-to-r from-cyan-300 via-sky-400 via-cyan-200 to-cyan-300 rounded-2xl opacity-50 animate-gradient bg-size-200" style="animation-delay: 1s;"></div>
                  <div class="absolute -inset-2 bg-gradient-to-r from-sky-200 via-cyan-400 via-sky-300 to-sky-200 rounded-2xl opacity-25 animate-gradient bg-size-200" style="animation-delay: 2s;"></div>
                  
                  <!-- Inner frame -->
                  <div class="relative bg-gray-800 rounded-xl p-2 shadow-2xl">
                    <!-- Image container -->
                    <div class="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] lg:w-80 lg:h-96 xl:w-96 xl:h-[28rem] rounded-lg overflow-hidden relative group">
                      <img 
                        src="../assets/dp.JPG" 
                        alt="Aarav Uppal - Profile" 
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <!-- Overlay effects -->
                      <div class="absolute inset-0 bg-gradient-to-t from-sky-900/30 via-transparent to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      <!-- Floating particles around image -->
                      <div class="absolute -top-2 -left-2 w-3 h-3 bg-sky-400/60 rounded-full animate-float opacity-70"></div>
                      <div class="absolute -top-1 -right-3 w-2 h-2 bg-cyan-300/50 rounded-full animate-float opacity-60" style="animation-delay: 1s;"></div>
                      <div class="absolute -bottom-2 -left-3 w-2 h-2 bg-sky-300/40 rounded-full animate-float opacity-50" style="animation-delay: 2s;"></div>
                      <div class="absolute -bottom-1 -right-2 w-3 h-3 bg-cyan-400/50 rounded-full animate-float opacity-60" style="animation-delay: 3s;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile CTA - Minimal -->
        <div class="block sm:hidden text-center mt-12">
          <div class="bg-gradient-to-r from-sky-400/10 via-cyan-300/10 to-sky-400/10 backdrop-blur-sm rounded-2xl p-6 border border-sky-400/20 shadow-xl mx-4 animate-fade-in-up">
            <h3 class="text-lg font-semibold mb-3 text-white">Let's create something amazing</h3>
            <RouterLink to="/contact">
              <Button 
                label="Get in Touch" 
                class="!bg-gradient-to-r !from-sky-400 !to-cyan-300 hover:!from-sky-500 hover:!to-cyan-400 !text-black !border-0 !px-6 !py-3 !text-sm !font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                rounded
                icon="pi pi-arrow-right"
                iconPos="right"
              />
            </RouterLink>
          </div>
        </div>

        <!-- Desktop CTA - Unchanged -->
        <div class="hidden sm:block text-center bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-sky-400/20 shadow-2xl">
          <h3 class="text-2xl lg:text-3xl font-bold mb-4 text-white">Ready to work together?</h3>
          <p class="text-base text-gray-300 mb-6 max-w-xl mx-auto">Let's create something amazing together. I'm always excited to take on new challenges and collaborate on innovative projects.</p>
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

// Parallax effect for image
const imageScale = ref(1)
const scrollY = ref(0)

// Function to update title
const updateTitle = () => {
  document.title = window.innerWidth < 500 ? "AU" : "Aarav Uppal";
}

// Parallax scroll handler
const handleScroll = () => {
  scrollY.value = window.scrollY
  // Calculate scale based on scroll position
  const maxScroll = document.body.scrollHeight - window.innerHeight
  const scrollPercent = Math.min(scrollY.value / maxScroll, 1)
  
  // Scale from 1 to 0.7 as user scrolls down
  imageScale.value = 1 - (scrollPercent * 0.3)
}

// Set up lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", updateTitle);
  window.addEventListener("scroll", handleScroll);
  updateTitle(); // Initial call
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateTitle);
  window.removeEventListener("scroll", handleScroll);
})
</script>

<style scoped>
/* Enhanced mobile animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-10px) scale(1.1); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 15s linear infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.5s both;
}

.animate-fade-in-delay-2 {
  animation: fade-in 1s ease-out 1s both;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out 0.3s both;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out 1.5s both;
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

/* Parallax container */
.parallax-container {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.parallax-image-wrapper {
  transition: transform 0.1s ease-out;
  transform-origin: center center;
}

/* Border animation wrapper */
.border-animation-wrapper {
  position: relative;
  border-radius: 1rem;
}

/* Enhanced glow effects */
.shadow-glow {
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
}

.shadow-glow-hover:hover {
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
}

/* Mobile-first responsive design - keeping desktop exactly the same */
@media (max-width: 640px) {
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Better mobile image scaling */
  .parallax-image-wrapper {
    transform: scale(1) !important;
  }
  
  /* Improved mobile text rendering */
  .text-transparent {
    -webkit-text-fill-color: transparent;
  }
  
  /* Better mobile button spacing */
  .space-y-3 > * + * {
    margin-top: 0.75rem;
  }
}

/* Enhanced hover effects */
.group:hover .group-hover\:shadow-xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(56, 189, 248, 0.1);
}

/* Keep desktop scaling exactly the same */
@media (min-width: 1024px) {
  .parallax-image-wrapper {
    transform: scale(1);
  }
}

/* Only adjust tablet scaling slightly */
@media (min-width: 641px) and (max-width: 1023px) {
  .parallax-image-wrapper {
    transform: scale(0.95);
  }
}
</style>