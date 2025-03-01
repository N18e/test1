<template>
  <div class="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl text-center text-white mb-6">Восстановление пароля</h1>
      <form @submit.prevent="handlePasswordReset">
        <div class="mb-4">
          <label class="block text-white mb-2" for="userEmail">Введите ваш email</label>
          <input
              type="email"
              id="userEmail"
              v-model="userEmail"
              class="w-full p-2 rounded bg-gray-700 text-white"
              required
          />
        </div>
        <button type="submit" class="w-full py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded">
          Отправить ссылку для восстановления
        </button>
      </form>
      <div class="text-center mt-4">
        <router-link to="/" class="text-blue-400 hover:underline">
          Вернуться к входу
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordResetView",
  data() {
    return {
      userEmail: ""
    };
  },
  methods: {
    handlePasswordReset() {
      // Здесь реализуйте логику отправки ссылки для восстановления пароля через REST API
      console.log("Восстановление пароля для:", this.userEmail);
    }
  }
};
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
