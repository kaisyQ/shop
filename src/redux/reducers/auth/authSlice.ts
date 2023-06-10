import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootDispatch } from "redux/store";


export interface IAuthState {
    id: number | null,
    isAuth: boolean,
    login: string | null,
}


const initialState: IAuthState = {
    id: null,
    isAuth: false,
    login: null,
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IAuthState>) => {
            state.id = action.payload.id
            state.isAuth = action.payload.isAuth
            state.login = action.payload.login
        }
    }
})


const { actions, reducer } = authSlice;


export const { setAuthData } = actions;


export default reducer;