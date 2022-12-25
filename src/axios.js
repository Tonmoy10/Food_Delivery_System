import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:44364/api/'
})

instance.interceptors.request.use(
    config => {
        config.headers.Authorization = localStorage.getItem('_authToken')
        console.log('authorized')
        return config
    },
    err => {
    }
)

instance.interceptors.response.use(
    rsp => {
        return rsp
    },
    err => {
        if (err.response.status === 401) {
            window.location.href = '/login'
        }
        return Promise.reject(err)
    }
)
export default instance
