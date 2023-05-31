import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUser, Roles } from "types/types";

interface IUserInitialState {
    items: IUser[],
    current: IUser | null
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
    ],
    current: null
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.items.push(action.payload)
        },
        removeUser: (state, action: PayloadAction<number>) => {
           state.items = state.items.filter(user => user.id != action.payload);
        },
        setCurrentUser: (state, action: PayloadAction<number>) => {
            const user = state.items.find(item => item.id === action.payload);
            state.current = null;
            if (user) {
                state.current = user;
            }
        }
    }
})

const { actions, reducer } = usersSlice;

export const { addUser, removeUser, setCurrentUser } = actions;

export default reducer;