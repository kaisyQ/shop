import type { RootState } from "store/store";


export const getLoading = (state: RootState) => state.auth.loading;

export const getToastMessage = (state: RootState) => state.auth.toastMessage;