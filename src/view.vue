<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-1000">
      <h1 class="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-red-500 dark:from-yellow-400 dark:via-pink-500 dark:to-red-400 animate-fade-in-down drop-shadow-lg">
        Hi Mom 👋
      </h1>
    </div>
  </template>
  
  <script setup>
  // nothing needed here for this simple page
  </script>
  
  <style scoped>
  @keyframes fade-in-down {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-down {
    animation: fade-in-down 1s ease-out;
  }
  </style>