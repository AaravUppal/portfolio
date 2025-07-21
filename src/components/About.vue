<template>
  <div class="dark transition-colors duration-500">
    <!-- Background -->
    <div class="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
    
    <!-- Subtle background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-20 w-12 h-12 border border-sky-400/20 rotate-45 animate-pulse opacity-30"></div>
      <div class="absolute top-40 right-32 w-8 h-8 border border-cyan-300/15 rotate-12 animate-pulse opacity-20 delay-1000"></div>
      <div class="absolute bottom-32 left-1/4 w-16 h-16 border border-sky-300/10 rotate-6 animate-pulse opacity-15 delay-2000"></div>
      <div class="absolute bottom-20 right-20 w-6 h-6 border border-cyan-400/20 rounded-full animate-pulse opacity-25 delay-3000"></div>
    </div>

    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- NavBar Component -->
      <NavBar />
      
      <!-- About Content -->
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex-grow">
        <!-- Header Section -->
        <div class="text-center mb-16 sm:mb-24">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
            About Me
          </h1>
          <div class="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        <!-- Main Content Grid -->
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-16">
         

          <!-- Right Column - Introduction -->
          <div class="space-y-8 lg:space-y-12">
            <!-- Introduction -->
            <div class="space-y-6">
              <h2 class="text-2xl sm:text-3xl font-semibold text-white">
                Hi, I'm Aarav
              </h2>
              <div class="space-y-4 text-gray-300 leading-relaxed">
                <p class="text-lg">
                  I’m an aspiring software developer with a strong passion for building innovative and impactful digital solutions.</p>
                <p>
                  What started as simple curiosity has grown into a genuine love for building digital experiences that matter. I care about writing clean code, designing with intention, and constantly learning to get better at what I do. </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="max-w-6xl mx-auto mb-16">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
            Education
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-400/10 hover:border-sky-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center mr-4">
                  <i class="pi pi-graduation-cap text-black text-lg"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-white text-xl">CHRIST University</h3>
                  <p class="text-gray-400 text-sm">Bengaluru, Karnataka</p>
                </div>
              </div>
              <p class="text-sky-300 font-medium">Bachelor of Computer Applications (BCA)</p>
              <p class="text-gray-400 text-sm mt-2">Deemed to be University</p>
            </div>
            
            <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-400/10 hover:border-sky-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center mr-4">
                  <i class="pi pi-book text-black text-lg"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-white text-xl">La Martiniere for Boys</h3>
                  <p class="text-gray-400 text-sm">Kolkata, West Bengal</p>
                </div>
              </div>
              <p class="text-sky-300 font-medium">Primary, Secondary & Higher Education</p>
              <p class="text-gray-400 text-sm mt-2">ICSE & ISC Board</p>
            </div>
          </div>
        </div>

        <!-- Technical Skills Section -->
        <div class="max-w-6xl mx-auto mb-16">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Programming Languages -->
            <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-400/10 hover:border-sky-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center mr-4">
                  <i class="pi pi-code text-black text-lg"></i>
                </div>
                <h3 class="font-semibold text-white text-lg">Languages</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span class="text-gray-300">Java</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span class="text-gray-300">Python</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span class="text-gray-300">SQL</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span class="text-gray-300">JavaScript</span>
                  <span class="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">Basic</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span class="text-gray-300">Kotlin</span>
                </div>
              </div>
            </div>

            <!-- Web Technologies -->
            <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-400/10 hover:border-sky-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center mr-4">
                  <i class="pi pi-globe text-black text-lg"></i>
                </div>
                <h3 class="font-semibold text-white text-lg">Web Technologies</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span class="text-gray-300">HTML</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span class="text-gray-300">CSS</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span class="text-gray-300">Vue.js</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span class="text-gray-300">React.js</span>
                </div>
              </div>
            </div>

            <!-- Frameworks & Libraries -->
            <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-400/10 hover:border-sky-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center mr-4">
                  <i class="pi pi-sitemap text-black text-lg"></i>
                </div>
                <h3 class="font-semibold text-white text-lg">Frameworks & Libraries</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span class="text-gray-300">Vue.js</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span class="text-gray-300">PrimeVue</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span class="text-gray-300">Tailwind CSS</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span class="text-gray-300">React.js</span>
                </div>
              </div>
            </div>

            <!-- Database & Tools -->
            <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-400/10 hover:border-sky-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center mr-4">
                  <i class="pi pi-database text-black text-lg"></i>
                </div>
                <h3 class="font-semibold text-white text-lg">Database & Tools</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span class="text-gray-300">MySQL</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span class="text-gray-300">JDBC</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span class="text-gray-300">Android Studio</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span class="text-gray-300">Cisco Packet Tracer</span>
                </div>
              </div>
            </div>

            <!-- Version Control -->
            <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-400/10 hover:border-sky-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center mr-4">
                  <i class="pi pi-git text-black text-lg"></i>
                </div>
                <h3 class="font-semibold text-white text-lg">Version Control</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span class="text-gray-300">Git</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span class="text-gray-300">GitHub</span>
                </div>
              </div>
            </div>

            <!-- Others -->
            <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-400/10 hover:border-sky-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center mr-4">
                  <i class="pi pi-cog text-black text-lg"></i>
                </div>
                <h3 class="font-semibold text-white text-lg">Others</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span class="text-gray-300">Vercel</span>
                </div>
                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div class="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span class="text-gray-300">Vite</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Currently Learning -->
        <div class="max-w-4xl mx-auto mb-16">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
            Currently Learning
          </h2>
          <div class="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                <div class="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                  <i class="pi pi-book text-black text-lg"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-white text-lg">Spring Boot</h3>
                  <p class="text-gray-400 text-sm">Java Framework</p>
                </div>
              </div>
              <div class="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                <div class="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                  <i class="pi pi-cloud text-black text-lg"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-white text-lg">REST APIs</h3>
                  <p class="text-gray-400 text-sm">Web Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Communication Section -->
        <div class="max-w-4xl mx-auto mb-16">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
            Communication
          </h2>
          <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-sky-400/10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 class="font-semibold text-white text-lg mb-4 flex items-center">
                  <i class="pi pi-star-fill text-yellow-400 mr-2"></i>
                  Native Proficiency
                </h3>
                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span class="text-gray-300">English</span>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span class="text-gray-300">Hindi</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-white text-lg mb-4 flex items-center">
                  <i class="pi pi-comments text-sky-400 mr-2"></i>
                  Limited Working Proficiency
                </h3>
                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <div class="w-3 h-3 bg-sky-400 rounded-full"></div>
                    <span class="text-gray-300">Punjabi</span>
                  </div>
                  <div class="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <div class="w-3 h-3 bg-sky-400 rounded-full"></div>
                    <span class="text-gray-300">Bengali</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA Section -->
        <div class="text-center bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-sky-400/20 shadow-2xl">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">Ready to work together?</h3>
          <p class="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-xl mx-auto">Let's create something amazing together. I'm always excited to take on new challenges and collaborate on innovative projects.</p>
          <RouterLink to="/contact">
            <button 
              class="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-white text-black rounded-lg transition-all duration-500 ease-out transform hover:scale-105 hover:from-blue-300 hover:via-cyan-200 hover:to-blue-100 overflow-hidden shadow-lg hover:shadow-xl"
            >
              <!-- Animated background glow -->
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              
              <!-- Subtle border effect -->
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Main content -->
              <div class="relative z-10 flex items-center justify-center space-x-2">
                <span>Start a Project</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </div>
              
              <!-- Floating particles effect -->
              <div class="absolute inset-0 pointer-events-none">
                <div class="absolute top-2 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-100"></div>
                <div class="absolute top-4 right-8 w-0.5 h-0.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-300"></div>
              </div>
            </button>
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

// Function to update title
const updateTitle = () => {
  document.title = window.innerWidth < 500 ? "About - AU" : "About - Aarav Uppal";
}

// Set up lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", updateTitle);
  updateTitle(); // Initial call
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateTitle);
})
</script>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Ensure proper text rendering */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Subtle hover animations */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Enhanced transitions */
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Mobile responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>