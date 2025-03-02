<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 relative">
    <!-- Стеклянная карточка -->
    <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-3xl mx-4">

      <!-- Переключатель языка -->
      <div
          class="absolute top-4 right-4"
          @mouseenter="!pinned && (langMenuOpen = true)"
          @mouseleave="!pinned && (langMenuOpen = false)"
          @click.stop="togglePin"
      >
        <button
            class="px-3 py-1 border border-gray-500 text-gray-300 rounded transition hover:bg-gray-700 hover:text-white hover:border-gray-700"
        >
          <span v-if="currentLang === 'ua'">UA</span>
          <span v-else-if="currentLang === 'en'">EN</span>
          <span v-else>RU</span>
        </button>

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

      <!-- Форма vee-validate -->
      <Form
          @submit="onSubmit"
          :validation-schema="computedLoginSchema"
          v-slot="{ errors }"
      >
        <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

          <!-- Левая колонка -->
          <div class="flex-1">
            <!-- Email -->
            <label class="block text-sm text-gray-300 mb-1" for="email">
              {{ t('emailLabel') }}
            </label>
            <Field
                name="email"
                type="email"
                class="w-full mb-1 bg-black/30 text-white rounded border px-3 py-2 focus:outline-none focus:ring-2"
                :placeholder="t('emailPlaceholder')"
            />
            <ErrorMessage name="email" v-slot="{ message }">
              <div class="text-xs text-red-400 mb-2">{{ message }}</div>
            </ErrorMessage>

            <!-- Пароль -->
            <label class="block text-sm text-gray-300 mb-1" for="password">
              {{ t('passwordLabel') }}
            </label>
            <Field
                name="password"
                type="password"
                class="w-full mb-1 bg-black/30 text-white rounded border px-3 py-2 focus:outline-none focus:ring-2"
                :placeholder="t('passwordPlaceholder')"
            />
            <ErrorMessage name="password" v-slot="{ message }">
              <div class="text-xs text-red-400 mb-4">{{ message }}</div>
            </ErrorMessage>

            <!-- Кнопка "Войти" -->
            <button
                type="submit"
                class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors mt-4"
            >
              {{ t('loginBtn') }}
            </button>

            <!-- Ссылки: Забыли пароль? (слева) и Регистрация (справа) -->
            <div class="mt-2 flex items-center justify-between text-sm text-gray-300">
              <router-link to="/password-reset" class="hover:underline">
                {{ t('cantLogin') }}
              </router-link>
              <router-link to="/register" class="hover:underline">
                {{ t('registerLink') }}
              </router-link>
            </div>
          </div>

          <!-- Разделитель (md+) -->
          <div class="hidden md:block w-px bg-gray-400/20"></div>

          <!-- Правая колонка: Google, Apple, Гость -->
          <div class="flex-1 flex flex-col items-center">
            <div class="text-gray-300 mb-2">
              {{ t('orContinue') }}
            </div>

            <!-- Google -->
            <button
                @click.prevent="oauth('google')"
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
                @click.prevent="oauth('apple')"
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

            <!-- Гость -->
            <button
                @click.prevent="guestLogin"
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
          </div>
        </div>
      </Form>

      <!-- Примечание -->
      <div class="mt-6 text-center text-xs text-gray-400">
        {{ t('secureNote') }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { getLoginSchema } from '@/utils/validationSchemas'
import messages from '@/i18n/messages'

export default {
  name: 'AuthView',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  setup() {
    // Языки
    const availableLangs = ['ua','en','ru']
    const currentLang = ref('ua')
    const langMenuOpen = ref(false)
    const pinned = ref(false)

    // Динамическая схема
    const computedLoginSchema = computed(() => {
      return getLoginSchema(currentLang.value)
    })

    onMounted(() => {
      const savedLang = localStorage.getItem('lang')
      if (savedLang && availableLangs.includes(savedLang)) {
        currentLang.value = savedLang
      }
    })

    function chooseLang(lang) {
      currentLang.value = lang
      localStorage.setItem('lang', lang)
      langMenuOpen.value = false
      pinned.value = false
    }
    function togglePin() {
      pinned.value = !pinned.value
      if (pinned.value) {
        langMenuOpen.value = true
      }
    }

    const t = (key) => messages[currentLang.value][key] || key

    function onSubmit(values) {
      console.log('Auth form submit:', values)
    }
    function guestLogin() {
      console.log('Guest login')
    }
    function oauth(provider) {
      console.log('OAuth:', provider)
    }

    return {
      availableLangs,
      currentLang,
      langMenuOpen,
      pinned,
      chooseLang,
      togglePin,
      t,
      computedLoginSchema,
      onSubmit,
      guestLogin,
      oauth
    }
  }
}
</script>

<style scoped>
</style>
