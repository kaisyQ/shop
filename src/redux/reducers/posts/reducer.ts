import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, getPost, deletePost } from "api/api";

import { IPost, IPostWithDate } from "types/types";

import { LOADING, IDLE, FAILED } from "types/types";

import type { LoadingType } from "types/types";

interface IServerPost {
    id: string,
    updated_at: string,
    created_at: string,
    imageSrc: string,
    text: string,
    title: string
}

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
);



export const fetchToDeletePost = createAsyncThunk(
    "posts/fetchToDeletePost",
    async (id: string) => {
        try {
            const response = await deletePost(id);
            return response.data;
        } catch (err) {
            console.log(err);
            return err;
        }

    }
);


export const fetchToCreatePost = createAsyncThunk(
    "posts/fetchToCreatePost",
    async (formData: FormData) => {
        try {
            const response = await fetch("http://localhost:8000/posts", {
                method: "POST",
                body: formData,
                credentials: "include"
            })

            const data = await response.json();
            console.log(data)
            return {
                post: data.createdPost,
                status: response.status
            }
        } catch (err) {
            console.log(err);
            return err;
        }

    }
);

export const fetchToUpdatePost = createAsyncThunk(
    "posts/fetchToUpdatePost",
    async (formData: FormData) => {
        try {
            const response = await fetch("http://localhost:8000/posts", {
                method: "PUT",
                body: formData,
                credentials: "include"
            })

            const data = await response.json();
            return {
                status: response.status,
                post: data.updatedPost
            };
        } catch (err) {
            console.log(err);
            return err;
        }

    }
);




const postsSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPostWithDate[]>) => {
            state.items = action.payload;
        },
        setCurrent: (state, action: PayloadAction<IPostWithDate | null>) => {
            state.current = action.payload
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
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<{posts: IServerPost[]}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.items = action.payload.posts.map(post => ({
                id: post.id,
                title: post.title,
                text: post.text,
                imageSrc: post.imageSrc,
                date: new Date(post.created_at)
            }));
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        
        
        builder.addCase(fetchPostById.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchPostById.fulfilled, (state, action: PayloadAction<{post: IServerPost}>) => {
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
            state.loadingStatus = FAILED;
        })




        builder.addCase(fetchToDeletePost.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToDeletePost.fulfilled, (state, action: PayloadAction<{ deletedPost: IServerPost}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.items = state.items.filter(post => post.id !== action.payload.deletedPost.id)
        })
        builder.addCase(fetchToDeletePost.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })

        builder.addCase(fetchToCreatePost.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToCreatePost.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) {
                state.items.push({
                    id: action.payload.post.id,
                    date: new Date(action.payload.post.created_at),
                    imageSrc: action.payload.post.imageSrc,
                    text: action.payload.post.text,
                    title:action.payload.post.title
                })
            }
        })
        builder.addCase(fetchToCreatePost.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    },
})

const { actions, reducer } = postsSlice;

export const { setPosts, setCurrent, removePost, updatePost } = actions;


export default reducer;