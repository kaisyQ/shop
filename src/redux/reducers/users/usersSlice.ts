import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IUser } from "types/types";

import { LOADING, IDLE, FAILED } from "constants/constants";

import type { IShortUser, LoadingType } from "types/types";

import { ADMIN, EMPLOYEE } from "constants/constants";


interface IUserInitialState {
    items: IUser[],
    current: IUser | null,
    loadingStatus: LoadingType,
    error: Error | null,
    searchValue: string,
}

const initialState: IUserInitialState = {
    items: [],
    current: null,
    loadingStatus: IDLE,
    error: null,
    searchValue: "",
}


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        try {
            const response = await fetch(`http://localhost:8000/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();
            return {
                users: data.users,
                status: response.status
            }
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
            const response = await fetch(`http://localhost:8000/users/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await response.json();
            return {
                user: data.user,
                status: response.status
            }
        } catch (err) {
            console.log(err);
            throw(err);
        }
    }
);

export const fetchToCreateUser = createAsyncThunk(
    "users/fetchToCreateUser",
    async (user: IShortUser) => {
        try {
            const response = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(user)
            });
            const data = await response.json();
            return {
                user: data.user,
                status: response.status
            };
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
            const data = await response.json();
            console.log(data)
            return {
                user: data.updatedUser,
                status: response.status
            };
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
            const response = await fetch(`http://localhost:8000/users/${id}`, {
                method: "DELETE",
                credentials: "include"
            })

            const data = await response.json();
            return {
                status: response.status,
                user: data.deletedUser                
            }
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
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) {
                state.items = action.payload.users;
            }
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })



        builder.addCase(fetchUserById.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) {
                state.current = action.payload.user;
            }
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })



        builder.addCase(fetchToCreateUser.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToCreateUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if(action.payload.status === 200) {
                state.items.push(action.payload.user);
            }
        })
        builder.addCase(fetchToCreateUser.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })

        
        
        
        builder.addCase(fetchToUpdateUser.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToUpdateUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) {
                state.items = state.items.filter(user => {
                    if (user.id !== action.payload.user.id) {
                        return user;
                    }
                    return {
                        id: action.payload.user.id,
                        login:  action.payload.user.login,
                        role: action.payload.user.role === "ADMIN" ? ADMIN : EMPLOYEE
                    }
                })
            }
        })
        builder.addCase(fetchToUpdateUser.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })



        builder.addCase(fetchToDeleteUser.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToDeleteUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            if (action.payload.status === 200) {
                const id = action.payload.user.id;
                state.items = state.items.filter(user => user.id !== id);
            }
        })
        builder.addCase(fetchToDeleteUser.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    },
})

const { actions, reducer } = usersSlice;

export const { 
    addUser, removeUser, setCurrentUser, 
    setSearchValue 
} = actions;

export default reducer;