import type { RootState } from "store/store";
export const getComments = (state: RootState) => state.comments.comments;
export const getCommentLoadingStatus = (state: RootState) => state.comments.loadingStatus;
export const getCommentMessage = (state: RootState) => state.comments.message;