<template>
  <div class="min-h-screen bg-black relative overflow-hidden">
    <!-- Lightning Background SVG -->
    <svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.8" />
          <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:0.4" />
        </linearGradient>
      </defs>

      <!-- Lightning bolts -->
      <path d="M200 100 L150 200 L180 200 L120 350 L170 220 L140 220 L200 100 Z" fill="url(#lightning-gradient)" />
      <path d="M800 150 L750 250 L780 250 L720 400 L770 270 L740 270 L800 150 Z" fill="url(#lightning-gradient)" />
      <path d="M1000 50 L950 150 L980 150 L920 300 L970 170 L940 170 L1000 50 Z" fill="url(#lightning-gradient)" />

      <!-- Subtle lightning lines -->
      <path d="M50 300 L100 400 L80 400 L130 500" stroke="url(#lightning-gradient)" stroke-width="2" fill="none" />
      <path d="M1100 400 L1050 500 L1070 500 L1020 600" stroke="url(#lightning-gradient)" stroke-width="2" fill="none" />
    </svg>

    <!-- Main Content -->
    <div class="relative z-10 flex items-center justify-center min-h-screen p-6">
      <div class="w-full max-w-md">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent mb-2">
            Get In Touch
          </h1>
          <p class="text-gray-400 text-lg">
            Let's create something amazing together
          </p>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
                @blur="validateEmail"
              />
              <p v-if="emailError" class="text-red-400 text-sm mt-1">{{ emailError }}</p>
            </div>

            <!-- Subject Field -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="What's this about?"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting || !isFormValid"
              class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-900/50 border border-green-700 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p class="text-green-400">Message sent successfully! I'll get back to you soon.</p>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="showError" class="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <p class="text-red-400">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      emailError: '',
      isSubmitting: false,
      showSuccess: false,
      showError: false,
      errorMessage: ''
    };
  },
  computed: {
    isFormValid() {
      return (
        this.form.name &&
        this.form.email &&
        this.form.subject &&
        this.form.message &&
        this.isValidEmail(this.form.email)
      );
    }
  },
  methods: {
    isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    validateEmail() {
      if (!this.form.email) {
        this.emailError = '';
        return;
      }
      this.emailError = this.isValidEmail(this.form.email)
        ? ''
        : 'Please enter a valid email address';
    },
    async handleSubmit() {
      this.showSuccess = false;
      this.showError = false;
      this.validateEmail();

      if (!this.isFormValid) return;

      this.isSubmitting = true;

      try {
        // Updated parameters to match your EmailJS template
        const params = {
          name: this.form.name,
          email: this.form.email,          // Changed from 'from_email' to 'email'
          subject: this.form.subject,      // Added subject field
          message: this.form.message,
          time: new Date().toLocaleString()
        };

        console.log('Sending email with params:', params); // Debug log

        await emailjs.send(
          'service_vkmwcz9',     // Your service ID
          'template_auti43i',    // Your template ID
          params,
          'lDHGQF7s05sSU5i6P'    // Your public key
        );

        this.showSuccess = true;
        this.form = { name: '', email: '', subject: '', message: '' };

        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      } catch (error) {
        console.error('Error sending email:', error);
        this.showError = true;
        this.errorMessage = error.text || 'Failed to send message. Please try again.';

        setTimeout(() => {
          this.showError = false;
        }, 5000);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
/* Additional custom styles if needed */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>