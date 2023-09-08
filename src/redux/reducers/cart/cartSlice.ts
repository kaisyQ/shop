import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { IProduct } from 'types/types';

type InitialStateType = {
    items: IProduct[]
}

const initialState: InitialStateType = {
    items: []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {

            const foundedProduct = state.items.find(product => product.id === action.payload.id);

            if (!foundedProduct){
                state.items.push({
                    ...action.payload,
                    count: 1
                });
                return;
            } 

            if (foundedProduct.count < action.payload.count) {
                foundedProduct.count++;
            }
            
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(product => product.id !== action.payload);
        }
    }
});

const  {actions, reducer} = cartSlice;

export const { addToCart, removeFromCart } = actions;

export default reducer;