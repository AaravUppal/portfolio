<template>
  <div class="dark transition-colors duration-500">
    <!-- Enhanced Background with animated gradient -->
    <div class="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-1000"></div>
    
    <!-- Enhanced animated background with graph cubes and lightning -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Enhanced Graph cubes with glow effect -->
      <div class="absolute top-10 left-10 w-12 h-12 sm:w-16 sm:h-16 border border-sky-400/30 rotate-45 animate-pulse opacity-40 shadow-lg shadow-sky-400/20"></div>
      <div class="absolute top-32 right-20 w-10 h-10 sm:w-12 sm:h-12 border border-cyan-300/25 rotate-12 animate-pulse opacity-30 delay-1000 shadow-md shadow-cyan-300/20"></div>
      <div class="absolute bottom-40 left-1/4 w-16 h-16 sm:w-20 sm:h-20 border border-sky-300/20 rotate-6 animate-pulse opacity-25 delay-2000 shadow-lg shadow-sky-300/15"></div>
      <div class="absolute top-1/2 right-1/3 w-12 h-12 sm:w-14 sm:h-14 border border-cyan-400/30 rotate-45 animate-pulse opacity-35 delay-3000 shadow-md shadow-cyan-400/20"></div>
      <div class="absolute bottom-20 right-10 w-14 h-14 sm:w-18 sm:h-18 border border-sky-200/20 rotate-12 animate-pulse opacity-20 delay-4000 shadow-lg shadow-sky-200/15"></div>
      
      <!-- Enhanced Lightning elements with better gradients -->
      <div class="absolute top-20 left-1/3 w-1 h-24 sm:h-32 bg-gradient-to-b from-sky-400/40 via-cyan-300/30 to-transparent rotate-12 animate-pulse opacity-30 shadow-lg shadow-sky-400/20"></div>
      <div class="absolute bottom-32 right-1/4 w-1 h-20 sm:h-28 bg-gradient-to-b from-cyan-300/35 via-sky-300/25 to-transparent rotate-45 animate-pulse opacity-25 delay-1500 shadow-md shadow-cyan-300/20"></div>
      <div class="absolute top-1/3 right-10 w-1 h-18 sm:h-24 bg-gradient-to-b from-sky-300/30 via-cyan-200/20 to-transparent rotate-6 animate-pulse opacity-20 delay-2500 shadow-lg shadow-sky-300/15"></div>
      
      <!-- Enhanced Fading particles with glow -->
      <div class="absolute top-16 left-16 w-2 h-2 bg-sky-400/50 rounded-full animate-pulse opacity-40 shadow-lg shadow-sky-400/30"></div>
      <div class="absolute top-40 right-32 w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse opacity-30 delay-1000 shadow-md shadow-cyan-300/25"></div>
      <div class="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-sky-300/30 rounded-full animate-pulse opacity-25 delay-2000 shadow-lg shadow-sky-300/20"></div>
      
      <!-- New floating elements -->
      <div class="absolute top-1/4 left-1/2 w-6 h-6 sm:w-8 sm:h-8 border border-sky-500/20 rounded-full animate-float opacity-20 delay-500"></div>
      <div class="absolute bottom-1/3 right-1/2 w-5 h-5 sm:w-6 sm:h-6 border border-cyan-400/25 rounded-full animate-float opacity-15 delay-2500"></div>
    </div>

    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- Hero Section - Unified responsive design -->
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-20 flex-grow">
        
        <!-- Main Hero Layout - Responsive Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mt-8 sm:mb-20">
          
          <!-- Left Side - Introduction (Mobile: Top, Desktop: Left) -->
          <div class="order-2 lg:order-1 text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8">
            <!-- Enhanced Title with better gradient -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-white via-sky-200 via-cyan-200 to-white bg-clip-text text-transparent leading-tight animate-gradient bg-size-200">
              Aarav Uppal
            </h1>
            
            <!-- Enhanced subtitle with typewriter effect -->
            <div class="space-y-2 sm:space-y-3 lg:space-y-4">
              <p class="text-xl sm:text-2xl md:text-3xl text-sky-300 font-light">
                Software Developer
              </p>
            </div>
            
            <!-- Enhanced Introduction Text -->
            <div class="space-y-4 sm:space-y-6">
              <p class="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Welcome to my digital space! I'm a passionate developer who loves creating 
                innovative solutions and pushing the boundaries of what's possible with code.
              </p>
              <p class="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                When I'm not coding, you'll find me exploring new technologies, 
                collaborating on exciting projects, and always learning something new.
              </p>
            </div>
            
            <!-- Enhanced action buttons - Responsive -->
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-2 sm:pt-4">
              <RouterLink to="/projects" class="w-full sm:w-auto">
                <button 
                  class="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-white text-black rounded-lg transition-all duration-500 ease-out transform hover:scale-105 hover:from-blue-300 hover:via-cyan-200 hover:to-blue-100 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-400/30 w-full sm:w-auto"
                >
                  <!-- Animated background glow -->
                  <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  
                  <!-- Subtle border effect -->
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <!-- Main content -->
                  <div class="relative z-10 flex items-center justify-center space-x-2">
                    <span>View My Work</span>
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
              
              <RouterLink to="/about" class="w-full sm:w-auto">
                <button 
                  class="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent text-blue-100 border-2 border-blue-500/50 rounded-lg transition-all duration-500 ease-out transform hover:scale-105 hover:text-blue-300 hover:border-blue-300/70 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-400/20 w-full sm:w-auto"
                >
                  <!-- Animated background effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  
                  <!-- Subtle glow -->
                  <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <!-- Main content -->
                  <div class="relative z-10 flex items-center justify-center space-x-2">
                    <span>About Me</span>
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </button>
              </RouterLink>
            </div>
            
            <!-- Social links -->
            <div class="flex justify-center lg:justify-start gap-6 pt-2 sm:pt-4">
              <a href="https://github.com/AaravUppal" class="text-gray-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
                <i class="pi pi-github text-lg sm:text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/aarav-uppal/" class="text-gray-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
                <i class="pi pi-linkedin text-lg sm:text-xl"></i>
              </a>
              <a href="mailto:uppalaarav3@gmail.com" class="text-gray-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
                <i class="pi pi-envelope text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>
          
          <!-- Right Side - Enhanced Profile Image (Mobile: Top, Desktop: Right) -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative parallax-container">
              <!-- Animated border layers -->
              <div class="parallax-image-wrapper relative" :style="{ transform: `scale(${imageScale})` }">
                <!-- Outer glow effect -->
                <div class="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-sky-400/20 via-cyan-300/20 to-sky-400/20 rounded-2xl sm:rounded-3xl blur-xl animate-pulse"></div>
                
                <!-- Animated border frame -->
                <div class="relative border-animation-wrapper">
                  <div class="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-sky-400 via-cyan-300 via-sky-200 to-sky-400 rounded-xl sm:rounded-2xl opacity-75 animate-gradient bg-size-200"></div>
                  <div class="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-cyan-300 via-sky-400 via-cyan-200 to-cyan-300 rounded-xl sm:rounded-2xl opacity-50 animate-gradient bg-size-200" style="animation-delay: 1s;"></div>
                  <div class="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-sky-200 via-cyan-400 via-sky-300 to-sky-200 rounded-xl sm:rounded-2xl opacity-25 animate-gradient bg-size-200" style="animation-delay: 2s;"></div>
                  
                  <!-- Inner frame -->
                  <div class="relative bg-gray-800 rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-2xl">
                    <!-- Image container - Responsive sizing -->
                    <div class="w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 lg:w-80 lg:h-96 xl:w-96 xl:h-[28rem] rounded-md sm:rounded-lg overflow-hidden relative group">
                      <img 
  src="@/assets/dp.jpg" 
  alt="Aarav Uppal - Profile" 
  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
/>
                      <!-- Overlay effects -->
                      <div class="absolute inset-0 bg-gradient-to-t from-sky-900/30 via-transparent to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      <!-- Floating particles around image -->
                      <div class="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-sky-400/60 rounded-full animate-float opacity-70"></div>
                      <div class="absolute -top-0.5 sm:-top-1 -right-1.5 sm:-right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-300/50 rounded-full animate-float opacity-60" style="animation-delay: 1s;"></div>
                      <div class="absolute -bottom-1 sm:-bottom-2 -left-1.5 sm:-left-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-300/40 rounded-full animate-float opacity-50" style="animation-delay: 2s;"></div>
                      <div class="absolute -bottom-0.5 sm:-bottom-1 -right-1 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400/50 rounded-full animate-float opacity-60" style="animation-delay: 3s;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Section - Enhanced and Minimalistic -->
        <section class="max-w-4xl mx-auto py-8 sm:py-12 lg:py-16">
          <!-- Section Header -->
          <div class="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent animate-gradient bg-size-200 mb-3 sm:mb-4">
              Experience
            </h2>
            <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 mx-auto rounded-full"></div>
          </div>

          <!-- Experience Timeline -->
          <div class="relative">
            <!-- Central Timeline Line -->
            <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-cyan-300 to-sky-400 transform sm:-translate-x-px"></div>

            <!-- Experience Items -->
            <div class="space-y-8 sm:space-y-12 lg:space-y-16">
              <!-- Pom Power -->
              <div class="relative flex items-center">
                <!-- Timeline Dot -->
                <div class="absolute left-4 sm:left-1/2 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full border-2 sm:border-4 border-gray-900 shadow-lg shadow-sky-400/30 transform -translate-x-1/2 z-10"></div>

                <!-- Content Card -->
                <div class="ml-8 sm:ml-0 sm:w-1/2 sm:pr-6 lg:pr-12">
                  <div class="bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-sky-400/20 shadow-xl hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-500 group">
                    <!-- Company Icon -->
                    <div class="flex items-center space-x-3 mb-3 sm:mb-4">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-lg flex items-center justify-center shadow-lg">
                        <!-- Battery/Power Icon -->
                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 4h-1V2h-6v2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H8V6h8v12z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-sky-200 transition-colors duration-300">
                          Frontend Developer Intern
                        </h3>
                        <p class="text-sky-300 font-medium text-sm sm:text-base">Pom Power</p>
                      </div>
                    </div>
                    
                    <!-- Duration -->
                    <div class="flex items-center space-x-2 mb-3 sm:mb-4">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span class="text-xs sm:text-sm text-gray-300">Apr 2024 – Aug 2024 • Bengaluru</span>
                    </div>
                    
                    <!-- Description -->
                    <p class="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                      Co-developed Pom Power's productivity platform used by customers to manage tasks and schedules. Built responsive UI components with Vue.js and Tailwind CSS, focusing on user experience and performance optimization.
                    </p>
                    
                    <!-- Skills Tags -->
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 sm:px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium border border-sky-500/30">Vue.js</span>
                      <span class="px-2 sm:px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">Tailwind CSS</span>
                      <span class="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">Frontend</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CHRIST University -->
              <div class="relative flex items-center">
                <!-- Timeline Dot -->
                <div class="absolute left-4 sm:left-1/2 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full border-2 sm:border-4 border-gray-900 shadow-lg shadow-green-400/30 transform -translate-x-1/2 z-10"></div>

                <!-- Content Card -->
                <div class="ml-8 sm:ml-0 sm:w-1/2 sm:ml-auto sm:pl-6 lg:pl-12">
                  <div class="bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-400/20 shadow-xl hover:shadow-2xl hover:shadow-green-400/20 transition-all duration-500 group">
                    <!-- Company Icon -->
                    <div class="flex items-center space-x-3 mb-3 sm:mb-4">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-300 rounded-lg flex items-center justify-center shadow-lg">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-green-200 transition-colors duration-300">
                          Internship
                        </h3>
                        <p class="text-green-300 font-medium text-sm sm:text-base">CHRIST University</p>
                      </div>
                    </div>
                    
                    <!-- Duration -->
                    <div class="flex items-center space-x-2 mb-3 sm:mb-4">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span class="text-xs sm:text-sm text-gray-300">Jul 2024 – Sep 2024 • Bengaluru</span>
                    </div>
                    
                    <!-- Description -->
                    <p class="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                      Contributed as a Frontend Developer to building the official mentor-mentee platform used across CHRIST University. Helped develop dynamic user interfaces using Vue.js, Tailwind CSS, and PrimeVue to enhance student-mentor interactions university-wide.
                    </p>
                    
                    <!-- Skills Tags -->
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 sm:px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">Vue.js</span>
                      <span class="px-2 sm:px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">PrimeVue</span>
                      <span class="px-2 sm:px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-medium border border-teal-500/30">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Add this new section after your existing experience items in the timeline -->

        <div class="space-y-8">
    <!-- LeetCode Stats -->
    <div class="relative flex items-center">
      <div class="ml-8 sm:ml-0 sm:w-1/2 sm:pr-6 lg:pr-12">
        <div class="bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-orange-400/20 shadow-xl hover:shadow-2xl hover:shadow-orange-400/20 transition-all duration-500 group">
          <!-- LeetCode Header -->
          <div class="flex items-center space-x-3 mb-3 sm:mb-4">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-[#1A1A1A] rounded-lg flex items-center justify-center shadow-md">
              <!-- LeetCode Logo SVG -->
              <svg class="w-7 h-7" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.5 64L63 32.5" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
                <path d="M63 32.5L96.5 64" stroke="#FFA116" stroke-width="10" stroke-linecap="round"/>
                <path d="M96.5 64L63 95.5" stroke="#FFA116" stroke-width="10" stroke-linecap="round"/>
                <path d="M63 95.5L31.5 64" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
                <path d="M50 64H78" stroke="#939393" stroke-width="10" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-orange-200 transition-colors duration-300">
                LeetCode Progress
              </h3>
              <p class="text-orange-300 font-medium text-sm sm:text-base">Problem Solving Journey</p>
            </div>
          </div>
          
          <!-- Stats Loading/Display -->
          <div v-if="leetcodeLoading" class="flex items-center space-x-2 mb-4">
            <div class="animate-spin w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full"></div>
            <span class="text-sm text-gray-300">Loading LeetCode stats...</span>
          </div>
          
          <div v-else-if="leetcodeError" class="mb-4">
            <p class="text-sm text-red-400">{{ leetcodeError }}</p>
          </div>
          
          <div v-else-if="leetcodeStats" class="mb-4">
            <div class="flex items-center justify-between">
              <!-- Progress Ring (Left Side) -->
              <div class="flex justify-center">
                <div class="relative w-24 h-24 sm:w-28 sm:h-28">
                  <!-- Background Circle -->
                  <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <!-- Background ring -->
                    <circle cx="50" cy="50" r="40" stroke="#374151" stroke-width="8" fill="none" opacity="0.3"/>
                    
                    <!-- Easy solved ring -->
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#22c55e" 
                      stroke-width="8" 
                      fill="none"
                      :stroke-dasharray="`${(leetcodeStats.easySolved / leetcodeStats.totalQuestions) * 251.2} 251.2`"
                      stroke-linecap="round"
                      class="transition-all duration-1000 ease-out"
                    />
                    
                    <!-- Medium solved ring -->
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#eab308" 
                      stroke-width="8" 
                      fill="none"
                      :stroke-dasharray="`${(leetcodeStats.mediumSolved / leetcodeStats.totalQuestions) * 251.2} 251.2`"
                      :stroke-dashoffset="`${-((leetcodeStats.easySolved / leetcodeStats.totalQuestions) * 251.2)}`"
                      stroke-linecap="round"
                      class="transition-all duration-1000 ease-out delay-300"
                    />
                    
                    <!-- Hard solved ring -->
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#ef4444" 
                      stroke-width="8" 
                      fill="none"
                      :stroke-dasharray="`${(leetcodeStats.hardSolved / leetcodeStats.totalQuestions) * 251.2} 251.2`"
                      :stroke-dashoffset="`${-(((leetcodeStats.easySolved + leetcodeStats.mediumSolved) / leetcodeStats.totalQuestions) * 251.2)}`"
                      stroke-linecap="round"
                      class="transition-all duration-1000 ease-out delay-600"
                    />
                  </svg>
                  
                  <!-- Center Content -->
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <div class="text-lg sm:text-xl font-bold text-white">{{ leetcodeStats.totalSolved }}</div>
                    <div class="text-xs text-green-400">✓ Solved</div>
                  </div>
                </div>
              </div>
              
              <!-- Stats Breakdown (Right Side) -->
              <div class="flex flex-col space-y-2 flex-1 ml-4">
                <!-- Easy -->
                <div class="bg-gray-700/30 rounded-lg p-2 border border-gray-600/30">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-green-400 font-medium">Easy</span>
                    <span class="text-sm text-white font-semibold">{{ leetcodeStats.easySolved }}/{{ leetcodeStats.easyTotal }}</span>
                  </div>
                </div>
                
                <!-- Medium -->
                <div class="bg-gray-700/30 rounded-lg p-2 border border-gray-600/30">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-yellow-400 font-medium">Med.</span>
                    <span class="text-sm text-white font-semibold">{{ leetcodeStats.mediumSolved }}/{{ leetcodeStats.mediumTotal }}</span>
                  </div>
                </div>
                
                <!-- Hard -->
                <div class="bg-gray-700/30 rounded-lg p-2 border border-gray-600/30">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-red-400 font-medium">Hard</span>
                    <span class="text-sm text-white font-semibold">{{ leetcodeStats.hardSolved }}/{{ leetcodeStats.hardTotal }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Attempting Stats -->
            <div class="mt-4 text-center">
              <span class="text-sm text-gray-400">{{ leetcodeStats.attempting || 0 }} Attempting</span>
            </div>
          </div>
          
          <!-- Link to LeetCode Profile -->
          <div class="mt-4 mb-4">
            <a 
              href="https://leetcode.com/u/aaravuppal_/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm text-orange-300 hover:text-orange-200 transition-colors duration-300 group/link"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              View LeetCode Profile
              <svg class="w-3 h-3 ml-1 transition-transform duration-300 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Tech Stack Section -->
    <div class="relative flex items-center">
      <div class="w-full">
        <div class="bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-400/20 shadow-xl hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-500 group">
          <!-- Tech Stack Header -->
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-[#1A1A1A] rounded-lg flex items-center justify-center shadow-md">
              <svg class="w-7 h-7" fill="none" stroke="#60A5FA" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                Tech Stack
              </h3>
              <p class="text-blue-300 font-medium text-sm sm:text-base">Languages & Frameworks</p>
            </div>
          </div>
          
          <!-- Floating Tech Logos -->
          <div class="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div
              v-for="(tech, index) in techStack"
              :key="tech.name"
              class="tech-logo group/tech cursor-pointer"
              :style="{ animationDelay: `${index * -0.5}s` }"
            >
              <div 
                class="relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-700/30 rounded-xl border border-gray-600/30 p-3 transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:shadow-lg hover:border-opacity-60"
                :style="{ borderColor: `${tech.color}40` }"
              >
                <div class="w-full h-full transition-transform duration-300 group-hover/tech:scale-105" v-html="tech.svg">
                </div>
                
                <!-- Tooltip -->
                <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  {{ tech.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

        <!-- CTA Section - Unified responsive design -->
        <div class="text-center bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-sky-400/20 shadow-2xl mt-20">
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { RouterLink } from 'vue-router'

// Parallax effect for image
const imageScale = ref(1)
const scrollY = ref(0)

// LeetCode reactive variables
const leetcodeStats = ref(null)
const leetcodeLoading = ref(true)
const leetcodeError = ref(null)
const leetcodeChart = ref(null)

const techStack = ref([
{
  name: 'Java',
  color: '#f89820',
  svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#f89820" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969z"/>
    <path fill="#f89820" d="M44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="#f89820" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
    <path fill="#5382a1" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468z"/>
    <path fill="#f89820" d="M85.384 70.174s-22.705 5.389-8.031 7.346c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.642-4.641 19.642-4.641z"/>
    <path fill="#f89820" d="M90.609 93.041c23.33-12.134 12.546-23.857 5.016-22.285-1.848.385-2.677.719-2.677.719s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.484-.616z"/>
    <path fill="#f89820" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
    <path fill="#5382a1" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>`
},
    {
    name: 'Vue.js',
    color: '#4FC08D',
    svg: `<svg viewBox="0 0 128 128">
      <path fill="#4FC08D" d="M78.8 10L64 35.4 49.2 10H0l64 110L128 10z"/>
      <path fill="#35495E" d="M78.8 10L64 35.4 49.2 10H25.6L64 76l38.4-66z"/>
    </svg>`
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: `<svg viewBox="0 0 128 128">
      <rect width="128" height="128" rx="6" ry="6" fill="#F7DF1E"/>
      <path fill="#000" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.402-3.498 9.64-5.724 0 0-1.152-1.837-1.528-2.415-3.409-5.087-7.793-7.599-15.064-7.308l-3.777.4c-3.674.72-7.2 2.69-9.304 5.27-7.27 7.57-6.68 20.91 1.82 27.64 6.76 6.31 16.59 7.16 17.59 12.98 1.48 6.28-4.43 8.16-9.6 7.65-8.03-1.19-11.44-4.02-15.55-9.4L65.8 112.7c7.53 8.13 17.99 12.1 31.85 11.35 8.9-.54 17.24-2.97 21.33-11.78 4.56-8.63 2.26-19.45-2.61-26.52z"/>
      <path fill="#000" d="M48.71 44.4h10.84v30.5c0 12.56-7.33 18.3-18 18.3-9.64 0-15.22-5-18.08-11.06l8.84-5.35c2.28 4.05 4.33 7.5 9.32 7.5 4.76 0 7.79-1.87 7.79-9.14V44.4h-.71z"/>
    </svg>`
  },
  {
    name: 'Python',
    color: '#3776AB',
    svg: `<svg viewBox="0 0 128 128">
      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568-.015 707.817)">
        <stop offset="0" stop-color="#5A9FD4"/>
        <stop offset="1" stop-color="#306998"/>
      </linearGradient>
      <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568-.015 707.817)">
        <stop offset="0" stop-color="#FFD43B"/>
        <stop offset="1" stop-color="#FFE873"/>
      </linearGradient>
      <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
      <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521H91.682zm-13.632 64.181c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
      <radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"/>
        <stop offset="1" stop-color="#7F7F7F" stop-opacity="0"/>
      </radialGradient>
      <path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.816-6.417 33.092-6.417c18.275 0 33.091 2.874 33.091 6.417z"/>
    </svg>`
  },
  {
    name: 'Kotlin',
    color: '#7F52FF',
    svg: `<svg viewBox="0 0 128 128">
      <path fill="#7F52FF" d="M112 112H64L112 64z"/>
      <path fill="#F88909" d="M16 112L64 64L112 16H16z"/>
      <path fill="#7F52FF" d="M112 16H64L16 64V16z"/>
    </svg>`
  },
  {
  name: 'SQL',
  color: '#00758F',
  svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#00758F">
    <ellipse cx="32" cy="14" rx="20" ry="6"/>
    <rect x="12" y="14" width="40" height="30" rx="0" ry="0"/>
    <ellipse cx="32" cy="44" rx="20" ry="6"/>
    <text x="32" y="36" font-size="12" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold">SQL</text>
  </svg>`
},
  {
  name: 'Tailwind CSS',
  color: '#06B6D4',
  svg: `<svg viewBox="0 0 128 128" fill="#06B6D4">
    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/>
  </svg>`
}
])

// Function to update title based on screen size
const updateTitle = () => {
  document.title = window.innerWidth < 500 ? "AU" : "Aarav Uppal";
}

// Parallax scroll handler
const handleScroll = () => {
  scrollY.value = window.scrollY
  
  // Calculate scale based on scroll position
  const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1)
  const scrollPercent = Math.min(scrollY.value / maxScroll, 1)
  
  // Scale from 1 to 0.7 as user scrolls down (more subtle effect)
  imageScale.value = 1 - (scrollPercent * 0.3)
}

// Throttled scroll handler for better performance
let ticking = false
const throttledScrollHandler = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

// LeetCode API function
const fetchLeetCodeStats = async () => {
  try {
    leetcodeLoading.value = true
    leetcodeError.value = null
    
    // Using a public LeetCode stats API
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/aaravuppal_`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode stats')
    }
    
    const data = await response.json()
    
    leetcodeStats.value = {
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      easyTotal: data.totalEasy || 886,
      mediumTotal: data.totalMedium || 1889,
      hardTotal: data.totalHard || 856,
      totalQuestions: data.totalQuestions || 3631,
      attempting: data.attempting || 14,
      ranking: data.ranking || 'N/A'
    }
    
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error)
    leetcodeError.value = 'Unable to load LeetCode stats'
    
    // Fallback static data (replace with your actual stats)
    leetcodeStats.value = {
      totalSolved: 65, // Replace with your actual count
      easySolved: 43,   // Replace with your actual count
      mediumSolved: 20, // Replace with your actual count
      hardSolved: 2,   // Replace with your actual count
      easyTotal: 886,
      mediumTotal: 1889,
      hardTotal: 856,
      totalQuestions: 3631,
      attempting: 14,
      ranking: 'N/A'
    }
  } finally {
    leetcodeLoading.value = false
  }
}

// Create pie chart function
const createLeetCodeChart = () => {
  if (!leetcodeChart.value || !leetcodeStats.value) return
  
  const canvas = leetcodeChart.value
  const ctx = canvas.getContext('2d')
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const radius = Math.min(centerX, centerY) - 10
  
  const data = [
    { label: 'Easy', value: leetcodeStats.value.easySolved, color: '#22c55e' },
    { label: 'Medium', value: leetcodeStats.value.mediumSolved, color: '#eab308' },
    { label: 'Hard', value: leetcodeStats.value.hardSolved, color: '#ef4444' }
  ]
  
  const total = data.reduce((sum, item) => sum + item.value, 0)
  
  if (total === 0) return
  
  let currentAngle = -Math.PI / 2 // Start from top
  
  data.forEach(item => {
    const sliceAngle = (item.value / total) * 2 * Math.PI
    
    // Draw slice
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
    ctx.closePath()
    ctx.fillStyle = item.color
    ctx.fill()
    
    // Add subtle border
    ctx.strokeStyle = '#1f2937'
    ctx.lineWidth = 2
    ctx.stroke()
    
    currentAngle += sliceAngle
  })
  
  // Add center circle for donut effect
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
  ctx.fillStyle = '#1f2937'
  ctx.fill()
  
  // Add total count in center
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 16px system-ui'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(total.toString(), centerX, centerY - 5)
  
  ctx.font = '10px system-ui'
  ctx.fillStyle = '#9ca3af'
  ctx.fillText('Solved', centerX, centerY + 10)
}

// Set up lifecycle hooks
onMounted(() => {
  // Add event listeners
  window.addEventListener("resize", updateTitle, { passive: true })
  window.addEventListener("scroll", throttledScrollHandler, { passive: true })
  
  // Initial calls
  updateTitle()
  handleScroll()
  
  // Fetch LeetCode stats
  fetchLeetCodeStats()
  
  // Create chart after stats are loaded
  nextTick(() => {
    if (leetcodeStats.value) {
      createLeetCodeChart()
    }
  })
  
  // Add custom animations to document head if not already present
  if (!document.querySelector('#custom-animations')) {
    const style = document.createElement('style')
    style.id = 'custom-animations'
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(5deg); }
      }
      
      @keyframes levitate {
        0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
        50% { transform: translateY(-20px) rotate(10deg) scale(1.1); }
      }
      
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(3deg); }
      }
      
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.8; }
      }
      
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes spin-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
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
      
      @keyframes fade-in-delay {
        0% { opacity: 0; transform: translateY(20px); }
        60% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fade-in-delay-2 {
        0% { opacity: 0; transform: translateY(20px); }
        70% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-levitate {
        animation: levitate 4s ease-in-out infinite;
      }
      
      .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
      }
      
      .animate-gradient {
        animation: gradient 3s ease infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      
      .animate-spin-reverse {
        animation: spin-reverse 15s linear infinite;
      }
      
      .animate-shimmer {
        animation: shimmer 2s ease-in-out infinite;
      }
      
      .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
      }
      
      .animate-slide-up {
        animation: slide-up 1s ease-out forwards;
      }
      
      .animate-fade-in-delay {
        animation: fade-in-delay 2s ease-out forwards;
      }
      
      .animate-fade-in-delay-2 {
        animation: fade-in-delay-2 2.5s ease-out forwards;
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 1s ease-out forwards;
      }
      
      /* Tech stack specific animations */
      .tech-logo {
        transition: all 0.3s ease;
        animation-delay: var(--delay);
      }
      
      .tech-logo:hover {
        animation: levitate 2s ease-in-out infinite;
      }
      
      .bg-size-200 {
        background-size: 200% 200%;
      }
      
      .parallax-container {
        transform-style: preserve-3d;
      }
      
      .parallax-image-wrapper {
        transition: transform 0.1s ease-out;
        will-change: transform;
      }
      
      .border-animation-wrapper {
        position: relative;
      }
      
      /* Smooth transitions for better performance */
      * {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Optimize for mobile performance */
      @media (max-width: 768px) {
        .parallax-image-wrapper {
          transition: transform 0.2s ease-out;
        }
        
        .animate-spin-slow {
          animation-duration: 30s;
        }
        
        .animate-spin-reverse {
          animation-duration: 25s;
        }
      }
    `
    document.head.appendChild(style)
  }
})

// Watch for leetcodeStats changes to update chart
const watchLeetcodeStats = () => {
  if (leetcodeStats.value && !leetcodeLoading.value) {
    nextTick(() => {
      createLeetCodeChart()
    })
  }
}

// Cleanup on unmount
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateTitle)
  window.removeEventListener("scroll", throttledScrollHandler)
  
  // Remove custom styles if component is destroyed
  const customStyles = document.querySelector('#custom-animations')
  if (customStyles) {
    customStyles.remove()
  }
})

// Expose reactive variables for template use
defineExpose({
  imageScale,
  scrollY,
  leetcodeStats,
  leetcodeLoading,
  leetcodeError,
  leetcodeChart,
  techStack,
  createLeetCodeChart,
  fetchLeetCodeStats
})
</script>