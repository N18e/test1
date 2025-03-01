import { defineStore } from 'pinia'
import authService from '@/services/authService'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        isLoading: false,
        error: null
    }),
    actions: {
        async login(credentials) {
            this.isLoading = true
            try {
                const response = await authService.login(credentials)
                // Предполагаем, что backend возвращает объект с данными пользователя и токеном
                this.user = response.data.user
                this.token = response.data.token
                // Сохраним токен для будущих запросов (опционально)
                localStorage.setItem('authToken', this.token)
                this.error = null
            } catch (err) {
                this.error = err.response?.data?.message || err.message
                console.error('Ошибка авторизации:', err)
            } finally {
                this.isLoading = false
            }
        },
        async register(userData) {
            this.isLoading = true
            try {
                const response = await authService.register(userData)
                this.error = null
                return response.data
            } catch (err) {
                this.error = err.response?.data?.message || err.message
                console.error('Ошибка регистрации:', err)
            } finally {
                this.isLoading = false
            }
        },
        async resetPassword(email) {
            this.isLoading = true
            try {
                const response = await authService.resetPassword(email)
                this.error = null
                return response.data
            } catch (err) {
                this.error = err.response?.data?.message || err.message
                console.error('Ошибка восстановления пароля:', err)
            } finally {
                this.isLoading = false
            }
        },
        logout() {
            this.user = null
            this.token = null
            localStorage.removeItem('authToken')
        }
    }
})
