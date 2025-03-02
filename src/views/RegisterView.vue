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
        {{ t('brandName') }} — {{ t('register') }}
      </h2>
      <p class="text-sm text-gray-300 mb-6">
        {{ t('orContinue') }} {{ t('welcomeText').toLowerCase() }}...
      </p>

      <label class="block text-sm text-gray-200 mb-1" for="name">{{ t('name') }}</label>
      <input
          type="text"
          id="name"
          v-model="name"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      <label class="block text-sm text-gray-200 mb-1" for="email">{{ t('email') }}</label>
      <input
          type="email"
          id="email"
          v-model="email"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          :placeholder="t('emailPlaceholder')"
      />

      <label class="block text-sm text-gray-200 mb-1" for="password">{{ t('password') }}</label>
      <input
          type="password"
          id="password"
          v-model="password"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          :placeholder="t('passwordPlaceholder')"
      />

      <button
          @click="handleRegister"
          class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors"
      >
        {{ t('register') }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

// Используем те же messages, что и в AuthView, для единой мультиязычности
const messages = {
  ru: {
    brandName: 'XRen Premium',
    register: 'Регистрация',
    welcomeText: 'Добро пожаловать',
    orContinue: 'Или продолжить',
    name: 'Имя',
    email: 'Эл. адрес',
    emailPlaceholder: 'example@domain.com',
    password: 'Пароль',
    passwordPlaceholder: '••••••'
  },
  en: {
    brandName: 'XRen Premium',
    register: 'Register',
    welcomeText: 'Welcome',
    orContinue: 'Or continue',
    name: 'Name',
    email: 'Email',
    emailPlaceholder: 'example@domain.com',
    password: 'Password',
    passwordPlaceholder: '••••••'
  }
}

export default {
  name: 'RegisterView',
  setup() {
    const currentLang = ref('ru')
    const name = ref('')
    const email = ref('')
    const password = ref('')

    function handleRegister() {
      console.log('Register:', name.value, email.value, password.value)
    }

    function setLang(lang) {
      currentLang.value = lang
    }

    const t = (key) => messages[currentLang.value][key] || key

    return {
      name,
      email,
      password,
      currentLang,
      setLang,
      t,
      messages
    }
  }
}
</script>

<style scoped>
</style>
