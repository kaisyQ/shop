import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "api/api";

import { IUser } from "types/types";

import { LOADING, IDLE, FAILED } from "types/types";
import type { IShortUser, LoadingType } from "types/types";


interface IUserInitialState {
    items: IUser[],
    current: IUser | null,
    loadingStatus: LoadingType,
    error: Error | null
}

const initialState: IUserInitialState = {
    items: [],
    current: null,
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

export const fetchUserById = createAsyncThunk(
    "users/fetchUserById",
    async (id: string) => {
        try {
            const response = await getUser(id);
            return response.data
        } catch (err) {
            console.log(err);
            return err;
        }
    }
);

export const fetchToCreateUser = createAsyncThunk(
    "users/fetchToCreateUser",
    async (user: IShortUser) => {
        console.log(user);
        try {

            //const response = await createUser(user);
            //return response.data

            const response = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(user)
            });
            const res = await response.json();
            return res;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
);

export const fetchToUpdateUser = createAsyncThunk(
    "users/fetchToUpdateUser",
    async ({ id, user }: { id: string, user: { login?: string, password?: string} }) => {
        try {
            const response = await fetch("http://localhost:8000/users", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ id, user })
            });
            const res = await response.json();
            return res;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
);

export const fetchToDeleteUser = createAsyncThunk(
    "users/fetchToDeleteUser",
    async (id: string) => {
        try {
            const response = await deleteUser(id);
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
        setCurrentUser: (state, action: PayloadAction<null | IUser>) => {
            state.current = action.payload;
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
            state.loadingStatus = FAILED;
        })



        builder.addCase(fetchUserById.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<{user: IUser}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.current = action.payload.user;
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })



        builder.addCase(fetchToCreateUser.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToCreateUser.fulfilled, (state, action: PayloadAction<{user: IUser}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.items.push(action.payload.user);
        })
        builder.addCase(fetchToCreateUser.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })

        
        
        
        builder.addCase(fetchToUpdateUser.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToUpdateUser.fulfilled, (state, action: PayloadAction<{user: IUser}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
        })
        builder.addCase(fetchToUpdateUser.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })




        builder.addCase(fetchToDeleteUser.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToDeleteUser.fulfilled, (state, action: PayloadAction<{deletedUser: IUser}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            const id = action.payload.deletedUser.id;
            
            state.items = state.items.filter(user => user.id !== id);
        })
        builder.addCase(fetchToDeleteUser.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    },
})

const { actions, reducer } = usersSlice;

export const { addUser, removeUser, setCurrentUser } = actions;

export default reducer;