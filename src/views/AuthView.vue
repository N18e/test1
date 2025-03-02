<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 relative">
    <!-- Стеклянная карточка -->
    <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-3xl mx-4">

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

      <!-- Заголовок: «Добро пожаловать» / «Welcome» -->
      <h1 class="text-2xl font-bold text-white mb-6">
        {{ t('welcomeTitle') }}
      </h1>

      <!-- Две колонки: поля слева, соцсети справа -->
      <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

        <!-- Левая часть: Email/Password -->
        <div class="flex-1">
          <label class="block text-sm text-gray-300 mb-1" for="email">
            {{ t('emailLabel') }}
          </label>
          <input
              type="email"
              id="email"
              v-model="email"
              class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
              :placeholder="t('emailPlaceholder')"
          />

          <label class="block text-sm text-gray-300 mb-1" for="password">
            {{ t('passwordLabel') }}
          </label>
          <input
              type="password"
              id="password"
              v-model="password"
              class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-gray-400"
              :placeholder="t('passwordPlaceholder')"
          />

          <button
              @click="handleLogin"
              class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors"
          >
            {{ t('loginBtn') }}
          </button>

          <!-- Ссылки: "Can't log in?" и "Register" -->
          <div class="mt-4 flex items-center justify-between text-sm text-gray-300">
            <router-link to="/password-reset" class="hover:underline">
              {{ t('cantLogin') }}
            </router-link>
            <router-link to="/register" class="hover:underline">
              {{ t('registerLink') }}
            </router-link>
          </div>

          <!-- Примечание внизу -->
          <div class="mt-6 text-center text-xs text-gray-400">
            {{ t('secureNote') }}
          </div>
        </div>

        <!-- Разделитель (md+) -->
        <div class="hidden md:block w-px bg-gray-400/20"></div>

        <!-- Правая часть: кнопки соцсетей -->
        <div class="flex-1">
          <div class="text-gray-300 mb-2">
            {{ t('orContinue') }}
          </div>

          <!-- Google -->
          <button
              @click="oauth('google')"
              class="group w-full mb-4 border border-gray-600 bg-transparent text-gray-300 py-2 rounded
                   flex items-center justify-center space-x-2 transition-colors
                   hover:bg-gray-700 hover:border-gray-700 hover:text-white"
          >
            <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google"
                class="w-5 h-5 group-hover:brightness-110"
            />
            <span>{{ t('continueWith') }} Google</span>
          </button>

          <!-- Apple -->
          <button
              @click="oauth('apple')"
              class="group w-full mb-4 border border-gray-600 bg-transparent text-gray-300 py-2 rounded
                   flex items-center justify-center space-x-2 transition-colors
                   hover:bg-gray-700 hover:border-gray-700 hover:text-white"
          >
            <img
                src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                alt="Apple"
                class="w-5 h-5 group-hover:brightness-110"
            />
            <span>{{ t('continueWith') }} Apple</span>
          </button>

          <!-- Facebook -->
          <button
              @click="oauth('facebook')"
              class="group w-full mb-4 border border-gray-600 bg-transparent text-gray-300 py-2 rounded
                   flex items-center justify-center space-x-2 transition-colors
                   hover:bg-gray-700 hover:border-gray-700 hover:text-white"
          >
            <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                class="w-5 h-5 group-hover:brightness-110"
            />
            <span>{{ t('continueWith') }} Facebook</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const messages = {
  ru: {
    welcomeTitle: 'Добро пожаловать',
    emailLabel: 'Эл. адрес',
    emailPlaceholder: 'example@domain.com',
    passwordLabel: 'Пароль',
    passwordPlaceholder: '••••••',
    loginBtn: 'Войти',
    cantLogin: 'Забыли пароль?',
    registerLink: 'Регистрация',
    orContinue: 'Или продолжить через',
    continueWith: 'Продолжить с',
    secureNote: 'Безопасный вход с reCAPTCHA по правилам Google'
  },
  en: {
    welcomeTitle: 'Welcome',
    emailLabel: 'Email Address',
    emailPlaceholder: 'example@domain.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••',
    loginBtn: 'Log In',
    cantLogin: "Can't log in?",
    registerLink: 'Register',
    orContinue: 'Or continue with',
    continueWith: 'Continue with',
    secureNote: 'Secure login with reCAPTCHA subject to Google rules'
  }
}

export default {
  name: 'AuthView',
  setup() {
    const email = ref('')
    const password = ref('')
    const currentLang = ref('ru')

    function setLang(lang) {
      currentLang.value = lang
    }

    const t = (key) => messages[currentLang.value][key] || key

    function handleLogin() {
      console.log('Login with:', email.value, password.value)
      // TODO: Логика отправки на бэкенд
    }

    function oauth(provider) {
      console.log('OAuth:', provider)
      // TODO: OAuth редирект
    }

    return {
      email,
      password,
      currentLang,
      setLang,
      t,
      messages,
      handleLogin,
      oauth
    }
  }
}
</script>

<style scoped>
</style>
