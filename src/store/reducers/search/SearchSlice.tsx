import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import type { LoadingType } from "types/types";

import { IDLE, LOADING, FAILED } from "constants/constants";
import { search } from "api/api";


type SearchItem = {
    id: string,
    name: string,
    slug: string,
    image: string,
}

type InitialStateType = {
    products: SearchItem[],
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
        console.log(response)
        return response.data.items;
    }
)


const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setSearchProducts: (state, action: PayloadAction<SearchItem[]>) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearch.pending, (state) => {
            state.loadingStatus = LOADING;
        })
        builder.addCase(fetchSearch.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            console.log(action.payload)

            state.products = action.payload.map((product: any) => {
                return {
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    image: product.image
                }
            });
        })
        builder.addCase(fetchSearch.rejected, (state) => {
            state.loadingStatus = FAILED;
        })
    }
});

export const { actions, reducer } = searchSlice;

export const { setSearchProducts } = actions;

export default reducer;