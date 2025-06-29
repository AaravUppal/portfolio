<template>
    <nav class="sticky top-0 z-[100] p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <!-- Name / Logo -->
        <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Aarav Uppal
        </div>
  
        <!-- Navigation Links + Theme Toggle -->
        <div class="flex items-center space-x-6">
          <a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
  
          <!-- Theme Toggle Button -->
          <div class="relative">
            <button 
              @click="$emit('toggle-theme')"
              class="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-yellow-400 dark:to-orange-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 group"
            >
              <div class="relative w-6 h-6 overflow-hidden">
                <!-- Sun Icon -->
                <div 
                  :class="isDark ? 'translate-y-0 rotate-0' : 'translate-y-8 rotate-180'"
                  class="absolute inset-0 transition-all duration-500 transform"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                  </svg>
                </div>
  
                <!-- Moon Icon -->
                <div 
                  :class="isDark ? 'translate-y-8 -rotate-180' : 'translate-y-0 rotate-0'"
                  class="absolute inset-0 transition-all duration-500 transform"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
              </div>
  
              <!-- Animated Ring -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-yellow-400 dark:to-orange-500 opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-150 transition-all duration-500"></div>
            </button>
  
            <!-- Tooltip -->
            <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Switch to {{ isDark ? 'light' : 'dark' }} mode
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  defineProps({
    isDark: Boolean
  })
  </script>