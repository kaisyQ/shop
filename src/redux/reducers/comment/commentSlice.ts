import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "types/types";

import type { RatingScore } from "types/types";

interface InitialStateType {
    comments: IComment[],
    filerScore: RatingScore | 0
}

const initialState: InitialStateType = {
    comments: [],
    filerScore: 0
}

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
    }
});

const { reducer, actions } = commentSlice;

export const { addComment, setFilterScore } = actions;

export default reducer;