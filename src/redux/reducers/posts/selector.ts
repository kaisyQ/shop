import type { RootState } from "redux/store";

import { createSelector } from "@reduxjs/toolkit";

import { SELECT_NEWEST, SELECT_OLDEST } from "constants/constants";

export const getPosts = (state: RootState) => state.posts.items;

export const getCurrentPost = (state: RootState) => state.posts.current;

export const getPostsLoading = (state: RootState) => state.posts.loadingStatus;

export const getPostSelectorType = (state: RootState) => state.posts.selectorType;

export const getPostSearch = (state: RootState) => state.posts.searchValue;


export const getFilteredPosts = createSelector(
    [getPosts, getPostSelectorType, getPostSearch], 
    (products, select, search) => {
        const searchedPosts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

        switch (select) {
            case SELECT_OLDEST: {
                return searchedPosts.sort((first, second) => {
                    return first.date.getTime() - second.date.getTime();
                });
            }
            case SELECT_NEWEST: {
                return searchedPosts.sort((first, second) => {
                    return second.date.getTime() - first.date.getTime();
                });
            }
            default: {
                console.error("unexpected select type...");
                return searchedPosts;
            }
        }
    }
);
