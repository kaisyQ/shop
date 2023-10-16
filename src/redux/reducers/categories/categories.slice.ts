import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductCategories } from "api/api";

export interface ICategory {
    id: string, 
    name: string,
    slug: string,
}


interface InitialState {
    items: Array<ICategory>
}


const initialState: InitialState = {
    items: []
}


export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const response = await getProductCategories();
        if (response.status === 200) {
            return response.data.items
        }
        return null;
    }
)


const CategoriesSlice = createSlice({
    name: "CategoriesSlice",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            if (action.payload) {
                state.items = action.payload.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    slug: item.slug
                }))
            }
        })
    },
})

const {actions, reducer} = CategoriesSlice;

export const { } = actions;

export default reducer;