import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from 'models/Product';

type InitialStateType = {
    items: Product[]
}

const initialState: InitialStateType = {
    items: []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {

            const foundedProduct = state.items.find(product => product.id === action.payload.id);

            if (!foundedProduct){
                state.items.push(action.payload);
                return;
            } 

            if (foundedProduct.count < action.payload.count) {
                foundedProduct.count++;
            }
            
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(product => product.id !== action.payload);
        }
    }
});

const  {actions, reducer} = cartSlice;

export const { addToCart, removeFromCart } = actions;

export default reducer;