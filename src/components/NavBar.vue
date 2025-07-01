<template>
  <nav class="sticky top-0 z-[100] p-6 backdrop-blur-sm bg-gray-900/80 border-b border-gray-700/50">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <!-- Name / Logo -->
      <router-link
          to="/"
          class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          exact
          ><div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Aarav Uppal
      </div></router-link
        >

      <!-- Navigation Links -->
      <div class="flex items-center space-x-6">
        
        <router-link
          to="/projects"
          class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >Projects</router-link
        >
        <router-link
          to="/contact"
          class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >Get In Touch</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
// No script logic needed for this simple navbar
</script>