<template>
  <div class="dark transition-colors duration-500">
    <!-- Background -->
    <div class="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
    
    <!-- Background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-20 w-12 h-12 border border-sky-400/20 rotate-45 animate-pulse opacity-30"></div>
      <div class="absolute top-40 right-32 w-8 h-8 border border-cyan-300/15 rotate-12 animate-pulse opacity-20 delay-1000"></div>
      <div class="absolute bottom-32 left-1/4 w-16 h-16 border border-sky-300/10 rotate-6 animate-pulse opacity-15 delay-2000"></div>
    </div>

    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- NavBar Component -->
      <NavBar />
      
      <!-- Projects Content -->
      <main class="container mx-auto px-4 py-16 flex-grow">
        <!-- Header -->
        <div class="text-center mb-24">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
            My Projects
          </h1>
          
          <div class="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        <!-- Filter Buttons -->
       

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-sky-400/10 hover:border-sky-400/30 transition-all duration-300 overflow-hidden hover:scale-105"
          >
            <!-- Project Image -->
            <div class="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-cyan-300/20 opacity-50"></div>
              
              <!-- Show project image if available, otherwise show icon -->
              <img 
                v-if="project.imageUrl" 
                :src="project.imageUrl" 
                :alt="project.title"
                class="w-full h-full object-cover z-10"
              />
              <i 
                v-else
                :class="project.icon" 
                class="text-5xl text-sky-300 z-10"
              ></i>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl font-semibold text-white">
                  {{ project.title }}
                </h3>
                <span class="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded-full">
                  {{ project.year }}
                </span>
              </div>
              
              <p class="text-gray-400 text-sm mb-4">
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
              
              <!-- Project Actions -->
              <div class="flex gap-3 pt-4 border-t border-gray-700/50">
                <!-- Certificate Button -->
                <button 
                  v-if="project.hasCertificate"
                  @click="showCertificate(project)"
                  class="flex-1 bg-gradient-to-r from-sky-400/20 to-cyan-300/20 text-sky-300 py-2 px-4 rounded-lg hover:from-sky-400/30 hover:to-cyan-300/30 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <i class="pi pi-certificate"></i>
                  Certificate
                </button>
                
                <!-- GitHub Button -->
                <button 
                  @click="openGitHub(project)"
                  :class="[
                    'py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2',
                    project.hasCertificate 
                      ? 'flex-1 bg-gray-700/50 text-gray-300 hover:bg-gray-700' 
                      : 'w-full bg-gradient-to-r from-sky-400/20 to-cyan-300/20 text-sky-300 hover:from-sky-400/30 hover:to-cyan-300/30'
                  ]"
                >
                  <i class="pi pi-github"></i>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <!-- Mobile CTA - Updated to match navbar -->
        <div class="block sm:hidden text-center mt-12">
          <div class="bg-gradient-to-r from-sky-400/10 via-cyan-300/10 to-sky-400/10 backdrop-blur-sm rounded-2xl p-6 border border-sky-400/20 shadow-xl mx-4 animate-fade-in-up">
            <h3 class="text-lg font-semibold mb-3 text-white">Let's create something amazing</h3>
            <RouterLink to="/contact">
              <button 
                class="group relative px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-white text-black rounded-lg transition-all duration-500 ease-out transform hover:scale-105 hover:from-blue-300 hover:via-cyan-200 hover:to-blue-100 overflow-hidden shadow-lg hover:shadow-xl"
              >
                <!-- Animated background glow -->
                <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                
                <!-- Main content -->
                <div class="relative z-10 flex items-center space-x-2">
                  <span>Get in Touch</span>
                  <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </button>
            </RouterLink>
          </div>
        </div>

        <!-- Desktop CTA - Updated to match navbar -->
        <div class="hidden sm:block text-center bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-sky-400/20 shadow-2xl mt-20">
          <h3 class="text-2xl lg:text-3xl font-bold mb-4 text-white">Ready to work together?</h3>
          <p class="text-base text-gray-300 mb-6 max-w-xl mx-auto">Let's create something amazing together. I'm always excited to take on new challenges and collaborate on innovative projects.</p>
          <RouterLink to="/contact">
            <button 
              class="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-white text-black rounded-lg transition-all duration-500 ease-out transform hover:scale-105 hover:from-blue-300 hover:via-cyan-200 hover:to-blue-100 overflow-hidden shadow-lg hover:shadow-xl"
            >
              <!-- Animated background glow -->
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              
              <!-- Subtle border effect -->
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Main content -->
              <div class="relative z-10 flex items-center space-x-2">
                <span>Start a Project</span>
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      
      <Footer />
    </div>

    <!-- Certificate Modal - Fixed as proper popup -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click="closeModal"
    >
      <div 
        class="relative bg-gray-800 rounded-2xl border border-sky-400/20 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/95 backdrop-blur-sm">
          <h3 class="text-xl font-semibold text-white truncate pr-4">
            {{ selectedProject?.title }} Certificate
          </h3>
          <button 
            @click="closeModal"
            class="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg flex-shrink-0"
          >
            <i class="pi pi-times text-xl"></i>
          </button>
        </div>
        
        <!-- Certificate Image Container -->
        <div class="p-4 bg-gray-900/50 max-h-[60vh] overflow-auto">
          <div class="flex items-center justify-center">
            <img 
              :src="selectedProject?.certificateUrl" 
              :alt="`${selectedProject?.title} Certificate`"
              class="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="p-4 border-t border-gray-700 bg-gray-800/95">
          <button 
            @click="downloadCertificate"
            class="w-full bg-gradient-to-r from-sky-400/20 to-cyan-300/20 text-sky-300 py-2 px-4 rounded-lg hover:from-sky-400/30 hover:to-cyan-300/30 transition-all duration-300 font-medium flex items-center justify-center gap-2"
          >
            <i class="pi pi-download"></i>
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Button from 'primevue/button'

// Reactive data
const selectedCategory = ref('All')
const categories = ['All', 'Web Development', 'University Project', 'Personal Project']
const showModal = ref(false)
const selectedProject = ref(null)

// Projects data - removed certificate orientation properties
const projects = ref([
  {
    id: 1,
    title: 'Pom Power Web App',
    description: 'Developed a responsive web application for the Pom Power productivity platform during my internship at Pom Power, Bengaluru. Built with Vue.js and Tailwind CSS.',
    category: 'Web Development',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Git', 'GitHub'],
    year: '2024',
    icon: 'pi pi-clock',
    github: 'https://github.com/DerKaiser28/PomPowerWebsite',
    hasCertificate: true,
    certificateUrl: new URL('@/assets/pompower.jpg', import.meta.url).href,
    imageUrl: new URL('@/assets/pom.png', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Mentor-Mentee App',
    description: 'University-wide mentor-mentee management application for CHRIST University. Built dynamic, responsive UI components and collaborated with team members.',
    category: 'University Project',
    technologies: ['Vue.js', 'Tailwind CSS', 'PrimeVue', 'Git', 'GitHub'],
    year: '2024',
    icon: 'pi pi-users',
    github: 'https://github.com/DerKaiser28/MentorMenteeApp',
    hasCertificate: true,
    certificateUrl: '/path/to/mentor-mentee-certificate.jpg', // Replace with actual path
    imageUrl: new URL('@/assets/christ.avif', import.meta.url).href,
  },
  {
    id: 3,
    title: 'TaskFlow - Task Management App',
    description: 'Full-stack task management application with secure authentication, MySQL database integration, and comprehensive API documentation.',
    category: 'Personal Project',
    technologies: ['Java', 'Spring Boot', 'React.js', 'Tailwind CSS', 'MySQL', 'JWT'],
    year: '2024',
    icon: 'pi pi-check-square',
    github: 'https://github.com/AaravUppal/taskflow',
    hasCertificate: false,
    imageUrl: new URL('@/assets/taskflow.png', import.meta.url).href,
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a responsive portfolio website to showcase my projects, skills, and resume. Built using Vue.js, Tailwind CSS, and PrimeVue for an elegant, modern UI.',
    category: 'Personal Project',
    technologies: ['Vue.js', 'Tailwind CSS', 'PrimeVue'],
    year: '2024',
    icon: 'pi pi-user',
    github: 'https://github.com/AaravUppal/portfolio',
    hasCertificate: false,
    imageUrl: new URL('@/assets/website.png', import.meta.url).href,
  }
])

// Computed filtered projects
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === selectedCategory.value)
})

// Methods
const showCertificate = (project) => {
  selectedProject.value = project
  showModal.value = true
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
  // Restore body scroll
  document.body.style.overflow = 'auto'
}

const openGitHub = (project) => {
  if (project.github) {
    window.open(project.github, '_blank')
  }
}

const downloadCertificate = () => {
  if (selectedProject.value?.certificateUrl) {
    const link = document.createElement('a')
    link.href = selectedProject.value.certificateUrl
    link.download = `${selectedProject.value.title}_Certificate`
    link.click()
  }
}

// Function to update title
const updateTitle = () => {
  document.title = window.innerWidth < 500 ? "Projects - AU" : "Projects - Aarav Uppal";
}

// Handle escape key to close modal
const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", updateTitle);
  document.addEventListener("keydown", handleEscapeKey);
  updateTitle();
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateTitle);
  document.removeEventListener("keydown", handleEscapeKey);
  // Ensure body scroll is restored
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Text rendering */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Hover animations */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar for modal */
.overflow-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: rgba(31, 41, 55, 0.5);
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: rgba(56, 189, 248, 0.3);
  border-radius: 4px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(56, 189, 248, 0.5);
}

/* Custom scrollbar */
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

/* Mobile optimizations */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>