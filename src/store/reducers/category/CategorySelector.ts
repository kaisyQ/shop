import type { RootState } from "store/store";

export const selectProductCategories = (state: RootState) => state.categories.items;

export const selectCurrentCategory = (state: RootState) => state.categories.current