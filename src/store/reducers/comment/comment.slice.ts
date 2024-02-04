import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { LoadingType } from "types/types";
import { IDLE, FAILED, LOADING, ERROR, OK } from "constants/constants";
import { getComments, createComment } from "api/api";
import { plainToClass, plainToInstance } from "class-transformer";
import { Comment } from "models/Comment";
import { CreateCommentDto } from "dto/CreateCommentDto";
import { MessageDto } from "dto/MessageDto";

interface InitialStateType {
    comments: Array<Comment>,
    loadingStatus: LoadingType,
    error: Error|null,
    message: MessageDto|null
}

const initialState: InitialStateType = {    
    comments: [],
    loadingStatus: IDLE,
    error: null,
    message: null
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
    async (commentDto: CreateCommentDto, {dispatch}) => {

        const response = await createComment(commentDto);
        
        if (response.status !== 200) {
            dispatch(setMessage(new MessageDto(ERROR, 'An error occurred in creating a review!')))
        } else {
            dispatch(setMessage(new MessageDto(OK, 'The review was successfully created!')))
        }

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
        setMessage: (state, action: PayloadAction<MessageDto|null>) => {
            state.message = action.payload;
        }
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

export const {addComment, setMessage} = actions;

export default reducer;