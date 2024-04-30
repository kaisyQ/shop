import { LoadingType } from './../../../types/types';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopProducts } from "api/bestsellers/index";
import { plainToInstance } from "class-transformer";
import { FAILED, IDLE, LOADING } from 'constants/constants';
import { Bestseller } from "models/Bestseller";


export const fetchBestsellers = createAsyncThunk(
    "products/fetchBestsellers",
    async () => {
        try {
            
            const response = await getTopProducts();
            
            return {
                products: response.data.items as Array<any>,
                status: response.status
            };    

        } catch (error) {
            console.error(error);
        }
    }
);

type InitialState  = {
    items: Array<Bestseller>,
    loadingStatus: LoadingType,
    error: Error | null,
}



const bestsellerSlice = createSlice({
    
    name: 'bestsellerSlice',
    
    initialState: {
    
        items: [],    
        
        loadingStatus: IDLE,
        
        error: null,

    } as InitialState,
    
    reducers: {

    },

    extraReducers: (builder) => {
        
        builder.addCase(fetchBestsellers.pending, (state, action) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })

        builder.addCase(fetchBestsellers.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;

            if (action.payload && action.payload.status === 200) {
                state.items = plainToInstance(Bestseller, action.payload.products)
            }
        })

        builder.addCase(fetchBestsellers.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
        
    }
})

export const {} = bestsellerSlice.actions;

export default bestsellerSlice.reducer;