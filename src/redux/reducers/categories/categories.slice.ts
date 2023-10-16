import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductCategories, getCategoryBySlug, createCategory, updateCategory, deleteCategory } from "api/api";

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
        const response = await getProductCategories();
        if (response.status === 200) {
            return response.data.items
        }
        return null;
    }
);


export const fetchCategoryBySlug = createAsyncThunk(
    "categories/fetchCategoryBySlug",
    async (slug: string) => {
        const response = await getCategoryBySlug(slug);
        return response.data.items;
    }
);


export const fetchToDeleteCategory = createAsyncThunk(
    "categories/fetchToDeleteCategory",
    async (slug: string) => {
        const response = await deleteCategory(slug);
        return response.data.categoryId;
    }
);

export const fetchToCreateCategory = createAsyncThunk(
    "categories/fetchToCreateCategory",
    async (name: string) => {
        const response = await createCategory(name);
        return response.data.items[0];
    }
);

export const fetchToUpdateCategory = createAsyncThunk(
    "categories/fetchToUpdateCategory",
    async ({name, slug}: {name: string, slug: string}) => {
        const response = await updateCategory(name, slug);
        return response.data.items[0];
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
        
        builder.addCase(fetchCategoryBySlug.fulfilled, (state, action) => {
            state.current = action.payload[0]
        })

        builder.addCase(fetchToDeleteCategory.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        })
        

        builder.addCase(fetchToCreateCategory.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })

        builder.addCase(fetchToUpdateCategory.fulfilled, (state, action) => {
            state.items = state.items.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item;
            })
        })
    },
})

const {actions, reducer} = CategoriesSlice;

export const { setCurrent } = actions;

export default reducer;