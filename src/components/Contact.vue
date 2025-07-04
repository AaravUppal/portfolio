<template>
    <div class="dark">
      <!-- Background with animated gradient -->
      <div class="fixed inset-0 bg-black"></div>    
      <!-- Animated background particles -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-40 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
  
      <div class="relative z-10 min-h-screen flex flex-col">
        <!-- NavBar Component -->
        
        <!-- Contact Section -->
        <main class="flex-1 px-6 py-20">
          <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
              <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Get In Touch
              </h1>
              <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
            </div>
  
            <div class="grid md:grid-cols-2 gap-12">
              <!-- Contact Form -->
              <div class="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h2 class="text-2xl font-bold text-white mb-6">Send Message</h2>
                
                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input 
                      v-model="form.name"
                      type="text" 
                      required
                      class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
  
                  <!-- Email Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      v-model="form.email"
                      type="email" 
                      required
                      @blur="validateEmail"
                      class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      :class="{ 'border-red-500': emailError, 'border-green-500': emailValid }"
                      placeholder="your.email@example.com"
                    />
                    <div v-if="emailError" class="mt-2 text-red-400 text-sm flex items-center">
                      <i class="pi pi-exclamation-triangle mr-2"></i>
                      {{ emailError }}
                    </div>
                    <div v-if="emailValid && !emailError" class="mt-2 text-green-400 text-sm flex items-center">
                      <i class="pi pi-check-circle mr-2"></i>
                      Email looks valid
                    </div>
                  </div>
  
                  <!-- Subject Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input 
                      v-model="form.subject"
                      type="text" 
                      required
                      class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
  
                  <!-- Message Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      v-model="form.message"
                      required
                      rows="5"
                      class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    ></textarea>
                  </div>
  
                  <!-- Submit Button -->
                  <button 
                    type="submit"
                    :disabled="isSubmitting || emailError"
                    class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:transform-none"
                  >
                    <span v-if="!isSubmitting" class="flex items-center justify-center">
                      <i class="pi pi-send mr-2"></i>
                      Send Message
                    </span>
                    <span v-else class="flex items-center justify-center">
                      <i class="pi pi-spin pi-spinner mr-2"></i>
                      Sending...
                    </span>
                  </button>
                </form>
  
                <!-- Success/Error Messages -->
                <div v-if="submitMessage" class="mt-6 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-900/50 text-green-200 border border-green-700' : 'bg-red-900/50 text-red-200 border border-red-700'">
                  <div class="flex items-center">
                    <i :class="submitSuccess ? 'pi pi-check-circle' : 'pi pi-exclamation-triangle'" class="mr-2"></i>
                    {{ submitMessage }}
                  </div>
                </div>
              </div>
  
              <!-- Contact Info -->
              <div class="space-y-8">
                <!-- Contact Cards -->
                <div class="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <i class="pi pi-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-white">Email</h3>
                      <p class="text-gray-300">uppalaarav3@gmail.com</p>
                    </div>
                  </div>
                </div>
  
  
                <div class="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <i class="pi pi-map-marker text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-white">Location</h3>
                      <p class="text-gray-300">Bangalore, India</p>
                    </div>
                  </div>
                </div>
  
                <!-- Social Links -->
                <div class="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <h3 class="text-lg font-semibold text-white mb-4">Follow Me</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                      <i class="pi pi-linkedin text-white"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                      <i class="pi pi-github text-white"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                      <i class="pi pi-twitter text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'  
  // Form data
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  // Form state
  const isSubmitting = ref(false)
  const emailError = ref('')
  const emailValid = ref(false)
  const submitMessage = ref('')
  const submitSuccess = ref(false)
  
  // Email validation function
  const validateEmail = async () => {
    const email = form.value.email.trim()
    
    if (!email) {
      emailError.value = ''
      emailValid.value = false
      return
    }
  
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      emailError.value = 'Please enter a valid email address'
      emailValid.value = false
      return
    }
  
    try {
      // Simulate email validation API call
      // In a real app, you'd call an email validation service
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // For demo purposes, consider all properly formatted emails as valid
      // In production, you'd integrate with services like:
      // - EmailJS validation
      // - Hunter.io
      // - ZeroBounce
      // - Abstract API
      
      emailError.value = ''
      emailValid.value = true
    } catch (error) {
      emailError.value = 'Unable to validate email'
      emailValid.value = false
    }
  }
  
  // Form submission handler
  const handleSubmit = async () => {
    if (emailError.value) return
  
    isSubmitting.value = true
    submitMessage.value = ''
  
    try {
      // Simulate form submission
      // In a real app, you'd integrate with:
      // - EmailJS for client-side email sending
      // - Formspree
      // - Netlify Forms
      // - Your own backend API
      
      await new Promise(resolve => setTimeout(resolve, 2000))
  
      // For demo purposes, always succeed
      // In production, you'd send the actual email:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.value)
      })
      */
  
      submitMessage.value = 'Thank you! Your message has been sent successfully.'
      submitSuccess.value = true
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      emailValid.value = false
  
    } catch (error) {
      submitMessage.value = 'Sorry, there was an error sending your message. Please try again.'
      submitSuccess.value = false
    } finally {
      isSubmitting.value = false
      
      // Clear message after 5 seconds
      setTimeout(() => {
        submitMessage.value = ''
      }, 5000)
    }
  }
  
  onMounted(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark')
  })
  </script>
  
  <style scoped>
  /* Custom animations */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Custom gradient animations */
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 4s ease infinite;
  }
  
  /* Loading spinner animation */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .pi-spin {
    animation: spin 1s linear infinite;
  }
  </style>