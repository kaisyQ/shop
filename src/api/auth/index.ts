import { instance } from "api/api";
import { LoginDto } from "dto/LoginDto";
import { RegisterDto } from "dto/RegisterDto";


export const login = (data: LoginDto) => instance.post('/auth/login', {
    email: data.email,
    password: data.password
});

export const register = (data: RegisterDto) => instance.post('/auth/register', {
    email: data.email,
    password: data.password,
    username: data.username
});