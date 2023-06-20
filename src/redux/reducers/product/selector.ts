import type { RootState } from "redux/store";

import { IShortProduct } from "types/types";

export const getProductItems = (state: RootState) => state.product.items;

export const getProductsLoading = (state: RootState) => state.product.loadingStatus;

export const getShortProductItems = (state: RootState): IShortProduct[] => {
    return state.product.items.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        count: product.count
    }));
}

export const getCurrentProduct = (state: RootState) => state.product.current;

