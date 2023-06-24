import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IComment } from "types/types";

import type { IServerComment, RatingScore } from "types/types";
import type { LoadingType } from "types/types";

import { IDLE, FAILED, LOADING } from "types/types";

interface InitialStateType {
    comments: IComment[],
    filerScore: RatingScore | 0,
    loadingStatus: LoadingType,
    error: Error | null
}

const initialState: InitialStateType = {
    comments: [],
    filerScore: 0,
    loadingStatus: IDLE,
    error: null
}

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async () => {
        try {
            const response =  await fetch("http://localhost:8000/comments");
            const data = await response.json();

            return {
                data,
                status: response.status
            };

        } catch (err) {
            throw(err);
        }
    }
);



export const fetchToCreateComment = createAsyncThunk(
    "comments/fetchToCreateComment",
    async ({ userName, text, stars}: { userName: string, text: string, stars: number }) => {
        try {
            const response = await fetch("http://localhost:8000/comments", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ userName, text, stars })
            });
            
            const data = await response.json();

            return {
                comment: data.comment,
                status: response.status
            };

        } catch (err) {
            throw(err);
        }
    }
);

export const fetchToDeleteComment = createAsyncThunk(
    "comments/fetchToDeleteComment",
    async (id: string) => {
        try {
            const response = await fetch(`http://localhost:8000/comments/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
            });
            
            const data = await response.json();

            return {
                id: data.deletedComment.id,
                status: response.status
            };

        } catch (err) {
            throw(err);
        }
    }
);


const commentSlice = createSlice({
    name: "commentSlice",
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<IComment>) => {
            state.comments.push(action.payload);
        },
        setFilterScore: (state, action: PayloadAction<RatingScore | 0>) => {
            state.filerScore = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchComments.fulfilled, 
            (state, action: PayloadAction<{ data: { comments: IServerComment[] }, status: number }>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) {
                state.comments = action.payload.data.comments.map(comment => {
                    return {
                        id: comment.id,
                        author: comment.userName,
                        date: (new Date(comment.created_at)),
                        text: comment.text,
                        rating: comment.stars as RatingScore
                    }
                });
            }
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    


    
        builder.addCase(fetchToCreateComment.pending, (state) => {
            state.error = null;
        })
        builder.addCase(fetchToCreateComment.fulfilled, 
            (state, action: PayloadAction<{status: number, comment: { id: string, text: string, userName: string, stars: number}}>) => {
            state.error = null;
            if (action.payload.status === 200) {
                state.comments.push({
                    id: action.payload.comment.id,
                    author: action.payload.comment.userName,
                    date: new Date(),
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

export const { addComment, setFilterScore } = actions;

export default reducer;