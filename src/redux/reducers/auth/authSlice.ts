import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { LoadingType, Role } from "types/types";

import { FAILED, IDLE, LOADING, ADMIN, EMPLOYEE } from "constants/constants";

import { login as loginApi, logout, checkMe } from "api/api";

import type { LoginResponse } from "./response.types";

export interface IAuthState {
    id: string | null,
    isAuth: boolean,
    login: string | null,
    loadingStatus: LoadingType,
    error: Error | null,
    role: Role | null
}


type AuthPayload = {
    status: number
    data : {
        id: string,
        role: string, 
        login: string,
    }
}

const initialState: IAuthState = {
    id: null,
    isAuth: false,
    login: null,
    role: null,
    loadingStatus: IDLE,
    error: null,
}



export const fetchToLogin = createAsyncThunk(
    "auth/fetchToLogin", 
    async ({ login, password }: { login: string, password: string }) => {

        const response: LoginResponse = await loginApi(JSON.stringify({ login, password }));
        return {
            status: response.status,
            data: response.data
        }
    }
);


export const fetchToCheckMe = createAsyncThunk(
    "auth/fetchToCheckMe", 
    async () => {
        try {
            const response = await fetch(`https://sofas-6bfb2aa4dea9.herokuapp.com/auth`, {
                method: "GET", 
                credentials: "include",
            });
            const data = await response.json();
            
            return {
                data: data,
                status: response.status
            }
        } catch (err) {
            throw(err);
        }
    }
);

export const fetchToLogout = createAsyncThunk(
    "auth/fetchToLogout", 
    async () => {
        try {
            const response = await fetch(`https://sofas-6bfb2aa4dea9.herokuapp.com/auth`, {
                method: "DELETE", 
                credentials: "include",
            });
            return {
                status: response.status
            }
        } catch (err) {
            throw(err);
        }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IAuthState>) => {
            state.id = action.payload.id
            state.isAuth = action.payload.isAuth
            state.login = action.payload.login
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchToLogin.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToLogin.fulfilled, (state, action: PayloadAction<AuthPayload>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if(action.payload.status === 200) {
                state.isAuth = true;
                state.login = action.payload.data.login;
                state.id = action.payload.data.id;
                if (action.payload.data.role === "ADMIN") {
                    state.role = ADMIN;
                }
                if (action.payload.data.role === "EMPLOYEE") {
                    state.role = EMPLOYEE;
                }
                return;
            }
        })
        builder.addCase(fetchToLogin.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        builder.addCase(fetchToCheckMe.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToCheckMe.fulfilled, (state, action: PayloadAction<AuthPayload>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if(action.payload.status === 200) {
                state.isAuth = true;
                state.id = action.payload.data.id;
                state.login = action.payload.data.login;
                if (action.payload.data.role === "ADMIN") {
                    state.role = ADMIN;
                }
                if (action.payload.data.role === "EMPLOYEE") {
                    state.role = EMPLOYEE;
                }
                return;
            }
        })
        builder.addCase(fetchToCheckMe.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        builder.addCase(fetchToLogout.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToLogout.fulfilled, (state, action: PayloadAction<{ status: number }>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) {
                state.isAuth = false;
                state.id = null;
                state.login = null;
                state.role = null;
                return;
            }
        })
        builder.addCase(fetchToLogout.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    }
})


const { actions, reducer } = authSlice;


export const { setAuthData } = actions;


export default reducer;