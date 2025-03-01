<template>
  <div class="app">
    <!-- Здесь можно добавить общий хедер/футер, если нужно -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Глобальные стили для корневого компонента */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
