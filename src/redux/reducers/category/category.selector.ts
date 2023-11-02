import type { RootState } from "redux/store";

export const selectProductCategories = (state: RootState) => state.categories.items;

export const selectCurrentCategory = (state: RootState) => state.categories.current