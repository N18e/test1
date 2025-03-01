import api from './api'

export default {
    login(credentials) {
        return api.post('/auth/login', credentials)
    },
    register(userData) {
        return api.post('/auth/register', userData)
    },
    resetPassword(email) {
        return api.post('/auth/reset-password', { email })
    },
    oauth(provider) {
        // Для OAuth предполагается, что backend возвращает URL для редиректа
        return api.get(`/auth/oauth/${provider}`)
    }
}
