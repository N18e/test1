<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 relative">
    <!-- Полупрозрачная «стеклянная» карточка -->
    <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-3xl mx-4">

      <!-- Переключатель языка -->
      <div
          class="absolute top-4 right-4"
          @mouseenter="!pinned && (langMenuOpen = true)"
          @mouseleave="!pinned && (langMenuOpen = false)"
          @click.stop="togglePin"
      >
        <!-- Кнопка с текущим языком -->
        <button
            class="px-3 py-1 border border-gray-500 text-gray-300 rounded transition hover:bg-gray-700 hover:text-white hover:border-gray-700"
        >
          <span v-if="currentLang === 'ua'">UA</span>
          <span v-else-if="currentLang === 'en'">EN</span>
          <span v-else>RU</span>
        </button>

        <!-- Дропдаун -->
        <div
            v-if="langMenuOpen"
            class="absolute right-0 mt-1 bg-gray-800 border border-gray-600 rounded shadow-lg w-20"
        >
          <div
              v-for="lang in availableLangs"
              :key="lang"
              class="px-3 py-1 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
              @click="chooseLang(lang)"
          >
            <span v-if="lang === 'ua'">UA</span>
            <span v-else-if="lang === 'en'">EN</span>
            <span v-else>RU</span>
          </div>
        </div>
      </div>

      <!-- Заголовок -->
      <h1 class="text-2xl font-bold text-white mb-6">
        {{ t('welcomeTitle') }}
      </h1>

      <!-- Две колонки -->
      <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

        <!-- Левая колонка: Email, Password, кнопка «Войти», «Забыли пароль?» -->
        <div class="flex-1">
          <label class="block text-sm text-gray-300 mb-1" for="email">
            {{ t('emailLabel') }}
          </label>
          <input
              type="email"
              id="email"
              v-model="email"
              class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              :placeholder="t('emailPlaceholder')"
          />

          <label class="block text-sm text-gray-300 mb-1" for="password">
            {{ t('passwordLabel') }}
          </label>
          <input
              type="password"
              id="password"
              v-model="password"
              class="w-full mb-4 bg-black/30 text-white rounded border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              :placeholder="t('passwordPlaceholder')"
          />

          <!-- Кнопка «Войти» -->
          <button
              @click="handleLogin"
              class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors"
          >
            {{ t('loginBtn') }}
          </button>

          <!-- «Забыли пароль?» под «Войти» -->
          <div class="mt-2 text-sm text-gray-300">
            <router-link to="/password-reset" class="hover:underline">
              {{ t('cantLogin') }}
            </router-link>
          </div>
        </div>

        <!-- Разделитель (md+) -->
        <div class="hidden md:block w-px bg-gray-400/20"></div>

        <!-- Правая колонка: Google, Apple, Гость, + «Регистрация» -->
        <div class="flex-1 flex flex-col items-center">
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

          <!-- Гость (в конце) -->
          <button
              @click="guestLogin"
              class="group w-full mb-4 border border-gray-600 bg-transparent text-gray-300 py-2 rounded
                   flex items-center justify-center space-x-2 transition-colors
                   hover:bg-gray-700 hover:border-gray-700 hover:text-white"
          >
            <svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"
                class="w-5 h-5 group-hover:brightness-110"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
              <path d="M20 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M4 21v-2a4 4 0 0 1 3-3.87"></path>
            </svg>
            <span>{{ t('guestLogin') }}</span>
          </button>

          <!-- «Регистрация» под этими кнопками -->
          <div class="mt-2 text-sm text-gray-300">
            <router-link to="/register" class="hover:underline">
              {{ t('registerLink') }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Примечание внизу -->
      <div class="mt-6 text-center text-xs text-gray-400">
        {{ t('secureNote') }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import messages from '@/i18n/messages'

export default {
  name: 'AuthView',
  setup() {
    const email = ref('')
    const password = ref('')

    // Языки: UA, EN, RU
    const availableLangs = ['ua', 'en', 'ru']

    // Текущий язык
    const currentLang = ref('ua')
    // Открыто ли меню
    const langMenuOpen = ref(false)
    // «Прикреплено» ли меню (клик)
    const pinned = ref(false)

    onMounted(() => {
      const savedLang = localStorage.getItem('lang')
      if (savedLang && availableLangs.includes(savedLang)) {
        currentLang.value = savedLang
      }
    })

    // При выборе языка
    function chooseLang(lang) {
      currentLang.value = lang
      localStorage.setItem('lang', lang)
      langMenuOpen.value = false
      pinned.value = false
    }

    // При клике на переключатель – фиксируем/снимаем фиксацию
    function togglePin() {
      pinned.value = !pinned.value
      if (pinned.value) {
        langMenuOpen.value = true
      }
    }

    const t = (key) => messages[currentLang.value][key] || key

    function handleLogin() {
      console.log('Login with:', email.value, password.value)
    }
    function guestLogin() {
      console.log('Login as guest')
    }
    function oauth(provider) {
      console.log('OAuth:', provider)
    }

    return {
      email,
      password,
      availableLangs,
      currentLang,
      langMenuOpen,
      pinned,
      chooseLang,
      togglePin,
      t,
      handleLogin,
      guestLogin,
      oauth
    }
  }
}
</script>

<style scoped>
</style>
