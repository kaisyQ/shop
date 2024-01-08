

import type { RootState } from "store/store";

import type { IShortProduct } from "types/types";

export const getProductItems = (state: RootState) => state.product.items;

export const getProductsLoading = (state: RootState) => state.product.loadingStatus;

export const getTotal = (state: RootState) => state.product.total;

export const getShortProductItems = (state: RootState): IShortProduct[] => {
    return state.product.items.map((product: any) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        count: product.count,
        createdAt: product.createdAt,
        topOfTheWeek: product.topOfTheWeek
    }));
}

export const getCurrentProduct = (state: RootState) => state.product.current;

export const selectProductsLimit = (state: RootState) => state.product.limit;

export const selectPriceFrom = (state: RootState) => state.product.priceFrom;

export const selectPriceTo = (state: RootState) => state.product.priceTo;

export const selectIsSortByAlphabetAtoZ = (state: RootState) => state.product.isSortByAlphabetAtoZ;

export const selectIsOldest = (state: RootState) => state.product.isOldest;