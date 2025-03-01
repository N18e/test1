<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div>
      <h1 class="text-2xl mb-4">Завершение OAuth авторизации...</h1>
      <p>Пожалуйста, подождите...</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/store/auth'

export default {
  name: 'OAuthCallbackView',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const authStore = useAuthStore()

    onMounted(async () => {
      // Предполагаем, что OAuth-провайдер возвращает токен в query-параметре "token"
      const token = route.query.token
      if (token) {
        // Сохраняем токен в хранилище
        authStore.token = token
        localStorage.setItem('authToken', token)
        // Здесь можно дополнительно получить данные пользователя через API, если необходимо
        router.push({ name: 'Home' })
      } else {
        // Если токен отсутствует — перенаправляем на страницу входа
        router.push({ name: 'Login' })
      }
    })

    return {}
  }
}
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
