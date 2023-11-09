import React from 'react';
import useWindowWidth from './useWindowWidth';
import { useAppDispatch } from 'redux/store';
import { setLimit } from 'redux/reducers/product/productSlice';
import { MAX_PRODUCT_LIMIT, MEDIUM_PRODUCT_LIMIT, MIN_PRODUCT_LIMIT } from 'constants/constants';


export const useProductsLimitSetter = () => {

    const width = useWindowWidth();

    const dispatch = useAppDispatch();

    if (width > 768) {
        dispatch(setLimit(MAX_PRODUCT_LIMIT));
        return;
    }

    if (width > 330) {
        dispatch(setLimit(MEDIUM_PRODUCT_LIMIT));
        return;
    }

    dispatch(setLimit(MIN_PRODUCT_LIMIT))
    return;
}
