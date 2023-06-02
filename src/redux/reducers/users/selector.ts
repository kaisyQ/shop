import { RootState } from "redux/store";

export const getUsers = (state: RootState) => state.users.items;

export const getCurrentUser = (state: RootState) => state.users.current;