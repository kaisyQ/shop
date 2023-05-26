import { RootState } from "redux/store"

export const getBlogItems = (state: RootState) => state.blog.items;

export const getCurrentBlogItem = (state: RootState) => state.blog.current;