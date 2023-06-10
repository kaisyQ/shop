import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true
});


export const getUsers = () => instance.get("users");


export const getPosts = () => instance.get("posts");
export const getPost = (id: string) => instance.get(`posts/${id}`);


export default instance;




