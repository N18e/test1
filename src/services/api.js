import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8081/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Автоматически добавляем заголовок Authorization, если токен найден
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api
