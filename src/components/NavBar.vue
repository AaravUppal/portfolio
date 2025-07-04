<template>
  <nav class="sticky top-0 z-[100] backdrop-blur-md bg-black/90 border-b border-blue-500/30 shadow-lg shadow-blue-500/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 sm:h-20">
        <!-- Name / Logo -->
        <router-link
          to="/"
          class="group flex items-center space-x-2 text-blue-100 hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
          exact
        >
          <div class="relative">
            <div class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent animate-pulse">
              Aarav Uppal
            </div>
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-400/30 via-cyan-300/30 to-white/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </router-link>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/projects"
            class="relative px-4 py-2 text-blue-100 hover:text-blue-300 transition-all duration-300 group"
          >
            <span class="relative z-10">Projects</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></div>
          </router-link>
          
          <router-link
            to="/contact"
            class="relative px-6 py-2 text-blue-100 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg border border-blue-500/50 hover:border-blue-300/70"
          >
            <span class="relative z-10">Get In Touch</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
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
      :class="isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="px-4 py-4 space-y-3 bg-black/95 backdrop-blur-sm border-t border-blue-500/30">
        <router-link
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
        
        <router-link
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
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>