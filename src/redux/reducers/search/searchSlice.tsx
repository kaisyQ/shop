import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { LoadingType } from "types/types";

import { IDLE, LOADING, FAILED } from "types/types";

type SearchItem = {
    id: string,
    name: string,
    imageSrc: string,
}

type InitialStateType = {
    posts: SearchItem[],
    products: SearchItem[],
    loadingStatus: LoadingType,
    error: null | Error
}

const initialState: InitialStateType = {
    posts: [],
    products: [],
    loadingStatus: IDLE,
    error: null
}


const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        
    }
});

export const { actions, reducer } = searchSlice;

export const { } =  actions;

export default reducer;