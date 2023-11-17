import type { RootState } from "store/store";

export const getSearchProducts = (state: RootState) => state.search.products;

export const getSearchLoading = (state: RootState) => state.search.loadingStatus;
