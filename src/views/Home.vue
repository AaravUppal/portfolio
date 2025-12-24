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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mt-8 sm:mb-20 reveal-element">
          
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

        <!-- Experience Section - Dynamic with v-for -->
        <section class="max-w-4xl mx-auto py-8 sm:py-12 lg:py-16">
          <!-- Section Header -->
          <div class="text-center mb-8 sm:mb-12 lg:mb-16 reveal-element">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent animate-gradient bg-size-200 mb-3 sm:mb-4">
              Experience
            </h2>
            <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 mx-auto rounded-full"></div>
          </div>

          <!-- Experience Timeline -->
          <div class="relative">
            <!-- Central Timeline Line -->
            <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-cyan-300 to-sky-400 transform sm:-translate-x-px"></div>

            <!-- Experience Items with v-for -->
            <div class="space-y-8 sm:space-y-12 lg:space-y-16">
              <div 
                v-for="(experience, index) in experiences" 
                :key="index"
                class="relative flex items-center reveal-element"
              >
                <!-- Timeline Dot -->
                <div 
                  class="absolute left-4 sm:left-1/2 w-3 h-3 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-gray-900 shadow-lg transform -translate-x-1/2 z-10"
                  :class="`bg-gradient-to-r ${experience.dotGradient} ${experience.shadowColor}`"
                ></div>

                <!-- Content Card - Alternating sides on desktop -->
                <div 
                  class="ml-8 sm:ml-0 sm:w-1/2"
                  :class="index % 2 === 0 ? 'sm:pr-6 lg:pr-12' : 'sm:ml-auto sm:pl-6 lg:pl-12'"
                >
                  <div 
                    class="bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                    :class="`border ${experience.borderColor} ${experience.hoverShadow}`"
                  >
                    <!-- Company Icon -->
                    <div class="flex items-center space-x-3 mb-3 sm:mb-4">
                      <div 
                        class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-lg"
                        :class="`bg-gradient-to-br ${experience.iconGradient}`"
                      >
                        <!-- Dynamic Icon SVG -->
                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path :d="experience.iconPath"/>
                        </svg>
                      </div>
                      <div>
                        <h3 
                          class="text-lg sm:text-xl font-bold text-white transition-colors duration-300"
                          :class="`group-hover:${experience.titleHoverColor}`"
                        >
                          {{ experience.title }}
                        </h3>
                        <p 
                          class="font-medium text-sm sm:text-base"
                          :class="experience.companyColor"
                        >
                          {{ experience.company }}
                        </p>
                      </div>
                    </div>
                    
                    <!-- Duration -->
                    <div class="flex items-center space-x-2 mb-3 sm:mb-4">
                      <svg 
                        class="w-3 h-3 sm:w-4 sm:h-4"
                        :class="experience.durationIconColor"
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span class="text-xs sm:text-sm text-gray-300">{{ experience.duration }}</span>
                    </div>
                    
                    <!-- Description -->
                    <p class="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                      {{ experience.description }}
                    </p>
                    
                    <!-- Skills Tags -->
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="(skill, skillIndex) in experience.skills" 
                        :key="skillIndex"
                        class="px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                        :class="`${skill.bgColor} ${skill.textColor} ${skill.borderColor}`"
                      >
                        {{ skill.name }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <!-- Enhanced Stats Section -->
        <div class="space-y-8">
          <!-- LeetCode Stats -->
          <div class="w-full flex justify-center px-4 sm:px-6 lg:px-8 reveal-element">
            <div class="w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <div class="bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-orange-400/20 shadow-xl hover:shadow-2xl hover:shadow-orange-400/20 transition-all duration-500 group">
                
                <!-- LeetCode Header -->
                <div class="flex items-center justify-center space-x-3 mb-6">
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
                  <div class="text-center sm:text-left">
                    <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-200 transition-colors duration-300">
                      LeetCode Progress
                    </h3>
                    <p class="text-orange-300 font-medium text-sm sm:text-base">Problem Solving Journey</p>
                  </div>
                </div>
                
                <!-- Stats Loading/Display -->
                <div v-if="leetcodeLoading" class="flex items-center justify-center space-x-2 mb-6">
                  <div class="animate-spin w-5 h-5 border-2 border-orange-400 border-t-transparent rounded-full"></div>
                  <span class="text-sm text-gray-300">Loading LeetCode stats...</span>
                </div>
                
                <div v-else-if="leetcodeError" class="mb-6 text-center">
                  <p class="text-sm text-red-400">{{ leetcodeError }}</p>
                </div>
                
                <div v-else-if="leetcodeStats" class="mb-6">
                  <!-- Progress Ring (Centered) -->
                  <div class="flex justify-center mb-6">
                    <div class="relative w-32 h-32 sm:w-36 sm:h-36">
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
                        <div class="text-2xl sm:text-3xl font-bold text-white">{{ leetcodeStats.totalSolved }}</div>
                        <div class="text-xs sm:text-sm text-green-400 font-medium">✓ Solved</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Stats Breakdown (Centered Grid) -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                    <!-- Easy -->
                    <div class="bg-gray-700/40 rounded-lg p-4 border border-gray-600/30 hover:border-green-400/30 transition-colors duration-300">
                      <div class="text-center">
                        <div class="text-green-400 font-semibold text-sm mb-1">Easy</div>
                        <div class="text-white font-bold text-lg">{{ leetcodeStats.easySolved }}</div>
                        <div class="text-gray-400 text-xs">/ {{ leetcodeStats.easyTotal }}</div>
                      </div>
                    </div>
                    
                    <!-- Medium -->
                    <div class="bg-gray-700/40 rounded-lg p-4 border border-gray-600/30 hover:border-yellow-400/30 transition-colors duration-300">
                      <div class="text-center">
                        <div class="text-yellow-400 font-semibold text-sm mb-1">Medium</div>
                        <div class="text-white font-bold text-lg">{{ leetcodeStats.mediumSolved }}</div>
                        <div class="text-gray-400 text-xs">/ {{ leetcodeStats.mediumTotal }}</div>
                      </div>
                    </div>
                    
                    <!-- Hard -->
                    <div class="bg-gray-700/40 rounded-lg p-4 border border-gray-600/30 hover:border-red-400/30 transition-colors duration-300">
                      <div class="text-center">
                        <div class="text-red-400 font-semibold text-sm mb-1">Hard</div>
                        <div class="text-white font-bold text-lg">{{ leetcodeStats.hardSolved }}</div>
                        <div class="text-gray-400 text-xs">/ {{ leetcodeStats.hardTotal }}</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Attempting Stats -->
                  <div class="text-center mb-4">
                    <div class="inline-flex items-center space-x-2 bg-gray-700/30 rounded-full px-4 py-2 border border-gray-600/30">
                      <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span class="text-sm text-gray-300">
                        <span class="text-blue-400 font-semibold">{{ leetcodeStats.attempting || 0 }}</span> Currently Attempting
                      </span>
                    </div>
                  </div>
                </div>
                
                <!-- Link to LeetCode Profile -->
                <div class="text-center">
                  <a 
                    href="https://leetcode.com/u/aaravuppal_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 border border-orange-400/30 hover:border-orange-400/50 rounded-lg text-orange-300 hover:text-orange-200 transition-all duration-300 group/link"
                  >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    <span class="font-medium">View LeetCode Profile</span>
                    <svg class="w-3 h-3 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Stack Section -->
          <div class="relative flex items-center reveal-element">
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
                      <img 
                        :src="tech.logo" 
                        :alt="tech.name"
                        class="w-full h-full object-contain transition-transform duration-300 group-hover/tech:scale-105"
                        loading="lazy"
                      />
                      
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
        <div class="text-center bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-sky-400/20 shadow-2xl mt-20 reveal-element">
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

// Parallax effect for image
const imageScale = ref(1)
const scrollY = ref(0)

// LeetCode reactive variables
const leetcodeStats = ref(null)
const leetcodeLoading = ref(true)
const leetcodeError = ref(null)

// Experience Timeline Data - Easily manageable in script
const experiences = ref([
  {
    title: 'Frontend Developer Intern',
    company: 'Pom Power',
    duration: 'Apr 2024 – Aug 2024 • Bengaluru',
    description: 'Co-developed Pom Power\'s productivity platform used by customers to manage tasks and schedules. Built responsive UI components with Vue.js and Tailwind CSS, focusing on user experience and performance optimization.',
    skills: [
      { name: 'Vue.js', bgColor: 'bg-sky-500/20', textColor: 'text-sky-300', borderColor: 'border border-sky-500/30' },
      { name: 'Tailwind CSS', bgColor: 'bg-cyan-500/20', textColor: 'text-cyan-300', borderColor: 'border border-cyan-500/30' },
      { name: 'Frontend', bgColor: 'bg-blue-500/20', textColor: 'text-blue-300', borderColor: 'border border-blue-500/30' }
    ],
    // Styling classes
    dotGradient: 'from-sky-400 to-cyan-300',
    shadowColor: 'shadow-sky-400/30',
    borderColor: 'border-sky-400/20',
    hoverShadow: 'hover:shadow-sky-400/20',
    iconGradient: 'from-sky-400 to-cyan-300',
    titleHoverColor: 'text-sky-200',
    companyColor: 'text-sky-300',
    durationIconColor: 'text-cyan-400',
    iconPath: 'M16 4h-1V2h-6v2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H8V6h8v12z'
  },
  {
    title: 'Internship',
    company: 'CHRIST University',
    duration: 'Jul 2024 – Sep 2024 • Bengaluru',
    description: 'Contributed as a Frontend Developer to building the official mentor-mentee platform used across CHRIST University. Helped develop dynamic user interfaces using Vue.js, Tailwind CSS, and PrimeVue to enhance student-mentor interactions university-wide.',
    skills: [
      { name: 'Vue.js', bgColor: 'bg-green-500/20', textColor: 'text-green-300', borderColor: 'border border-green-500/30' },
      { name: 'PrimeVue', bgColor: 'bg-emerald-500/20', textColor: 'text-emerald-300', borderColor: 'border border-emerald-500/30' },
      { name: 'Tailwind CSS', bgColor: 'bg-teal-500/20', textColor: 'text-teal-300', borderColor: 'border border-teal-500/30' }
    ],
    // Styling classes
    dotGradient: 'from-green-400 to-emerald-300',
    shadowColor: 'shadow-green-400/30',
    borderColor: 'border-green-400/20',
    hoverShadow: 'hover:shadow-green-400/20',
    iconGradient: 'from-green-400 to-emerald-300',
    titleHoverColor: 'text-green-200',
    companyColor: 'text-green-300',
    durationIconColor: 'text-emerald-400',
    iconPath: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z'
  },
  {
    title: 'Software Development Intern',
    company: 'MediaTek',
    duration: 'Nov 2025 – Apr 2026 • Bengaluru',
    description: 'Working on software development projects at MediaTek, contributing to cutting-edge technology solutions. Developing and optimizing software systems for semiconductor and mobile technology applications with focus on Android development.',
    skills: [
      { name: 'Android Development', bgColor: 'bg-purple-500/20', textColor: 'text-purple-300', borderColor: 'border border-purple-500/30' },
      { name: 'Java', bgColor: 'bg-indigo-500/20', textColor: 'text-indigo-300', borderColor: 'border border-indigo-500/30' },
      { name: 'Software Development', bgColor: 'bg-violet-500/20', textColor: 'text-violet-300', borderColor: 'border border-violet-500/30' }
    ],
    // Styling classes
    dotGradient: 'from-purple-400 to-indigo-300',
    shadowColor: 'shadow-purple-400/30',
    borderColor: 'border-purple-400/20',
    hoverShadow: 'hover:shadow-purple-400/20',
    iconGradient: 'from-purple-400 to-indigo-300',
    titleHoverColor: 'text-purple-200',
    companyColor: 'text-purple-300',
    durationIconColor: 'text-indigo-400',
    iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'
  },
  {
    title: 'Freelance Web Developer',
    company: 'Ashok Roadlines',
    duration: 'Dec 2025 • Freelance',
    description: 'Designed and developed a complete website for Ashok Roadlines, a transportation and logistics company. Built a modern, responsive platform using Vue.js, Tailwind CSS, and PrimeVue to showcase services and enhance their digital presence.',
    skills: [
      { name: 'Vue.js', bgColor: 'bg-amber-500/20', textColor: 'text-amber-300', borderColor: 'border border-amber-500/30' },
      { name: 'Tailwind CSS', bgColor: 'bg-orange-500/20', textColor: 'text-orange-300', borderColor: 'border border-orange-500/30' },
      { name: 'PrimeVue', bgColor: 'bg-yellow-500/20', textColor: 'text-yellow-300', borderColor: 'border border-yellow-500/30' },
      { name: 'Web Design', bgColor: 'bg-red-500/20', textColor: 'text-red-300', borderColor: 'border border-red-500/30' }
    ],
    // Styling classes
    dotGradient: 'from-amber-400 to-orange-300',
    shadowColor: 'shadow-amber-400/30',
    borderColor: 'border-amber-400/20',
    hoverShadow: 'hover:shadow-amber-400/20',
    iconGradient: 'from-amber-400 to-orange-300',
    titleHoverColor: 'text-amber-200',
    companyColor: 'text-amber-300',
    durationIconColor: 'text-orange-400',
    iconPath: 'M18 18.5a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17 1.5 1.5 0 0 1 6 15.5 1.5 1.5 0 0 1 7.5 17 1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3 3 3 0 0 0 3-3h6a3 3 0 0 0 3 3 3 3 0 0 0 3-3h2v-5l-3-4Z'
  }
])

const techStack = ref([
  {
    name: 'Java',
    color: '#f89820',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  {
    name: 'Vue.js',
    color: '#4FC08D',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Python',
    color: '#3776AB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'Kotlin',
    color: '#7F52FF',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
  },
  {
    name: 'SQL',
    color: '#00758F',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    logo: 'https://www.svgrepo.com/show/374118/tailwind.svg'
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

// Scroll Reveal Animation Setup
const setupScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal-element')
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active')
      }
    })
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions)
  
  revealElements.forEach(element => {
    observer.observe(element)
  })
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
    
    // Fallback static data
    leetcodeStats.value = {
      totalSolved: 65,
      easySolved: 43,
      mediumSolved: 20,
      hardSolved: 2,
      easyTotal: 886,
      mediumTotal: 1889,
      hardTotal: 856,
      totalQuestions: 3631,
      attempting: 14
    }
  } finally {
    leetcodeLoading.value = false
  }
}

onMounted(() => {
  updateTitle()
  window.addEventListener('resize', updateTitle)
  window.addEventListener('scroll', throttledScrollHandler, { passive: true })
  fetchLeetCodeStats()
  
  // Setup scroll reveal animations
  setupScrollReveal()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateTitle)
  window.removeEventListener('scroll', throttledScrollHandler)
})
</script>

<style scoped>
/* Scroll Reveal Animation Styles */
.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger animation for multiple elements */
.reveal-element:nth-child(1) {
  transition-delay: 0.1s;
}

.reveal-element:nth-child(2) {
  transition-delay: 0.2s;
}

.reveal-element:nth-child(3) {
  transition-delay: 0.3s;
}

.reveal-element:nth-child(4) {
  transition-delay: 0.4s;
}

.reveal-element:nth-child(5) {
  transition-delay: 0.5s;
}

.reveal-element:nth-child(6) {
  transition-delay: 0.6s;
}

/* Existing animations */
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  animation: gradient 6s ease infinite;
}

.bg-size-200 {
  background-size: 200% 200%;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  50% {
    transform: translateY(-20px) rotate(0deg);
  }
  75% {
    transform: translateY(-10px) rotate(-5deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Tech logo animation */
@keyframes techFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.tech-logo {
  animation: techFloat 3s ease-in-out infinite;
}
</style>
