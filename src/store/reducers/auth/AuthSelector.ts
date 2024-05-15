import type { RootState } from "store/store";


export const getLoading = (state: RootState) => state.auth.loading;

export const getToastMessage = (state: RootState) => state.auth.toastMessage;

export const getIsCode = (state: RootState) => state.auth.isCodeStep;

export const getCode = (state: RootState) => state.auth.code;

export const getEmail = (state: RootState) => state.auth.email;

export const getUsername = (state: RootState) => state.auth.username;

export const getPassword = (state: RootState) => state.auth.password;

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;