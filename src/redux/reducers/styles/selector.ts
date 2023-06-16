import { RootState } from "redux/store";

export const getIsDark = (state: RootState) => state.styles.isDark;

export const getConfirmModalCallback = (state: RootState) => state.styles.confirmModalData.callback;

export const getConfirmModalVisibility = (state: RootState) => state.styles.confirmModalData.isVisible;

export const getConfirmModalMessage = (state: RootState) => state.styles.confirmModalData.message;
