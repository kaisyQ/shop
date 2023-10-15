import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import type { ServerComment, RatingScore, Comment } from "types/types";

import type { LoadingType, SelectType } from "types/types";

import { IDLE, FAILED, LOADING } from "constants/constants";

import { SELECT_NEWEST } from "constants/constants";

import { getComments, deleteComment, createComment } from "api/api";

import { CreateCommentResponse, DeleteCommentResponse, GetCommentsResponse } from "./response.types";

interface InitialStateType {
    comments: Comment[],
    filerScore: RatingScore | 0,
    loadingStatus: LoadingType,
    error: Error | null,
    selectorType: SelectType,
}

const initialState: InitialStateType = {
    comments: [],
    filerScore: 0,
    loadingStatus: IDLE,
    error: null,
    selectorType: SELECT_NEWEST,
}

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async () => {
        const response = await getComments();
        return {
            comments: response.data.items,
            status: response.status
        };
    }
);

export const fetchToCreateComment = createAsyncThunk(
    "comments/fetchToCreateComment",
    async ({ username, text, stars}: { username: string, text: string, stars: number }) => {

        const response = await createComment(JSON.stringify({ username, text, stars }));
        console.log(response)

        return {
            status: response.status,
            comment: response.data.items[0]
        };
    }
);

export const fetchToDeleteComment = createAsyncThunk(
    "comments/fetchToDeleteComment",
    async (id: string) => {
        const response = await deleteComment(id);
        console.log(response)

        return {
            status: response.status,
            id: response.data.deletedComment.id
        }
    }
);


const commentSlice = createSlice({
    name: "commentSlice",
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload);
        },
        setFilterScore: (state, action: PayloadAction<RatingScore | 0>) => {
            state.filerScore = action.payload
        },
        setSelectorType: (state, action: PayloadAction<SelectType>) => {
            state.selectorType = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchComments.fulfilled, 
            (state, action) => {
            
            state.loadingStatus = IDLE;
            state.error = null;
            
            if (action.payload.status === 200) {
                state.comments = action.payload.comments.map((comment: any) => ({
                    id: comment.id,
                    author: comment.username,
                    date: (new Date(comment.createdAt)),
                    text: comment.text,
                    rating: comment.stars as RatingScore
                }));
            }
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    


    
        builder.addCase(fetchToCreateComment.pending, (state) => {
            state.error = null;
        })
        builder.addCase(fetchToCreateComment.fulfilled, 
            (state, action) => {
            state.error = null;
            if (action.payload.status === 200) {
                state.comments.push({
                    id: action.payload.comment.id,
                    author: action.payload.comment.username,
                    date: new Date(action.payload.comment.createdAt),
                    text: action.payload.comment.text,
                    rating:  action.payload.comment.stars as RatingScore
                })
            }
        })
        builder.addCase(fetchToCreateComment.rejected, (state, action) => {
        })




        builder.addCase(fetchToDeleteComment.pending, (state) => {
            state.error = null;
        })
        builder.addCase(fetchToDeleteComment.fulfilled, 
            (state, action: PayloadAction<{status: number,  id: string}>) => {
            state.error = null;
            if (action.payload.status === 200) {
                state.comments = state.comments.filter(comment => comment.id !== action.payload.id)
            }
        })
        builder.addCase(fetchToDeleteComment.rejected, (state, action) => {
        })
    }
});

const { reducer, actions } = commentSlice;

export const { 
    addComment, setFilterScore, setSelectorType, 
} = actions;

export default reducer;