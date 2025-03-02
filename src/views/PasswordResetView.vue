<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 relative">
    <!-- Стеклянная карточка -->
    <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-lg mx-4">

      <!-- Переключатель языка (RU/EN) -->
      <div class="absolute top-4 right-4 flex space-x-2">
        <button
            v-for="lang in Object.keys(messages)"
            :key="lang"
            @click="setLang(lang)"
            class="px-2 py-1 text-sm border border-gray-500 text-gray-300 rounded transition
                 hover:bg-gray-700 hover:text-white hover:border-gray-700"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>

      <!-- Заголовок: «Сброс пароля» / «Reset Password» -->
      <h2 class="text-2xl font-bold text-gray-200 mb-4">
        {{ t('resetTitle') }}
      </h2>

      <!-- Подзаголовок -->
      <p class="text-sm text-gray-300 mb-6">
        {{ t('resetHelp') }}
      </p>

      <!-- Поле "Эл. адрес" / "Email" -->
      <label class="block text-sm text-gray-200 mb-1" for="emailInput">
        {{ t('emailLabel') }}
      </label>
      <input
          type="email"
          id="emailInput"
          v-model="email"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2
               focus:outline-none focus:ring-2 focus:ring-gray-400"
          :placeholder="t('emailPlaceholder')"
      />

      <!-- Кнопка "Отправить ссылку" / "Send Link" -->
      <button
          @click="handleReset"
          class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors"
      >
        {{ t('sendLinkBtn') }}
      </button>

      <!-- Ссылка "Назад к Входу" / "Back to Login" -->
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

const messages = {
  ru: {
    resetTitle: 'Сброс пароля',
    resetHelp: 'Введите email, мы отправим ссылку для восстановления.',
    emailLabel: 'Эл. адрес',
    emailPlaceholder: 'example@domain.com',
    sendLinkBtn: 'Отправить ссылку',
    backToLogin: 'Назад к Входу'
  },
  en: {
    resetTitle: 'Reset Password',
    resetHelp: 'Enter your email, we will send you a reset link.',
    emailLabel: 'Email Address',
    emailPlaceholder: 'example@domain.com',
    sendLinkBtn: 'Send Link',
    backToLogin: 'Back to Login'
  }
}

export default {
  name: 'PasswordResetView',
  setup() {
    const currentLang = ref('ru')
    const email = ref('')

    function setLang(lang) {
      currentLang.value = lang
    }

    const t = (key) => messages[currentLang.value][key] || key

    function handleReset() {
      console.log('Reset link for:', email.value)
      // TODO: логика отправки на бэкенд
    }

    return {
      currentLang,
      email,
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
