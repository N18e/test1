import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import RegisterView from '@/views/RegisterView.vue'
import PasswordResetView from '@/views/PasswordResetView.vue'

const routes = [
    {
        path: '/',
        name: 'Auth',
        component: AuthView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/password-reset',
        name: 'PasswordReset',
        component: PasswordResetView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
