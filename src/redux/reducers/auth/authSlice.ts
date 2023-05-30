import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { checkMe, signIn, signOut } from "../../../api/api";
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


export const signInThunk = (login: string, password: string) => async (dispatch: RootDispatch) => {
    const response = await signIn(login, password);
    if (response.status === 200) {
        dispatch(setAuthData({
            id: response.data.id,
            login: response.data.login,
            isAuth: true,
        }));
    } 
}


export const signOutThunk = () => async (dispatch: RootDispatch) => {
    const response = await signOut();
    if(response.status === 200) {
        dispatch(setAuthData({
            id: null,
            login: null,
            isAuth: false, 
        }));
    }
}

export const checkMeThunk = () => async (dispatch: RootDispatch) => {
    const response = await checkMe();
    if(response.status === 200){
        dispatch(setAuthData({
            id: response.data.id,
            login: response.data.login,
            isAuth: true,
        }));
    }
}





export default reducer;