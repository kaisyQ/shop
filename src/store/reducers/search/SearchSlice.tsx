import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { LoadingType } from "types/types";
import { IDLE, LOADING, FAILED } from "constants/constants";
import { search } from "api/api";
import { plainToInstance } from "class-transformer";
import { SearchedProduct } from "models/SearchedProduct";


type InitialStateType = {
    
    products: Array<SearchedProduct>,
    
    loadingStatus: LoadingType,
    
    error: null | Error
}

const initialState: InitialStateType = {
    products: [],
    loadingStatus: IDLE,
    error: null
}

export const fetchSearch = createAsyncThunk(
    "searchSlice/fetchSearch",
    async (query: string) => {
        
        const response = await search(query);
        
        return response.data.items as Array<any>;
    }
)


const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setSearchProducts: (state, action: PayloadAction<SearchedProduct[]>) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        
        builder.addCase(fetchSearch.pending, (state) => {
            state.loadingStatus = LOADING;
        })

        builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.products = plainToInstance(SearchedProduct, action.payload);
        })

        builder.addCase(fetchSearch.rejected, (state) => {
            state.loadingStatus = FAILED;
        })
    }
});

export const { actions, reducer } = searchSlice;

export const { setSearchProducts } = actions;

export default reducer;