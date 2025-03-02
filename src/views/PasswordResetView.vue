<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 relative">
    <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-lg mx-4">
      <h2 class="text-2xl font-bold text-gray-200 mb-4">
        {{ t('resetTitle') }}
      </h2>
      <p class="text-sm text-gray-300 mb-6">
        {{ t('resetHelp') }}
      </p>

      <form @submit.prevent="handleReset" class="flex flex-col space-y-4">
        <label class="block text-sm text-gray-200 mb-1" for="emailInput">
          {{ t('emailLabel') }}
        </label>
        <input
            type="email"
            id="emailInput"
            v-model="email"
            class="w-full bg-black/30 text-white rounded border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            :placeholder="t('emailPlaceholder')"
        />
        <button
            type="submit"
            class="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors"
        >
          {{ t('sendLinkBtn') }}
        </button>
      </form>

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
  name: 'PasswordResetView',
  setup() {
    const email = ref('')
    const currentLang = ref('ua')

    onMounted(() => {
      const savedLang = localStorage.getItem('lang')
      if (savedLang && messages[savedLang]) {
        currentLang.value = savedLang
      }
    })

    const t = (key) => messages[currentLang.value][key] || key

    function handleReset() {
      console.log('Reset link for:', email.value)
      // fetch('/api/password-reset', { method: 'POST', body: JSON.stringify({ email: email.value }) })
    }

    return {
      email,
      currentLang,
      t,
      handleReset
    }
  }
}
</script>

<style scoped>
</style>
