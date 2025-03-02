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

      <!-- Заголовок: «Регистрация» / «Register» -->
      <h2 class="text-2xl font-bold text-white mb-4">
        {{ t('registerTitle') }}
      </h2>

      <!-- Поле "Имя" -->
      <label class="block text-sm text-gray-300 mb-1" for="nameInput">
        {{ t('nameLabel') }}
      </label>
      <input
          type="text"
          id="nameInput"
          v-model="name"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2
               focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      <!-- Поле "Эл. адрес" -->
      <label class="block text-sm text-gray-300 mb-1" for="emailInput">
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

      <!-- Поле "Пароль" -->
      <label class="block text-sm text-gray-300 mb-1" for="passwordInput">
        {{ t('passwordLabel') }}
      </label>
      <input
          type="password"
          id="passwordInput"
          v-model="password"
          class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2
               focus:outline-none focus:ring-2 focus:ring-gray-400"
          :placeholder="t('passwordPlaceholder')"
      />

      <!-- Кнопка "Регистрация" -->
      <button
          @click="handleRegister"
          class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors"
      >
        {{ t('registerBtn') }}
      </button>

      <!-- Ссылка "Назад к Входу" -->
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
    registerTitle: 'Регистрация',
    nameLabel: 'Имя',
    emailLabel: 'Эл. адрес',
    emailPlaceholder: 'example@domain.com',
    passwordLabel: 'Пароль',
    passwordPlaceholder: '••••••',
    registerBtn: 'Регистрация',
    backToLogin: 'Назад к Входу'
  },
  en: {
    registerTitle: 'Register',
    nameLabel: 'Name',
    emailLabel: 'Email',
    emailPlaceholder: 'example@domain.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••',
    registerBtn: 'Register',
    backToLogin: 'Back to Login'
  }
}

export default {
  name: 'RegisterView',
  setup() {
    const currentLang = ref('ru')
    const name = ref('')
    const email = ref('')
    const password = ref('')

    function setLang(lang) {
      currentLang.value = lang
    }

    const t = (key) => messages[currentLang.value][key] || key

    function handleRegister() {
      console.log('Register:', name.value, email.value, password.value)
      // TODO: логика отправки на бэкенд
    }

    return {
      currentLang,
      name,
      email,
      password,
      setLang,
      t,
      messages,
      handleRegister
    }
  }
}
</script>

<style scoped>
</style>
