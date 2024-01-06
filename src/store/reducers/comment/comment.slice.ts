import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import type { LoadingType } from "types/types";

import { IDLE, FAILED, LOADING } from "constants/constants";

import { getComments, createComment } from "api/api";
import { plainToClass, plainToInstance } from "class-transformer";
import { Comment } from "models/Comment";

interface InitialStateType {
    comments: Array<Comment>,
    loadingStatus: LoadingType,
    error: Error | null,
}

const initialState: InitialStateType = {
    
    comments: [],
    
    loadingStatus: IDLE,
    
    error: null,
    
}

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async () => {
        const response = await getComments();
        return {
            status: response.status,
            items: response.data.items as Array<any>
        };
    }
);

export const fetchToCreateComment = createAsyncThunk(
    "comments/fetchToCreateComment",
    async ({ username, text, stars }: { username: string, text: string, stars: number }) => {

        const response = await createComment(username, text, stars);
        return {
            status: response.status,
            comment: response.data as any
        };
    }
);


const commentSlice = createSlice({
    name: "commentSlice",
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload);
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
                    state.comments = plainToInstance(Comment, action.payload.items);
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
                    state.comments.push(plainToClass(Comment, action.payload.comment));
                }
            })
        builder.addCase(fetchToCreateComment.rejected, (state, action) => {
        })
    }
});

const { reducer, actions } = commentSlice;

export const {addComment} = actions;

export default reducer;