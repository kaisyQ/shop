import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { contactUs, sellCouch } from "api/api";

import { IDLE, LOADING, FAILED } from "constants/constants";

import type { LoadingType } from "types/types";

type InitialStateType = {
    loadingStatus: LoadingType,
    error: Error | null,
    responseStatus: number | null,
}

const initialState: InitialStateType = {
    loadingStatus: IDLE,
    error: null,
    responseStatus: null
}



export const fetchSellMessage = createAsyncThunk(
    "formsSlice/fetchSellMessage",
    async (
        { name, email, phoneNumber, comment, brand, files }: 
        { name: string, email: string, brand: string, phoneNumber: string, comment: string, files: FileList | null }) => {
        const response = await sellCouch(name, email, phoneNumber, comment, brand, files);
        console.log(response);
        debugger;
    }
);

export const fetchContactMessage = createAsyncThunk(
    "formsSlice/fetchContactMessage",
    async ({ name, email, phoneNumber, comment }: { name: string, email: string, phoneNumber: string, comment: string }) => {
        const response = await contactUs(name, email, phoneNumber, comment)
    }
);


const formsSlice = createSlice({
    name: "formsSlice",
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<number | null>) => {
            state.responseStatus = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchContactMessage.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchContactMessage.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.responseStatus = 200;
        })
        builder.addCase(fetchContactMessage.rejected, (state, action) => {
            state.loadingStatus = FAILED;
            state.responseStatus = 500;
        })


        builder.addCase(fetchSellMessage.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchSellMessage.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.responseStatus = 200;
        })
        builder.addCase(fetchSellMessage.rejected, (state, action) => {
            state.loadingStatus = FAILED;
            state.responseStatus = 500;
        })

    }
});

export const { reducer, actions } = formsSlice;

export const { setStatus } = actions;

export default reducer;