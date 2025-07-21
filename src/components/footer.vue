<template>
  <footer class="relative backdrop-blur-lg bg-black/98 border-t border-blue-500/30 mt-20 overflow-hidden">
    <!-- Dynamic animated background -->
    <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    
    <!-- Lightning animated mesh gradient -->
    <div class="absolute inset-0 opacity-40">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-cyan-400/25 to-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-400/25 via-blue-300/20 to-white/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 3s;"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/20 via-cyan-300/15 to-white/10 rounded-full blur-2xl animate-pulse" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-white/15 via-cyan-200/10 to-blue-400/15 rounded-full blur-xl animate-pulse" style="animation-delay: 4s;"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Main Brand Section -->
        <div class="lg:col-span-2 space-y-6">
          <div class="group relative">
            <h3 class="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent group-hover:scale-105 transition-all duration-500 cursor-default">
              Aarav Uppal
            </h3>
            <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-white/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-white group-hover:w-full transition-all duration-700 rounded-full shadow-lg shadow-blue-500/50"></div>
          </div>
          
          <p class="text-gray-300 mb-8 max-w-lg text-base leading-relaxed">
            Computer Science Student & Aspiring Software Developer passionate about creating innovative solutions with Java, Python, SQL, and Web Technologies.
          </p>
          
          <!-- Enhanced Social Media Icons with Lightning Blue -->
          <div class="flex flex-wrap gap-4">
            <!-- GitHub -->
            <a href="https://github.com/AaravUppal" target="_blank" rel="noopener noreferrer" class="group relative p-4 bg-black/80 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-white hover:text-black transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-3 hover:shadow-2xl hover:shadow-blue-500/50 border border-blue-500/30 hover:border-white/50">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-white/0 group-hover:from-blue-500/30 group-hover:via-cyan-400/25 group-hover:to-white/20 transition-all duration-500"></div>
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-white/0 group-hover:from-blue-500/40 group-hover:via-cyan-400/30 group-hover:to-white/25 blur-lg transition-all duration-500"></div>
            </a>
            
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/aarav-uppal/" target="_blank" rel="noopener noreferrer" class="group relative p-4 bg-black/80 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-500 hover:to-blue-200 hover:text-black transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:-rotate-3 hover:shadow-2xl hover:shadow-cyan-500/50 border border-blue-500/30 hover:border-white/50">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-200/0 group-hover:from-blue-600/30 group-hover:via-cyan-500/25 group-hover:to-blue-200/20 transition-all duration-500"></div>
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-200/0 group-hover:from-blue-600/40 group-hover:via-cyan-500/30 group-hover:to-blue-200/25 blur-lg transition-all duration-500"></div>
            </a>
            
            <!-- Email -->
            <a href="mailto:uppalaarav3@gmail.com" class="group relative p-4 bg-black/80 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-300 hover:to-white hover:text-black transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:-rotate-3 hover:shadow-2xl hover:shadow-blue-400/50 border border-blue-500/30 hover:border-white/50">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-300/0 to-white/0 group-hover:from-blue-500/30 group-hover:via-cyan-300/25 group-hover:to-white/20 transition-all duration-500"></div>
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-300/0 to-white/0 group-hover:from-blue-500/40 group-hover:via-cyan-300/30 group-hover:to-white/25 blur-lg transition-all duration-500"></div>
            </a>
            
            <!-- Resume Download -->
            <!-- <a href="https://www.example.com/assets/Aarav_Uppal_Resume.pdf" target="_blank" rel="noopener noreferrer" class="group relative p-4 bg-black/80 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-300 hover:to-white hover:text-black transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-3 hover:shadow-2xl hover:shadow-cyan-400/50 border border-blue-500/30 hover:border-white/50">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-blue-300/0 to-white/0 group-hover:from-cyan-400/30 group-hover:via-blue-300/25 group-hover:to-white/20 transition-all duration-500"></div>
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-blue-300/0 to-white/0 group-hover:from-cyan-400/40 group-hover:via-blue-300/30 group-hover:to-white/25 blur-lg transition-all duration-500"></div>
            </a> -->
          </div>
        </div>
        
        <!-- Enhanced Quick Links Section -->
        <div class="space-y-4">
          <h4 class="text-xl font-bold mb-8 text-white relative group">
            Quick Links
            <div class="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-white rounded-full shadow-lg shadow-blue-500/50"></div>
            <div class="absolute -bottom-3 left-0 w-0 h-1 bg-gradient-to-r from-white via-cyan-300 to-blue-400 rounded-full group-hover:w-full transition-all duration-700"></div>
          </h4>
          <ul class="space-y-4">
            <li>
              <router-link
                to="/"
                class="group flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-cyan-400/15 hover:to-white/10 transition-all duration-500 transform hover:translate-x-4 hover:scale-105 border border-transparent hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/30"
                :class="{ 'bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-white/15 text-white border-blue-500/50': $route.path === '/' }"
              >
                <div class="w-2 h-2 rounded-full mr-4 group-hover:w-3 group-hover:h-3 transition-all duration-500"
                     :class="$route.path === '/' ? 'w-3 h-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-white' : 'bg-gray-500 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-300 group-hover:to-white'"></div>
                <svg class="w-5 h-5 mr-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" 
                     :class="{ 'opacity-100': $route.path === '/' }" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <span class="font-medium">Home</span>
                <svg class="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2" 
                     :class="{ 'opacity-100': $route.path === '/' }" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="group flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-blue-400/15 hover:to-white/10 transition-all duration-500 transform hover:translate-x-4 hover:scale-105 border border-transparent hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/30"
                :class="{ 'bg-gradient-to-r from-cyan-500/30 via-blue-400/20 to-white/15 text-white border-cyan-500/50': $route.path === '/about' }"
              >
                <div class="w-2 h-2 rounded-full mr-4 group-hover:w-3 group-hover:h-3 transition-all duration-500"
                     :class="$route.path === '/about' ? 'w-3 h-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-white' : 'bg-gray-500 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-300 group-hover:to-white'"></div>
                <svg class="w-5 h-5 mr-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" 
                     :class="{ 'opacity-100': $route.path === '/about' }" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span class="font-medium">About Me</span>
                <svg class="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2" 
                     :class="{ 'opacity-100': $route.path === '/about' }" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="group flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-400/20 hover:via-cyan-300/15 hover:to-white/10 transition-all duration-500 transform hover:translate-x-4 hover:scale-105 border border-transparent hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-400/30"
                :class="{ 'bg-gradient-to-r from-blue-400/30 via-cyan-300/20 to-white/15 text-white border-blue-400/50': $route.path === '/projects' }"
              >
                <div class="w-2 h-2 rounded-full mr-4 group-hover:w-3 group-hover:h-3 transition-all duration-500"
                     :class="$route.path === '/projects' ? 'w-3 h-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-white' : 'bg-gray-500 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-300 group-hover:to-white'"></div>
                <svg class="w-5 h-5 mr-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" 
                     :class="{ 'opacity-100': $route.path === '/projects' }" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h10a2 2 0 012 2v2M7 7h10"/>
                </svg>
                <span class="font-medium">Projects</span>
                <svg class="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2" 
                     :class="{ 'opacity-100': $route.path === '/projects' }" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="group flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-cyan-400/15 hover:to-white/10 transition-all duration-500 transform hover:translate-x-4 hover:scale-105 border border-transparent hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/30"
                :class="{ 'bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-white/15 text-white border-blue-500/50': $route.path === '/contact' }"
              >
                <div class="w-2 h-2 rounded-full mr-4 group-hover:w-3 group-hover:h-3 transition-all duration-500"
                     :class="$route.path === '/contact' ? 'w-3 h-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-white' : 'bg-gray-500 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-white'"></div>
                <svg class="w-5 h-5 mr-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" 
                     :class="{ 'opacity-100': $route.path === '/contact' }" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="font-medium">Contact</span>
                <svg class="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2" 
                     :class="{ 'opacity-100': $route.path === '/contact' }" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Enhanced Services Section -->
        <div class="space-y-4">
          <h4 class="text-xl font-bold mb-8 text-gray-100 dark:text-white relative group">
            Services
            <div class="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-sky-400 to-white rounded-full"></div>
            <div class="absolute -bottom-3 left-0 w-0 h-1 bg-gradient-to-r from-white to-cyan-300 rounded-full group-hover:w-full transition-all duration-700"></div>
          </h4>
          <ul class="space-y-4">
            <li class="group flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-sky-400/20 hover:to-cyan-300/20 transition-all duration-500 transform hover:translate-x-4 hover:scale-105 border border-transparent hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/20">
              <div class="w-3 h-3 bg-gradient-to-r from-sky-400 to-white rounded-full mr-4 group-hover:scale-150 group-hover:rotate-180 transition-all duration-500"></div>
              <svg class="w-5 h-5 mr-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <span class="font-medium">Full Stack Development</span>
            </li>
            <li class="group flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-sky-300/20 transition-all duration-500 transform hover:translate-x-4 hover:scale-105 border border-transparent hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/20">
              <div class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-white rounded-full mr-4 group-hover:scale-150 group-hover:rotate-180 transition-all duration-500"></div>
              <svg class="w-5 h-5 mr-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <span class="font-medium">Java Programming</span>
            </li>
            <li class="group flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-400/20 hover:to-sky-200/20 transition-all duration-500 transform hover:translate-x-4 hover:scale-105 border border-transparent hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-400/20">
              <div class="w-3 h-3 bg-gradient-to-r from-blue-400 to-white rounded-full mr-4 group-hover:scale-150 group-hover:rotate-180 transition-all duration-500"></div>
              <svg class="w-5 h-5 mr-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
              </svg>
              <span class="font-medium">SQL & Databases</span>
            </li>
            <li class="group flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-sky-500/20 hover:to-cyan-200/20 transition-all duration-500 transform hover:translate-x-4 hover:scale-105 border border-transparent hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/20">
              <div class="w-3 h-3 bg-gradient-to-r from-sky-500 to-white rounded-full mr-4 group-hover:scale-150 group-hover:rotate-180 transition-all duration-500"></div>
              <svg class="w-5 h-5 mr-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              <span class="font-medium">Technical Consulting</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Divider with gradient -->
      <div class="relative my-12">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300/50 dark:border-gray-600/50"></div>
        </div>
        <div class="relative flex justify-center">
          <div class="w-16 h-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-white rounded-full"></div>
        </div>
      </div>
      
      <!-- Bottom Section -->
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-gradient-to-r from-sky-400 to-white rounded-full animate-pulse"></div>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            © 2025 Aarav Uppal. Crafted with passion.
          </p>
        </div>
        
        <div class="flex space-x-8">
          <a href="#privacy" class="group relative text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 text-sm transition-all duration-300">
            Privacy Policy
            <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-white group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#terms" class="group relative text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 text-sm transition-all duration-300">
            Terms of Service
            <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-white group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Floating elements for visual interest -->
<div class="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-sky-400/10 via-cyan-300/10 to-white/10 rounded-full blur-xl animate-pulse"></div>
<div class="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-sky-400/10 via-cyan-300/10 to-white/10 rounded-full blur-xl animate-pulse" style="animation-delay: 2s;"></div>
    </footer>
</template>

<script setup>
// No script logic needed for this enhanced footer
</script>