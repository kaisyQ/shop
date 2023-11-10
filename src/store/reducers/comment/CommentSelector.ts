import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "store/store";

import { SELECT_NEWEST, SELECT_OLDEST } from "constants/constants";

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

export const getCommentSelectorType = (state: RootState) => state.comments.selectorType;

export const getFilteredAdminComments = createSelector(
    [getComments, getCommentSelectorType], 
    (comments, select) => {
        switch (select) {
            case SELECT_OLDEST: {
                return comments.toSorted((first, second) => {
                    return first.date.getTime() - second.date.getTime();
                });
            }
            case SELECT_NEWEST: {
                return comments.toSorted((first, second) => {
                    return second.date.getTime() - first.date.getTime();
                });
            }
            default: {
                console.error("unexpected select type...");
                return [...comments];
            }
        }
    }
);


