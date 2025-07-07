<template>
  <nav class="sticky top-0 z-[100] backdrop-blur-md bg-black/90 border-b border-blue-500/30 shadow-lg shadow-blue-500/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
      <div class="flex justify-between items-center h-16 sm:h-20">
       <!-- Name / Logo -->
<router-link
  to="/"
  class="group relative flex items-center space-x-2 text-blue-100 hover:text-blue-300 transition-all duration-500 ease-out transform hover:scale-105"
  exact
>
  <!-- Animated background glow -->
  <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
  
  <!-- Subtle border effect -->
  <div class="absolute -inset-1 bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  
  <!-- Main content container -->
  <div class="relative z-10 flex items-center space-x-2">
    <!-- Decorative dot -->
    <div class="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
    
    <!-- Name with enhanced styling -->
    <div class="relative overflow-hidden">
      <div class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-300 group-hover:via-cyan-200 group-hover:to-blue-100">
        Aarav Uppal
      </div>
      
      <!-- Subtle underline effect -->
      <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-500 ease-out"></div>
    </div>
    
    <!-- Decorative arrow -->
    <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
      <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
      </svg>
    </div>
  </div>
  
  <!-- Floating particles effect -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-1 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-100"></div>
    <div class="absolute top-3 right-6 w-0.5 h-0.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-300"></div>
  </div>
</router-link>
        
        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- Show About Me link only when NOT on about page -->
          <router-link
            v-if="currentRoute !== '/about'"
            to="/about"
            class="relative px-4 py-2 text-blue-100 hover:text-blue-300 transition-all duration-300 group"
          >
            <span class="relative z-10">About Me</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></div>
          </router-link>
          
          <!-- Show Projects link only when NOT on projects page -->
          <router-link
            v-if="currentRoute !== '/projects'"
            to="/projects"
            class="relative px-4 py-2 text-blue-100 hover:text-blue-300 transition-all duration-300 group"
          >
            <span class="relative z-10">Projects</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></div>
          </router-link>
          
          <!-- Show Contact link only when NOT on contact page -->
          <router-link
            v-if="currentRoute !== '/contact'"
            to="/contact"
            class="relative px-6 py-2 text-blue-100 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg border border-blue-500/50 hover:border-blue-300/70"
          >
            <span class="relative z-10">Get In Touch</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </router-link>
          
          <!-- Show Home link when on contact, projects, or about page -->
          <router-link
            v-if="currentRoute === '/contact' || currentRoute === '/projects' || currentRoute === '/about'"
            to="/"
            class="relative px-4 py-2 text-blue-100 hover:text-blue-300 transition-all duration-300 group"
          >
            <span class="relative z-10">Home</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></div>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-blue-100 hover:text-blue-300 hover:bg-blue-900/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          aria-label="Toggle navigation menu"
        >
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-180': isMobileMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :class="isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="px-4 py-4 space-y-3 bg-black/95 backdrop-blur-sm border-t border-blue-500/30">
        <!-- Show About Me link only when NOT on about page -->
        <router-link
          v-if="currentRoute !== '/about'"
          to="/about"
          @click="closeMobileMenu"
          class="block px-4 py-3 text-blue-100 hover:text-blue-300 hover:bg-blue-900/30 rounded-lg transition-all duration-300 transform hover:translate-x-1"
        >
          <span class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>About Me</span>
          </span>
        </router-link>
        
        <!-- Show Projects link only when NOT on projects page -->
        <router-link
          v-if="currentRoute !== '/projects'"
          to="/projects"
          @click="closeMobileMenu"
          class="block px-4 py-3 text-blue-100 hover:text-blue-300 hover:bg-blue-900/30 rounded-lg transition-all duration-300 transform hover:translate-x-1"
        >
          <span class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h10a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Projects</span>
          </span>
        </router-link>
        
        <!-- Show Contact link only when NOT on contact page -->
        <router-link
          v-if="currentRoute !== '/contact'"
          to="/contact"
          @click="closeMobileMenu"
          class="block px-4 py-3 text-blue-100 hover:text-blue-300 hover:bg-blue-900/30 rounded-lg transition-all duration-300 transform hover:translate-x-1"
        >
          <span class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Get In Touch</span>
          </span>
        </router-link>
        
        <!-- Show Home link when on contact, projects, or about page -->
        <router-link
          v-if="currentRoute === '/contact' || currentRoute === '/projects' || currentRoute === '/about'"
          to="/"
          @click="closeMobileMenu"
          class="block px-4 py-3 text-blue-100 hover:text-blue-300 hover:bg-blue-900/30 rounded-lg transition-all duration-300 transform hover:translate-x-1"
        >
          <span class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

// Get current route path
const currentRoute = computed(() => route.path)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>