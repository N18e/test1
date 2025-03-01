import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import PasswordResetView from '@/views/PasswordResetView.vue'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/store/auth'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
        meta: { requiresAuth: false }
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView,
        meta: { requiresAuth: false }
    },
    {
        path: '/password-reset',
        name: 'PasswordReset',
        component: PasswordResetView,
        meta: { requiresAuth: false }
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Глобальный guard для проверки авторизации
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.token) {
        // Если маршрут требует авторизации, а токен отсутствует, перенаправляем на страницу входа
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router
