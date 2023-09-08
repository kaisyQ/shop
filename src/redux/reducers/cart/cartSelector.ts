import type { RootState } from "redux/store";

import { createSelector } from "@reduxjs/toolkit";

export const getCartItems = (state: RootState) => state.cart.items;

export const getSubtotalPrice = createSelector([getCartItems], (products): number => {
    let resultPrice = 0;
    products.map(cartItem => {
        resultPrice+=cartItem.discountPrice ? cartItem.discountPrice : cartItem.price;
    });
    return resultPrice;
});
