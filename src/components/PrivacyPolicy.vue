<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        <h2 class="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p class="mb-4">
          This website collects personal information (such as your name and email) through contact forms in order to respond to your inquiries.
        </p>
        <p class="mb-4">
          While no analytics tools are used, the site includes links to third-party platforms such as GitHub and LinkedIn, which may use cookies or track interactions according to their own policies.
        </p>
        <p class="mb-4">
          Your data is not shared with any third parties. EmailJS is used to send emails securely from the contact form, and only for the purpose of communication initiated by you.
        </p>
        <p class="mb-4">
          If you have any questions or wish to remove your information, please contact 
          <a href="mailto:uppalaarav3@gmail.com" class="text-blue-600 hover:underline">uppalaarav3@gmail.com</a>.
        </p>
  
        <div class="flex justify-end space-x-4 mt-6">
          <router-link to="/" class="text-sm text-blue-600 hover:underline">← Back to Home</router-link>
          <button @click="show = false" class="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const show = defineModel({ default: false })
  </script>