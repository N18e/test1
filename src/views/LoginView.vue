<template>
  <div class="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Тестовое приветствие -->
      <h1 class="text-3xl text-center text-white mb-6">Добро пожаловать!</h1>
      <!-- Форма входа -->
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-white mb-2" for="login">Логин</label>
          <input
              type="text"
              id="login"
              v-model="login"
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
        <button type="submit" class="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Войти
        </button>
      </form>
      <!-- Ссылки на восстановление пароля и регистрацию -->
      <div class="text-center mt-4">
        <router-link to="/password-reset" class="text-blue-400 hover:underline">
          Забыли пароль?
        </router-link>
      </div>
      <div class="text-center mt-2">
        <router-link to="/register" class="text-blue-400 hover:underline">
          Новый пользователь? Зарегистрироваться
        </router-link>
      </div>
      <!-- OAuth авторизация -->
      <div class="mt-6 border-t border-gray-700 pt-4">
        <button @click="oauth('google')" class="w-full mb-2 py-2 bg-red-500 hover:bg-red-600 text-white rounded">
          Войти через Google
        </button>
        <button @click="oauth('facebook')" class="w-full mb-2 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded">
          Войти через Facebook
        </button>
        <button @click="oauth('apple')" class="w-full py-2 bg-black hover:bg-gray-800 text-white rounded">
          Войти через Apple ID
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      // Здесь будет логика авторизации через REST API (axios или fetch)
      console.log("Авторизация", this.login, this.password);
    },
    oauth(provider) {
      // Логика OAuth авторизации (редирект на соответствующий endpoint)
      console.log("OAuth авторизация через", provider);
    }
  }
};
</script>

<style scoped>
/* Дополнительные стили можно добавить по необходимости */
</style>
