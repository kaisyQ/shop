import type { RootState } from "store/store";

export const selectBestsellers = (state: RootState) => state.bestseller.items;