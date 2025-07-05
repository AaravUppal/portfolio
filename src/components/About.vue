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
          <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <!-- Left Column - Image -->
            <div class="flex justify-center lg:justify-start">
              <div class="relative">
                <!-- Subtle glow effect -->
                <div class="absolute -inset-4 bg-gradient-to-r from-sky-400/10 to-cyan-300/10 rounded-2xl blur-xl"></div>
                
                <!-- Image container -->
                <div class="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-sky-400/20">
                  <div class="w-72 h-96 sm:w-80 sm:h-[28rem] rounded-lg overflow-hidden">
                    <img 
                      src="../assets/jatt.jpg" 
                      alt="Aarav Uppal" 
                      class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Right Column - Content -->
            <div class="space-y-8 lg:space-y-12">
              <!-- Introduction -->
              <div class="space-y-6">
                <h2 class="text-2xl sm:text-3xl font-semibold text-white">
                  Hi, I'm Aarav
                </h2>
                <div class="space-y-4 text-gray-300 leading-relaxed">
                  <p class="text-lg">
                    I'm a passionate developer who thrives on creating innovative solutions and pushing the boundaries of what's possible with technology.
                  </p>
                  <p>
                    My journey in tech began with curiosity and has evolved into a deep love for crafting digital experiences that make a difference. I believe in the power of clean code, thoughtful design, and continuous learning.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
  
              <!-- Skills Section -->
              <div class="space-y-6">
                <h3 class="text-xl sm:text-2xl font-semibold text-white">
                  What I Do
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-sky-400/10 hover:border-sky-400/20 transition-colors duration-300">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-lg flex items-center justify-center">
                        <i class="pi pi-code text-black text-sm"></i>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white">Development</h4>
                        <p class="text-gray-400 text-sm">Full-stack solutions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-sky-400/10 hover:border-sky-400/20 transition-colors duration-300">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-lg flex items-center justify-center">
                        <i class="pi pi-palette text-black text-sm"></i>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white">Design</h4>
                        <p class="text-gray-400 text-sm">User experiences</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-sky-400/10 hover:border-sky-400/20 transition-colors duration-300">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-lg flex items-center justify-center">
                        <i class="pi pi-mobile text-black text-sm"></i>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white">Mobile</h4>
                        <p class="text-gray-400 text-sm">Cross-platform apps</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-sky-400/10 hover:border-sky-400/20 transition-colors duration-300">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-lg flex items-center justify-center">
                        <i class="pi pi-cloud text-black text-sm"></i>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white">Cloud</h4>
                        <p class="text-gray-400 text-sm">Scalable solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Values Section -->
              <div class="space-y-6">
                <h3 class="text-xl sm:text-2xl font-semibold text-white">
                  My Values
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <div class="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Quality First</h4>
                      <p class="text-gray-400 text-sm">I believe in writing clean, maintainable code that stands the test of time.</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <div class="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Continuous Learning</h4>
                      <p class="text-gray-400 text-sm">Technology evolves rapidly, and I'm committed to staying at the forefront.</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <div class="w-2 h-2 bg-sky-300 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Collaboration</h4>
                      <p class="text-gray-400 text-sm">The best solutions come from working together and sharing knowledge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Bottom CTA Section -->
          <div class="text-center mt-20 sm:mt-32">
            <div class="bg-gradient-to-r from-gray-800/30 via-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-sky-400/10 max-w-2xl mx-auto">
              <h3 class="text-2xl sm:text-3xl font-bold mb-4 text-white">Let's Build Something Great</h3>
              <p class="text-gray-300 mb-8 max-w-md mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <RouterLink to="/projects">
                  <Button 
                    label="View My Work" 
                    class="!bg-gradient-to-r !from-sky-400 !to-cyan-300 hover:!from-sky-500 hover:!to-cyan-400 !text-black !border-0 !px-8 !py-3 !text-base !font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    rounded
                    icon="pi pi-arrow-right"
                    iconPos="right"
                  />
                </RouterLink>
                <RouterLink to="/contact">
                  <Button 
                    label="Get In Touch"
                    class="!bg-transparent !text-sky-300 !border-2 !border-sky-400 hover:!bg-sky-400/10 hover:!border-sky-300 !px-8 !py-3 !text-base !font-semibold transition-all duration-300 transform hover:-translate-y-1"
                    rounded
                    icon="pi pi-send"
                    iconPos="right"
                  />
                </RouterLink>
              </div>
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