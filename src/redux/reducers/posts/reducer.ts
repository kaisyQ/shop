import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { IPost, IPostWithDate, ServerPost } from "types/types";

import { LOADING, IDLE, FAILED } from "constants/constants";

import type { LoadingType, SelectType } from "types/types";

import { SELECT_NEWEST } from "constants/constants";

import { createPost, deletePost, getPost, getPosts, updatePost as updatePostApi } from "api/api";

import type { 
    GetPostsResponse, GetPostResponse, CreatePostResponse, DeletePostResponse, UpdatePostResponse
} from "./response.types";

interface IServerPost {
    id: string,
    updated_at: string,
    created_at: string,
    imagesSrc: { id: string, src: string }[],
    text: string,
    title: string
}

interface IBlogsInitialState {
    items: IPostWithDate[],
    current: null | IPostWithDate,
    loadingStatus: LoadingType,
    error: Error | null,
    selectorType: SelectType,
    searchValue: string
}

const initialState: IBlogsInitialState = {
    items: [],
    current: null,
    loadingStatus: IDLE,
    error: null,
    selectorType: SELECT_NEWEST,
    searchValue: ""
}

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const response = await getPosts();
        console.log(response.data.posts.items)
        return {
            status: response.status,
            posts: response.data.posts.items
        };
    }   
)


export const fetchPostById = createAsyncThunk(
    "posts/fetchPostById",
    async (id: string) => {
        const response = await getPost(id);
        console.log(response.data);
        return {
            status: response.status,
            post: response.data.items[0]
        };
    }
);



export const fetchToDeletePost = createAsyncThunk(
    "posts/fetchToDeletePost",
    async (id: string) => {
        const response: DeletePostResponse = await deletePost(id);
        return {
            id: response.data.deletedPost.id,
            status: response.status
        };
    }
);


export const fetchToCreatePost = createAsyncThunk(
    "posts/fetchToCreatePost",
    async (formData: FormData) => {
        const response: CreatePostResponse = await createPost(formData)
        return {
            post: response.data.createdPost,
            status: response.status
        }
    }

);

export const fetchToUpdatePost = createAsyncThunk(
    "posts/fetchToUpdatePost",
    async ({formData, id} : {formData: FormData, id: string}) => {
        const response = await updatePostApi(formData, id);
        
        console.log(response)

        return {
            post: response.data.updatedPost,
            status: response.status
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
        setSelectorType: (state, action: PayloadAction<SelectType>) => {
            state.selectorType = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
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
            if (action.payload.status === 200) {

                state.items = action.payload.posts.map((post: any) => ({
                    id: post.id,
                    title: post.title,
                    text: post.text,
                    date: new Date(post.createdAt),
                    imagesSrc: post.imagesSrc
                }))
            }
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        
        
        builder.addCase(fetchPostById.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchPostById.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;

            if (action.payload.status === 200) {
                
                state.current = {
                    id: action.payload.post.id,
                    title: action.payload.post.title,
                    text: action.payload.post.text,
                    imagesSrc: action.payload.post.imagesSrc,
                    date: new Date(action.payload.post.createdAt)
                };
            }
        })
        builder.addCase(fetchPostById.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })




        builder.addCase(fetchToDeletePost.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToDeletePost.fulfilled, (state, action: PayloadAction<{ status: number, id: string}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) { 
                state.items = state.items.filter(post => post.id !== action.payload.id);
            }
        })
        builder.addCase(fetchToDeletePost.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })

        
        
        
        builder.addCase(fetchToCreatePost.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToCreatePost.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;

            if (action.payload.status === 200) {
                state.items.push({
                    id: action.payload.post.id,
                    date: new Date(action.payload.post.created_at),
                    imagesSrc: action.payload.post.imagesSrc,
                    text: action.payload.post.text,
                    title:action.payload.post.title
                });
            }
        })
        builder.addCase(fetchToCreatePost.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    
        


        builder.addCase(fetchToUpdatePost.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToUpdatePost.fulfilled, (state, action: PayloadAction<{status: number, post: ServerPost}>) => {
            state.loadingStatus = IDLE;
            state.error = null;

            if (action.payload.status === 200) {
                state.items = state.items.filter(post => { 
                    if (post.id !== action.payload.post.id) {
                        return post;
                    }
                    return {
                        id: action.payload.post.id,
                        date: new Date(action.payload.post.created_at),
                        imagesSrc: action.payload.post.imagesSrc,
                        text: action.payload.post.text,
                        title:action.payload.post.title
                    }
                });
            }
        })
        builder.addCase(fetchToUpdatePost.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    },
})

const { actions, reducer } = postsSlice;

export const { 
    setPosts, setCurrent, removePost, 
    updatePost, setSearchValue, setSelectorType
} = actions;


export default reducer;