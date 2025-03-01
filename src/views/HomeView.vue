<template>
  <div class="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
    <h1 class="text-4xl mb-4">Главная страница</h1>
    <p>Добро пожаловать, {{ user?.firstName || 'Гость' }}!</p>
    <button @click="logout" class="mt-6 py-2 px-4 bg-red-600 hover:bg-red-700 rounded">
      Выйти
    </button>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth'
import { computed } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const authStore = useAuthStore()
    const user = computed(() => authStore.user)

    function logout() {
      authStore.logout()
      // После выхода перенаправляем пользователя на страницу входа
      window.location.href = '/'
    }

    return { user, logout }
  }
}
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
