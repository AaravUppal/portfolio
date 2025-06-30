<!-- App.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-gray-950 text-white">
    <NavBar/>
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/footer.vue'
import NavBar from './components/NavBar.vue'
</script>