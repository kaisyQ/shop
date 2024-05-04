import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "api/auth";
import { LoginDto } from "dto/LoginDto";
import { RegisterDto } from "dto/RegisterDto";
import { LoadingType } from "types/types";
import { IDLE, LOADING, FAILED } from "constants/constants";


export const fetchToLogin = createAsyncThunk(
    'auth/fetchToLogin',
    async (data: LoginDto) => {
        const response = await login(data);

        if (response.status === 200) {
            
        }

    }
);

export const fetchToRegister = createAsyncThunk(
    'auth/fetchToRegister',
    async (data: RegisterDto) => {
        const response = await register(data);

        if (response.status === 200) {
            return {
                message: 'The confirmation email has been successfully sent to your email !'
            };
        }
    }
);


const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        loading: IDLE as LoadingType,
        error: null,
        toastMessage: null as string|null
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setToastmessage(state, action) {
            state.toastMessage = action.payload;
        } 
    },
    extraReducers(builder) {
        builder.addCase(fetchToRegister.pending, (state, action) => {
            state.loading = LOADING;
        })
        builder.addCase(fetchToRegister.fulfilled, (state, action) => {
            state.loading = IDLE;
            if (action.payload) {
                state.toastMessage = action.payload.message;
            }
        })
        builder.addCase(fetchToRegister.rejected, (state, action) => {
            state.loading = FAILED;
            state.toastMessage = 'An error has occurred...'
        })
    },
});

const {reducer} = authSlice;

const {actions} = authSlice;

export const {setLoading, setToastmessage} =  actions;


export default reducer;