import axios from 'axios';
import { IShortUser } from 'types/types';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data; application/json; charset=utf-8"
    }
});


export const getUsers = () => instance.get("users");
export const getUser = (id: string) => instance.get(`users/${id}`);
export const createUser = (user: IShortUser) => instance.post("users/", {
    ...user
});
export const updateUser = (id: string, user: IShortUser) => instance.put("users", {
    data: {
        id: id,
        user: {...user}
    }
});
export const deleteUser = (id: string) => instance.delete(`users/${id}`);


export const getPosts = () => instance.get("posts");
export const getPost = (id: string) => instance.get(`posts/${id}`);
export const deletePost = (id: string) => instance.delete(`posts/${id}`);
export const createPost = (formData: FormData, data: {title: string, text: string}) => instance.post("posts", {
    file: formData,
    data: data
});

export default instance;




