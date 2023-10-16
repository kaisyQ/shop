import type { RootState } from "redux/store";

export const selectProductCategories = (state: RootState) => state.categoris.items;