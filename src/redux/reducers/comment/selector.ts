import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "redux/store"

export const getComments = (state: RootState) => state.comments.comments;

export const getFilterScore = (state: RootState) => state.comments.filerScore;

export const getFilteredComments = createSelector([getComments, getFilterScore], (comments, score) => {
    
    if(score === 0) {
        return comments;
    }
    
    const filteredComments = comments.filter(comment => comment.rating === score);

    return filteredComments;
});

export const getCommentLoadingStatus = (state: RootState) => state.comments.loadingStatus;
