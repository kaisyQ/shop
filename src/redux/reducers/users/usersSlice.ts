import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "api/api";

import { IUser, Roles } from "types/types";

import { LOADING, IDLE, FALED } from "types/types";
import type { LoadingType } from "types/types";


interface IUserInitialState {
    items: IUser[],
    current: IUser | null,
    loadingStatus: LoadingType,
    error: Error | null
}

const initialState: IUserInitialState = {
    items: [],
    current: {
        id: "3",
        login: 'user2',
        password: "2",
        role: Roles.EMPLOYEE
    },
    loadingStatus: IDLE,
    error: null
}


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        try {
            const response = await getUsers();
            return response.data
        } catch (err) {
            console.log(err);
            return err;
        }
    }
);

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.items.push(action.payload)
        },
        removeUser: (state, action: PayloadAction<string>) => {
           state.items = state.items.filter(user => user.id !== action.payload);
        },
        updateUser: (state, action: PayloadAction<IUser>) => {
            state.items = state.items.filter(user => {
                if (action.payload.id !== user.id) {
                    return user;
                }
                return {
                    ...user,
                    login: action.payload.login
                }
            })
        },
        setCurrentUser: (state, action: PayloadAction<string>) => {
            const user = state.items.find(item => item.id === action.payload);
            state.current = null;
            if (user) {
                state.current = user;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<{users: IUser[]}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.items = action.payload.users;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loadingStatus = FALED;
        })
    },
})

const { actions, reducer } = usersSlice;

export const { addUser, removeUser, setCurrentUser, updateUser } = actions;

export default reducer;