

import type { RootState } from "redux/store";

import type { IShortProduct } from "types/types";

export const getProductItems = (state: RootState) => state.product.items;

export const getProductsLoading = (state: RootState) => state.product.loadingStatus;

export const getTotal = (state: RootState) => state.product.total;

export const getShortProductItems = (state: RootState): IShortProduct[] => {
    return state.product.items.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        count: product.count,
        createdAt: product.createdAt,
        topOfTheWeek: product.topOfTheWeek
    }));
}

export const getCurrentProduct = (state: RootState) => state.product.current;

export const getTopProducts = (state: RootState) => state.product.topProducts;


