import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUser, Roles } from "types/types";

interface IUserInitialState {
    items: IUser[]
}

const initialState: IUserInitialState = {
    items: [
        {
            id: 1,
            login: 'admin',
            role: Roles.ADMIN
        },
        {
            id: 2,
            login: 'user1',
            role: Roles.EMPLOYEE
        },
        {
            id: 3,
            login: 'user2',
            role: Roles.EMPLOYEE
        }
    ]
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.items.push(action.payload)
        },
        removeUser: (state, action: PayloadAction<number>) => {
           state.items = state.items.filter(user => user.id != action.payload)
        }
    }
})

const { actions, reducer } = usersSlice;

export const { addUser, removeUser } = actions;

export default reducer;