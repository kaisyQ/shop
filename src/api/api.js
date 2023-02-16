import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8010/',
    withCredentials: true
})

export const signIn = (login, password) => {
    return instance.post('signin', { login, password })
}

export const checkMe = () => {
    return instance.get('me')
}

export const getUsers = () => {
    return instance.get('users')
}

export default instance




