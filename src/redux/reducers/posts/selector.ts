import { RootState } from "redux/store"

export const getPosts = (state: RootState) => state.posts.items;

export const getCurrentPost = (state: RootState) => state.posts.current;