import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import type { LoadingType } from "types/types";

import { IDLE, LOADING, FAILED } from "constants/constants";

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

export const fetchSearch = createAsyncThunk(
    "searchSlice/fetchSearch",
    async (searchData: string) => {
        try {
            const response = await fetch(`http://198.245.55.24:8000/sendContacts/search/${searchData}`,{
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include"
            })
            const data = await response.json();
            
            return {
                posts: data.posts,
                products: data.products,
                status: response.status
            };
        } catch (err) {
            console.log(err);
            throw(err)
        }
    }
)


const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setSearchProducts: (state, action: PayloadAction<SearchItem[]>) => {
            state.products = action.payload;
        },
        setSearchPosts: (state, action: PayloadAction<SearchItem[]>) => {
            state.posts = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearch.pending, (state) => {
            state.loadingStatus = LOADING;
        })
        builder.addCase(fetchSearch.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) {
                
                console.log(action.payload)
                state.products = action.payload.products.map((product: any) => {
                    return {
                        id: product.id,
                        name: product.name,
                        imageSrc: product.images[0].src
                    }
                });

                state.posts = action.payload.posts.map((post: any) => {
                    return {
                        id: post.id,
                        name: post.title,
                        imageSrc: post.imageSrc
                    }
                });
            }
        })
        builder.addCase(fetchSearch.rejected, (state) => {
            state.loadingStatus = FAILED;
        })
    }
});

export const { actions, reducer } = searchSlice;

export const { setSearchPosts, setSearchProducts } =  actions;

export default reducer;