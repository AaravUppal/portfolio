<template>
    <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background GIF -->
      <img
        src="@/assets/404.gif"
        alt="404 background"
        class="absolute inset-0 w-full h-full object-cover brightness-50"
      />
  
      <!-- Overlay Content -->
      <div class="relative z-10 text-center px-6 text-white">
        <h1 class="text-[8rem] font-extrabold leading-none drop-shadow-lg">404</h1>
        <p class="text-2xl sm:text-3xl text-gray-200 mb-6 drop-shadow">
          Oops! The page you're looking for doesn't exist.
        </p>
        <router-link
          to="/"
          class="text-white hover:underline text-xl font-semibold"
        >
          Go back home
        </router-link>
      </div>
    </div>
  </template>