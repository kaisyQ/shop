import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, getPost } from "api/api";

import { IPost, IPostWithDate } from "types/types";

import { LOADING, IDLE, FALED } from "types/types";
import type { LoadingType } from "types/types";

interface IBlogsInitialState {
    items: IPostWithDate[],
    current: null | IPostWithDate,
    loadingStatus: LoadingType,
    error: Error | null
}

const initialState: IBlogsInitialState = {
    items: [],
    current: null,
    loadingStatus: IDLE,
    error: null
}

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        try {
            const response = await getPosts();
            return response.data;
        } catch (err) {
            console.log(err);
            return err;
        }

    }
)


export const fetchPostById = createAsyncThunk(
    "posts/fetchPostById",
    async (id: string) => {
        try {
            const response = await getPost(id);
            return response.data;
        } catch (err) {
            console.log(err);
            return err;
        }

    }
)

const postsSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPostWithDate[]>) => {
            state.items = action.payload;
        },
        setCurrent: (state, action: PayloadAction<string>) => {
            state.current = state.items.filter(item => item.id === action.payload)[0]
        },
        createPost: (state, action: PayloadAction<IPost>) => {
            const date = new Date();
            state.items.push({
                id: (state.items.length+1).toString(),
                date: date,
                ...action.payload
            })
        },
        removePost: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updatePost: (state, action: PayloadAction<IPost>) => {
            state.items = state.items.map(item => {
                if (item.id !== action.payload.id) {
                    return item;
                }
                
                return {
                    ...item, 
                    ...action.payload
                }
            })
        },
    },
    extraReducers: (builder) => {
        
        builder.addCase(fetchPosts.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.items = action.payload.posts;
            console.log(action.payload.posts)
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loadingStatus = FALED;
        })


        builder.addCase(fetchPostById.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchPostById.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.current = {
                id: action.payload.post.id,
                title: action.payload.post.title,
                text: action.payload.post.text,
                imageSrc: action.payload.post.imageSrc,
                date: new Date(action.payload.post.created_at)
            } as IPostWithDate;
        })
        builder.addCase(fetchPostById.rejected, (state, action) => {
            state.loadingStatus = FALED;
        })
    },
})

const { actions, reducer } = postsSlice;

export const { setPosts, setCurrent, createPost, removePost, updatePost } = actions;


export default reducer;