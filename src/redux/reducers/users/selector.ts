import { RootState } from "redux/store";

import { getId } from "../auth/selector";

import { createSelector } from "@reduxjs/toolkit";

export const getUsers = (state: RootState) => state.users.items;

export const getCurrentUser = (state: RootState) => state.users.current;

export const getUsersWithId = createSelector([getId, getUsers], (id, users) => {
    if (!id) {
        return users;
    }
    return users.filter(user => user.id !== id);
});

