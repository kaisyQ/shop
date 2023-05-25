import { RootState } from "redux/store"


export const getId = (state: RootState) => state.auth.id

export const getIsAuth = (state: RootState) => state.auth.isAuth

export const getLogin = (state: RootState) => state.auth.login

