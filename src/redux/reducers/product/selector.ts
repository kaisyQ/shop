import { createSelector } from "@reduxjs/toolkit";

import { SELECT_NEWEST, SELECT_OLDEST } from "constants/constants";

import type { RootState } from "redux/store";

import type { IShortProduct } from "types/types";

export const getProductItems = (state: RootState) => state.product.items;

export const getProductsLoading = (state: RootState) => state.product.loadingStatus;

export const getProductSelectorType = (state: RootState) => state.product.selectorType;

export const getProductSearch = (state: RootState) => state.product.searchValue;

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

export const getFilteredByTop = (state: RootState) => state.product.filterByTop;


export const getFilteredByTopProducts = createSelector(
    [getShortProductItems, getFilteredByTop],
    (products, filteredByTop) => {
        if (filteredByTop) {
            return products.filter(product => product.topOfTheWeek);
        }
        return [...products]; 
    }
);

export const getFilteredProducts = createSelector(
    [getFilteredByTopProducts, getProductSelectorType, getProductSearch], 
    (products, select, search) => {

        const searchedProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

        switch (select) {
            case SELECT_OLDEST: {
                return searchedProducts.sort((first, second) => {
                    return first.createdAt.getTime() - second.createdAt.getTime();
                });
            }
            case SELECT_NEWEST: {
                return searchedProducts.sort((first, second) => {
                    return second.createdAt.getTime() - first.createdAt.getTime();
                });
            }
            default: {
                console.error("unexpected select type...");
                return searchedProducts;
            }
        }
    }
)

