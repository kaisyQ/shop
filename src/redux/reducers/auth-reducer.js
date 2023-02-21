import { createSlice } from "@reduxjs/toolkit"

import { checkMe, signIn } from "../../api/api"


const initialState = {
    id: null,
    isAuth: false,
    login: null,
    roleId: null
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.id = action.payload.id
            state.isAuth = true
            state.login = action.payload.login
            state.roleId =  action.payload.roleId
        }
    }
})


const { actions, reducer } = authSlice


export const { setAuthData } = actions


export const signInThunk = (login, password) => async (dispatch) => {
    const response = await signIn(login, password)
    if (response.status === 200) {
        dispatch(setAuthData({
            id: response.data.id,
            login: response.data.login,
            isAuth: true,
            roleId: response.data.roleId
        }))
    } 
}


export const checkMeThunk = () => async (dispatch) => {
    const response = await checkMe()
    if(response.status === 200){
        dispatch(setAuthData({
            id: response.data.id,
            login: response.data.login,
            isAuth: true,
            roleId: response.data.roleId
        }))
    }
}




export default reducer