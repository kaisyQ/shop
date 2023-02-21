import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8010/',
    withCredentials: true
})

export const signIn = (login, password) => instance.post('signin', { login, password })

export const signOut = () => instance.delete('logout')

export const checkMe = () => instance.get('me')




export const getUsers = () => instance.get('users')

export const getUser = (id) => instance.get(`users/${id}`)

export const createUser = (login, password) => instance.post(`user`, { login, password })


export const deleteSessionById = (id) => instance.delete(`session/${id}`)

export const deleteUserSessions = (userId) => instance.delete(`sessions/${userId}`)








export default instance




