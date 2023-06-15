import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { IDLE, LOADING, FAILED } from "types/types";

import type { LoadingType } from "types/types";

type InitialStateType = {
    loading: LoadingType,
    error: Error| null
}

const initialState: InitialStateType = {
    loading: IDLE,
    error: null
}


const formsSlice = createSlice({
    name: "formsSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
});

export const { reducer, actions } = formsSlice;

export const {} = actions;

export default reducer;