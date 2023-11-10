import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "api/api";

export interface ICategory {
    id: string, 
    name: string,
    slug: string,
}


interface InitialState {
    items: Array<ICategory>,
    current: ICategory | null
}


const initialState: InitialState = {
    items: [],
    current: null
}


export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const response = await getCategories();
        console.log(response)
        if (response.status === 200) {
            return response.data.items
        }
        return null;
    }
);



const CategoriesSlice = createSlice({
    name: "CategoriesSlice",
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        }
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

export const { setCurrent } = actions;

export default reducer;