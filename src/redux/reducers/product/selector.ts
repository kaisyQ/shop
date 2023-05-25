import type { RootState } from "redux/store"

export const getProductItems = (state: RootState) => state.product.items

export const getCurrentProduct = (state: RootState) => state.product.current


