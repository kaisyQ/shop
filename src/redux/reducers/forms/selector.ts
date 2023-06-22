import type { RootState } from "redux/store";

export const getFormError = (state: RootState) => state.forms.error;

export const getFormLoading = (state: RootState) => state.forms.loadingStatus;

export const getFormStatus = (state: RootState) => state.forms.responseStatus;