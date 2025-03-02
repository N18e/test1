<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 relative">
    <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-lg mx-4">
      <!-- Нет переключателя языка, используем сохранённый в localStorage -->
      <h2 class="text-2xl font-bold text-white mb-4">
        {{ t('registerTitle') }}
      </h2>

      <p class="text-sm text-gray-300 mb-6">
        {{ t('continueAuth') }}
      </p>

      <label class="block text-sm text-gray-300 mb-1" for="nameInput">
        {{ t('nameLabel') }}
      </label>
      <input
          type="text"
          id="nameInput"
          v-model="name"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      <label class="block text-sm text-gray-300 mb-1" for="emailInput">
        {{ t('emailLabel') }}
      </label>
      <input
          type="email"
          id="emailInput"
          v-model="email"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          :placeholder="t('emailPlaceholder')"
      />

      <label class="block text-sm text-gray-300 mb-1" for="passwordInput">
        {{ t('passwordLabel') }}
      </label>
      <input
          type="password"
          id="passwordInput"
          v-model="password"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          :placeholder="t('passwordPlaceholder')"
      />

      <button
          @click="handleRegister"
          class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors"
      >
        {{ t('registerBtn') }}
      </button>

      <div class="mt-4 text-center">
        <router-link to="/" class="text-sm text-gray-300 hover:underline">
          {{ t('backToLogin') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import messages from '@/i18n/messages'

export default {
  name: 'RegisterView',
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')

    // Читаем язык из localStorage
    const currentLang = ref('ua')
    onMounted(() => {
      const savedLang = localStorage.getItem('lang')
      if (savedLang && messages[savedLang]) {
        currentLang.value = savedLang
      }
    })

    const t = (key) => messages[currentLang.value][key] || key

    function handleRegister() {
      console.log('Register:', name.value, email.value, password.value)
    }

    return {
      name,
      email,
      password,
      currentLang,
      t
    }
  }
}
</script>

<style scoped>
</style>
