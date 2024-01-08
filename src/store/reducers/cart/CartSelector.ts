import type { RootState } from "store/store";

import { createSelector } from "@reduxjs/toolkit";

export const getCartItems = (state: RootState) => state.cart.items;

export const getCartItemCount = (state: RootState) => state.cart.items.length

export const getSubtotalPrice = createSelector([getCartItems], (products): number => {
    let resultPrice = 0;
    
    for (var i = 0; i < products.length; ++i) {
        resultPrice += products[i].discountPrice ? products[i].discountPrice : products[i].price;
    }

    return resultPrice;
});
