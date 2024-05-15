import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register, finishRegistration } from "api/auth";
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

export const fetchToFinishRegistration = createAsyncThunk(
    'auth/fetchToFinishRegistration',
    async (data: RegisterDto) => {
        const response = await finishRegistration(data);
        if (response.status === 200) {
            return {
                message: 'Successfully!',
                username: response.data.username,
                email: response.data.email
            };
        }
    }
)


const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isLoggedIn: false,
        loading: IDLE as LoadingType,
        error: null,
        toastMessage: null as string|null,
        isCodeStep: false,
        username: '',
        password: '',
        code: '',
        email: '',
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setToastmessage(state, action) {
            state.toastMessage = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setUsername(state, action) {
            state.username = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setCode(state, action) {
            state.code = action.payload;
        },
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
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
                state.isCodeStep = true;
            }
        })
        builder.addCase(fetchToRegister.rejected, (state, action) => {
            state.loading = FAILED;
            state.toastMessage = 'An error has occurred...';
        })

        builder.addCase(fetchToFinishRegistration.pending, (state, action) => {
            state.loading = LOADING;
        })
        builder.addCase(fetchToFinishRegistration.fulfilled, (state, action) => {
            state.loading = IDLE;
            if (action.payload) {
                state.toastMessage = action.payload.message;
                state.isLoggedIn = true;
                state.email = action.payload.email;
                state.username = action.payload.username;
                state.password = '';
                state.code = '';
            }
        })
        builder.addCase(fetchToFinishRegistration.rejected, (state, action) => {
            state.loading = FAILED;
            state.toastMessage = 'An error has occurred...';
        })
    },
});

const {reducer} = authSlice;

const {actions} = authSlice;

export const {setLoading, setToastmessage, setEmail, setUsername, setPassword, setCode} =  actions;


export default reducer;