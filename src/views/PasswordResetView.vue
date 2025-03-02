<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-lg mx-4">
      <!-- Переключатель языка -->
      <div class="absolute top-4 right-4 flex space-x-2">
        <button
            v-for="lang in Object.keys(messages)"
            :key="lang"
            @click="setLang(lang)"
            class="px-2 py-1 text-sm border border-gray-400/50 rounded hover:bg-gray-400/20"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>

      <h2 class="text-2xl font-bold text-white mb-4">
        {{ t('brandName') }} — {{ t('resetPassword') }}
      </h2>
      <p class="text-sm text-gray-300 mb-6">
        {{ t('resetHelp') }}
      </p>

      <label class="block text-sm text-gray-200 mb-1" for="email">{{ t('email') }}</label>
      <input
          type="email"
          id="email"
          v-model="email"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          :placeholder="t('emailPlaceholder')"
      />

      <button
          @click="handleReset"
          class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors"
      >
        {{ t('sendLink') }}
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
import { ref } from 'vue'

// Опять те же messages, дополним для восстановления
const messages = {
  ru: {
    brandName: 'XRen Premium',
    resetPassword: 'Сброс Пароля',
    resetHelp: 'Введите email, мы отправим ссылку для восстановления.',
    email: 'Эл. адрес',
    emailPlaceholder: 'example@domain.com',
    sendLink: 'Отправить ссылку',
    backToLogin: 'Назад к Входу'
  },
  en: {
    brandName: 'XRen Premium',
    resetPassword: 'Reset Password',
    resetHelp: 'Enter your email, we will send a reset link.',
    email: 'Email',
    emailPlaceholder: 'example@domain.com',
    sendLink: 'Send Reset Link',
    backToLogin: 'Back to Login'
  }
}

export default {
  name: 'PasswordResetView',
  setup() {
    const currentLang = ref('ru')
    const email = ref('')

    function handleReset() {
      console.log('Reset link for:', email.value)
    }

    function setLang(lang) {
      currentLang.value = lang
    }

    const t = (key) => messages[currentLang.value][key] || key

    return {
      email,
      currentLang,
      setLang,
      t,
      messages,
      handleReset
    }
  }
}
</script>

<style scoped>
</style>
