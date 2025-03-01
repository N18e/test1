<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div>
      <h1 class="text-2xl mb-4">Проверка Email</h1>
      <p v-if="message">{{ message }}</p>
      <p v-else>Пожалуйста, подождите...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/services/api'

export default {
  name: 'EmailVerificationView',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const message = ref('')

    onMounted(async () => {
      const token = route.query.token
      if (token) {
        try {
          const response = await api.post('/auth/verify-email', { token })
          message.value = 'Email успешно подтверждён!'
          // Перенаправляем через 3 секунды на страницу входа
          setTimeout(() => {
            router.push({ name: 'Login' })
          }, 3000)
        } catch (err) {
          message.value = 'Ошибка подтверждения email. Попробуйте ещё раз.'
        }
      } else {
        message.value = 'Неверный запрос.'
      }
    })

    return { message }
  }
}
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
