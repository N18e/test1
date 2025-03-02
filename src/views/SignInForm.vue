<template>
  <div class="flex flex-col space-y-4">
    <!-- Поля для входа -->
    <div>
      <label class="block text-gray-700 mb-1" for="login">Логин</label>
      <input
          type="text"
          id="login"
          v-model="login"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label class="block text-gray-700 mb-1" for="password">Пароль</label>
      <input
          type="password"
          id="password"
          v-model="password"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
        @click.prevent="handleSignIn"
        class="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition-colors"
    >
      Войти
    </button>
    <!-- Круглые иконки соцсетей -->
    <div class="flex items-center justify-center space-x-4 mt-2">
      <button
          class="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
          @click="$emit('oauth', 'google')"
      >
        <span class="i-google" />
      </button>
      <button
          class="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center"
          @click="$emit('oauth', 'facebook')"
      >
        <span class="i-facebook" />
      </button>
      <button
          class="w-10 h-10 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center"
          @click="$emit('oauth', 'apple')"
      >
        <span class="i-apple" />
      </button>
    </div>
    <div class="text-center mt-2">
      <router-link to="/password-reset" class="text-blue-500 hover:underline">
        Забыли пароль?
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    handleSignIn() {
      console.log('Вход', this.login, this.password)
    }
  }
}
</script>

<style scoped>
.i-google::before {
  content: url('https://cdn-icons-png.flaticon.com/512/300/300221.png');
  width: 18px;
  height: 18px;
  display: block;
}
.i-facebook::before {
  content: url('https://cdn-icons-png.flaticon.com/512/733/733547.png');
  width: 18px;
  height: 18px;
  display: block;
}
.i-apple::before {
  content: url('https://cdn-icons-png.flaticon.com/512/0/747.png');
  width: 18px;
  height: 18px;
  display: block;
}
</style>
