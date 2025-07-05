<template>
    <div class="dark transition-colors duration-500">
      <!-- Background -->
      <div class="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      <!-- Subtle background elements -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-20 w-12 h-12 border border-sky-400/20 rotate-45 animate-pulse opacity-30"></div>
        <div class="absolute top-40 right-32 w-8 h-8 border border-cyan-300/15 rotate-12 animate-pulse opacity-20 delay-1000"></div>
        <div class="absolute bottom-32 left-1/4 w-16 h-16 border border-sky-300/10 rotate-6 animate-pulse opacity-15 delay-2000"></div>
        <div class="absolute bottom-20 right-20 w-6 h-6 border border-cyan-400/20 rounded-full animate-pulse opacity-25 delay-3000"></div>
        <div class="absolute top-1/2 left-10 w-10 h-10 border border-sky-500/15 rotate-12 animate-pulse opacity-20 delay-4000"></div>
      </div>
  
      <div class="relative z-10 min-h-screen flex flex-col">
        <!-- NavBar Component -->
        <NavBar />
        
        <!-- Projects Content -->
        <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex-grow">
          <!-- Header Section -->
          <div class="text-center mb-16 sm:mb-24">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
              My Projects
            </h1>
            <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              A collection of projects I've built, each representing a unique challenge and creative solution.
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-300 mx-auto rounded-full"></div>
          </div>
  
          <!-- Filter Section -->
          <div class="flex flex-wrap justify-center gap-4 mb-12 sm:mb-16">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-6 py-3 rounded-full border transition-all duration-300 transform hover:scale-105',
                selectedCategory === category
                  ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black border-transparent shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 border-sky-400/20 hover:border-sky-400/40 hover:bg-gray-800/70'
              ]"
            >
              {{ category }}
            </button>
          </div>
  
          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div 
              v-for="project in filteredProjects" 
              :key="project.id"
              class="group bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-sky-400/10 hover:border-sky-400/30 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20"
            >
              <!-- Project Image -->
              <div class="relative overflow-hidden">
                <div class="w-full h-48 sm:h-56 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                  <!-- Placeholder for project image -->
                  <div class="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-cyan-300/20 opacity-50"></div>
                  <i :class="project.icon" class="text-4xl sm:text-5xl text-sky-300 z-10"></i>
                  
                  <!-- Overlay on hover -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div class="flex gap-3">
                      <button class="w-10 h-10 bg-sky-400/90 rounded-full flex items-center justify-center text-black hover:bg-sky-400 transition-colors duration-200">
                        <i class="pi pi-eye text-sm"></i>
                      </button>
                      <button class="w-10 h-10 bg-cyan-300/90 rounded-full flex items-center justify-center text-black hover:bg-cyan-300 transition-colors duration-200">
                        <i class="pi pi-external-link text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Project Content -->
              <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-xl font-semibold text-white group-hover:text-sky-300 transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                  <span class="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded-full">
                    {{ project.year }}
                  </span>
                </div>
                
                <p class="text-gray-400 text-sm mb-4 leading-relaxed">
                  {{ project.description }}
                </p>
                
                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="text-xs px-2 py-1 bg-sky-400/10 text-sky-300 rounded-md border border-sky-400/20"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <!-- Project Links -->
                <div class="flex gap-3 pt-4 border-t border-gray-700/50">
                  <button class="flex-1 bg-gradient-to-r from-sky-400/20 to-cyan-300/20 text-sky-300 py-2 px-4 rounded-lg hover:from-sky-400/30 hover:to-cyan-300/30 transition-all duration-300 text-sm font-medium">
                    View Details
                  </button>
                  <button class="w-10 h-10 bg-gray-700/50 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center">
                    <i class="pi pi-github text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Featured Project Section -->
          <div class="mt-20 sm:mt-32">
            <div class="text-center mb-12">
              <h2 class="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
                Featured Project
              </h2>
              <p class="text-gray-400 max-w-xl mx-auto">
                A deep dive into my most recent and comprehensive project.
              </p>
            </div>
            
            <div class="bg-gradient-to-r from-gray-800/30 via-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-sky-400/20 overflow-hidden">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <!-- Featured Project Image -->
                <div class="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div class="absolute inset-0 bg-gradient-to-br from-sky-400/30 to-cyan-300/30 opacity-60"></div>
                  <i class="pi pi-star text-6xl sm:text-7xl text-sky-300 z-10"></i>
                  <div class="absolute top-4 left-4 bg-gradient-to-r from-sky-400 to-cyan-300 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                
                <!-- Featured Project Content -->
                <div class="p-8 sm:p-12 flex flex-col justify-center">
                  <div class="flex items-center gap-3 mb-4">
                    <h3 class="text-2xl sm:text-3xl font-bold text-white">
                      Portfolio Website
                    </h3>
                    <span class="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                      2024
                    </span>
                  </div>
                  
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    A modern, responsive portfolio website built with Vue.js and Tailwind CSS. Features smooth animations, 
                    dark mode design, and optimized performance. This project showcases my skills in frontend development 
                    and modern web technologies.
                  </p>
                  
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span class="text-sm px-3 py-1 bg-sky-400/10 text-sky-300 rounded-md border border-sky-400/20">Vue.js</span>
                    <span class="text-sm px-3 py-1 bg-sky-400/10 text-sky-300 rounded-md border border-sky-400/20">Tailwind CSS</span>
                    <span class="text-sm px-3 py-1 bg-sky-400/10 text-sky-300 rounded-md border border-sky-400/20">JavaScript</span>
                    <span class="text-sm px-3 py-1 bg-sky-400/10 text-sky-300 rounded-md border border-sky-400/20">Responsive Design</span>
                  </div>
                  
                  <div class="flex flex-col sm:flex-row gap-4">
                    <Button 
                      label="View Live Site" 
                      class="!bg-gradient-to-r !from-sky-400 !to-cyan-300 hover:!from-sky-500 hover:!to-cyan-400 !text-black !border-0 !px-6 !py-3 !font-semibold transition-all duration-300 transform hover:-translate-y-1"
                      rounded
                      icon="pi pi-external-link"
                      iconPos="right"
                    />
                    <Button 
                      label="View Code"
                      class="!bg-transparent !text-sky-300 !border-2 !border-sky-400 hover:!bg-sky-400/10 hover:!border-sky-300 !px-6 !py-3 !font-semibold transition-all duration-300 transform hover:-translate-y-1"
                      rounded
                      icon="pi pi-github"
                      iconPos="right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Bottom CTA Section -->
          <div class="text-center mt-20 sm:mt-32">
            <div class="bg-gradient-to-r from-gray-800/30 via-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-sky-400/10 max-w-2xl mx-auto">
              <h3 class="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h3>
              <p class="text-gray-300 mb-8 max-w-md mx-auto">
                Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
              </p>
              <RouterLink to="/contact">
                <Button 
                  label="Get In Touch" 
                  class="!bg-gradient-to-r !from-sky-400 !to-cyan-300 hover:!from-sky-500 hover:!to-cyan-400 !text-black !border-0 !px-8 !py-4 !text-lg !font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  rounded
                  icon="pi pi-send"
                  iconPos="right"
                />
              </RouterLink>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import Button from 'primevue/button'
  
  // Reactive data
  const selectedCategory = ref('All')
  const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Open Source']
  
  // Sample projects data
  const projects = ref([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI, secure payments, and admin dashboard.',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2024',
      icon: 'pi pi-shopping-cart'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Cross-platform mobile app for team collaboration and project management.',
      category: 'Mobile Apps',
      technologies: ['React Native', 'Firebase', 'Redux'],
      year: '2024',
      icon: 'pi pi-check-square'
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Comprehensive design system with reusable components and documentation.',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Storybook', 'CSS', 'Documentation'],
      year: '2023',
      icon: 'pi pi-palette'
    },
    {
      id: 4,
      title: 'API Gateway',
      description: 'Microservices API gateway with authentication, rate limiting, and monitoring.',
      category: 'Open Source',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      year: '2023',
      icon: 'pi pi-server'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      category: 'Web Development',
      technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Chart.js'],
      year: '2023',
      icon: 'pi pi-chart-line'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile fitness tracking app with workout plans, progress tracking, and social features.',
      category: 'Mobile Apps',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Google Fit'],
      year: '2023',
      icon: 'pi pi-heart'
    }
  ])
  
  // Computed filtered projects
  const filteredProjects = computed(() => {
    if (selectedCategory.value === 'All') {
      return projects.value
    }
    return projects.value.filter(project => project.category === selectedCategory.value)
  })
  
  // Function to update title
  const updateTitle = () => {
    document.title = window.innerWidth < 500 ? "Projects - AU" : "Projects - Aarav Uppal";
  }
  
  // Set up lifecycle hooks
  onMounted(() => {
    window.addEventListener("resize", updateTitle);
    updateTitle(); // Initial call
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateTitle);
  })
  </script>
  
  <style scoped>
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Ensure proper text rendering */
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Enhanced hover animations */
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  
  .hover\:transform:hover {
    transform: translateY(-4px);
  }
  
  /* Enhanced transitions */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
  
  /* Custom scrollbar for better UX */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(31, 41, 55, 0.5);
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(56, 189, 248, 0.3);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(56, 189, 248, 0.5);
  }
  
  /* Mobile responsive adjustments */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  </style>