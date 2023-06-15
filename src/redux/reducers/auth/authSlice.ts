import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { LoadingType, FAILED, IDLE, LOADING, Roles } from "types/types";

export interface IAuthState {
    id: number | null,
    isAuth: boolean,
    login: string | null,
    loadingStatus: LoadingType,
    error: Error | null,
    role: Roles | null
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
    async ({ login, password }: {login: string, password: string}) => {
        const response = await fetch("http://localhost:8000/auth", {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ login, password })
        });

        const data = await response.json();
        return data
    }
);


export const fetchToCheckMe = createAsyncThunk(
    "auth/fetchToCheckMe", 
    async () => {
        const response = await fetch("http://localhost:8000/auth", {
            method: "GET", 
            credentials: "include",
        });

        const data = await response.json();
        return data
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
        builder.addCase(fetchToLogin.fulfilled, (state, action: PayloadAction<{ role: string, login: string}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.isAuth = true;
            state.login = action.payload.login;
            if (action.payload.role === "ADMIN") {
                state.role = Roles.ADMIN;
            }
            if (action.payload.role === "EMPLOYEE") {
                state.role = Roles.EMPLOYEE;
            }
        })
        builder.addCase(fetchToLogin.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        builder.addCase(fetchToCheckMe.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToCheckMe.fulfilled, (state, action: PayloadAction<{ role: string, login: string}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.isAuth = true;
            state.login = action.payload.login;
            if (action.payload.role === "ADMIN") {
                state.role = Roles.ADMIN;
            }
            if (action.payload.role === "EMPLOYEE") {
                state.role = Roles.EMPLOYEE;
            }
        })
        builder.addCase(fetchToCheckMe.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    }
})


const { actions, reducer } = authSlice;


export const { setAuthData } = actions;


export default reducer;