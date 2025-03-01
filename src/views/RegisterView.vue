<template>
  <div class="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl text-center text-white mb-6">Регистрация нового пользователя</h1>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-white mb-2" for="userLogin">Логин</label>
          <input
              type="text"
              id="userLogin"
              v-model="userLogin"
              class="w-full p-2 rounded bg-gray-700 text-white"
              required
          />
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2" for="userEmail">Email</label>
          <input
              type="email"
              id="userEmail"
              v-model="userEmail"
              class="w-full p-2 rounded bg-gray-700 text-white"
              required
          />
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2" for="password">Пароль</label>
          <input
              type="password"
              id="password"
              v-model="password"
              class="w-full p-2 rounded bg-gray-700 text-white"
              required
          />
        </div>
        <div class="mb-4">
          <label class="block text-white mb-2" for="confirmPassword">Подтвердите пароль</label>
          <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="w-full p-2 rounded bg-gray-700 text-white"
              required
          />
        </div>
        <button type="submit" class="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded">
          Зарегистрироваться
        </button>
      </form>
      <div class="text-center mt-4">
        <router-link to="/" class="text-blue-400 hover:underline">
          Уже есть аккаунт? Войти
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      userLogin: "",
      userEmail: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    handleRegister() {
      // Добавьте валидацию и логику регистрации через REST API
      if (this.password !== this.confirmPassword) {
        alert("Пароли не совпадают!");
        return;
      }
      console.log("Регистрация", this.userLogin, this.userEmail, this.password);
    }
  }
};
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
