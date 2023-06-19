import { RootState } from "redux/store";


export const getId = (state: RootState) => state.auth.id;

export const getIsAuth = (state: RootState) => state.auth.isAuth;

export const getLogin = (state: RootState) => state.auth.login;

export const getRole = (state: RootState) => state.auth.role

export const getAuthLoading = (state: RootState) => state.auth.loadingStatus;

export const getAuthError = (state: RootState) => state.auth.error;

