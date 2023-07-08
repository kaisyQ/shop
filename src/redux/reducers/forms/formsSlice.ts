import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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
    async ({ name, email, phoneNumber, comment, brand } : { name: string, email: string, brand: string, phoneNumber: string, comment: string }) => {
        
        const response = await fetch(`${process.env.BACKEND_PORT || "http://localhost:8000/"}/sendSofaContacts`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, phoneNumber, comment, brand })
        })

        const data = response.json();

        return {
            data,
            status: response.status
        }
    }
);

export const fetchContactMessage = createAsyncThunk(
    "formsSlice/fetchContactMessage",
    async ({ name, email, phoneNumber, comment } : { name: string, email: string, phoneNumber: string, comment: string }) => {
        `${process.env.BACKEND_PORT || "http://localhost:8000/"}/sendContacts`
        const response = await fetch(`${process.env.BACKEND_PORT || "http://localhost:8000/"}/sendContacts`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, phoneNumber, comment })
        })

        const data = response.json();

        return {
            data,
            status: response.status
        }
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
        })
        builder.addCase(fetchContactMessage.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        builder.addCase(fetchSellMessage.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchSellMessage.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;
        })
        builder.addCase(fetchSellMessage.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })

    }
});

export const { reducer, actions } = formsSlice;

export const { setStatus } = actions;

export default reducer;