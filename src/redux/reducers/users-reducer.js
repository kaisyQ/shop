import { createSlice } from "@reduxjs/toolkit"
import { getUsers, getUser, createUser, deleteSessionById, deleteUserSessions } from "../../api/api"


const initialState = {
    users: [],
    currentUser: null
}


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        deleteSession: (state, action) => {
            state.currentUser.session = state.currentUser.session.filter(session => session.id !== action.payload)
        },
        deleteAllUserSessions: (state, action) => {
            state.currentUser.session = []
        }
    }
})


const { actions, reducer } = usersSlice


export const { setUsers, setCurrentUser, addUser, deleteSession, deleteAllUserSessions } = actions


export const getUsersThunk = () => async (dispatch) => {
    const response = await getUsers()
    if (response.status === 200) {
        dispatch(setUsers(response.data))
    }
}

export const getUserThunk = (id) =>  async (dispatch) => {
    const response = await getUser(id)
    if (response.status === 200) {
        dispatch(setCurrentUser(response.data))
    }
}

export const createUserThunk = (login, password) => async (dispatch) => {
    const response = await createUser(login, password)
    if (response.status === 200) {
        dispatch(addUser(response.data))
    }
}


export const deleteSessionThunk = (id) => async (dispatch) => {
    const response = await deleteSessionById(id)
    if (response.status === 200) {
        dispatch(deleteSession(id))
    }
}

export const deleteAllUserSessionThunk = (userId) => async (dispatch) => {
    console.log('thunk')
    const response = await deleteUserSessions(userId)
    if (response.status === 200) {
        dispatch(deleteAllUserSessions(userId))
    }
}


export default reducer