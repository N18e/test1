<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 relative">
    <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-lg mx-4">
      <h2 class="text-2xl font-bold text-white mb-4">
        {{ t('registerTitle') }}
      </h2>
      <p class="text-sm text-gray-300 mb-6">
        {{ t('continueAuth') }}
      </p>

      <!-- Форма vee-validate -->
      <Form
          @submit="onSubmit"
          :validation-schema="computedRegisterSchema"
          v-slot="{ errors }"
      >
        <label class="block text-sm text-gray-300 mb-1" for="nameInput">
          {{ t('nameLabel') }}
        </label>
        <Field
            name="name"
            type="text"
            class="w-full mb-1 bg-black/30 text-white rounded border px-3 py-2"
        />
        <ErrorMessage name="name" v-slot="{ message }">
          <div class="text-xs text-red-400 mb-2">{{ message }}</div>
        </ErrorMessage>

        <label class="block text-sm text-gray-300 mb-1" for="emailInput">
          {{ t('emailLabel') }}
        </label>
        <Field
            name="email"
            type="email"
            class="w-full mb-1 bg-black/30 text-white rounded border px-3 py-2"
            :placeholder="t('emailPlaceholder')"
        />
        <ErrorMessage name="email" v-slot="{ message }">
          <div class="text-xs text-red-400 mb-2">{{ message }}</div>
        </ErrorMessage>

        <label class="block text-sm text-gray-300 mb-1" for="passwordInput">
          {{ t('passwordLabel') }}
        </label>
        <Field
            name="password"
            type="password"
            class="w-full mb-1 bg-black/30 text-white rounded border px-3 py-2"
            :placeholder="t('passwordPlaceholder')"
        />
        <ErrorMessage name="password" v-slot="{ message }">
          <div class="text-xs text-red-400 mb-2">{{ message }}</div>
        </ErrorMessage>

        <label class="block text-sm text-gray-300 mb-1" for="confirmPassword">
          Подтвердите пароль
        </label>
        <Field
            name="confirmPassword"
            type="password"
            class="w-full mb-1 bg-black/30 text-white rounded border px-3 py-2"
        />
        <ErrorMessage name="confirmPassword" v-slot="{ message }">
          <div class="text-xs text-red-400 mb-2">{{ message }}</div>
        </ErrorMessage>

        <button
            type="submit"
            class="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded transition-colors mt-4"
        >
          {{ t('registerBtn') }}
        </button>
      </Form>

      <div class="mt-4 text-center">
        <router-link to="/" class="text-sm text-gray-300 hover:underline">
          {{ t('backToLogin') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { getRegisterSchema } from '@/utils/validationSchemas'
import messages from '@/i18n/messages'

export default {
  name: 'RegisterView',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  setup() {
    const currentLang = ref('ua')

    // Динамическая схема
    const computedRegisterSchema = computed(() => {
      return getRegisterSchema(currentLang.value)
    })

    onMounted(() => {
      const savedLang = localStorage.getItem('lang')
      if (savedLang && messages[savedLang]) {
        currentLang.value = savedLang
      }
    })

    const t = (key) => messages[currentLang.value][key] || key

    function onSubmit(values) {
      console.log('Register form:', values)
    }

    return {
      currentLang,
      t,
      computedRegisterSchema,
      onSubmit
    }
  }
}
</script>

<style scoped>
</style>
