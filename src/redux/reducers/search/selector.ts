import type { RootState } from "redux/store";

export const getSearchPosts = (state: RootState) => state.search.posts;

export const getSearchProducts = (state: RootState) => state.search.products;

export const getSearchLoading = (state: RootState) => state.search.loadingStatus;
