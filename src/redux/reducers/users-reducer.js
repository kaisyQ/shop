import { createSlice } from "@reduxjs/toolkit"
import { getUsers, getUser } from "../../api/api"


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
        }
    }
})


const { actions, reducer } = usersSlice


export const { setUsers, setCurrentUser } = actions


export const getUsersThunk = () => async (dispatch) => {
    const response = await getUsers()
    if (response.status === 200) {
        dispatch(setUsers(response.data))
    }
}

export const getUserThunk = (id) =>  async (dispatch) => {
    const response = await getUser(id)
    console.log(response)
    if (response.status === 200) {
        dispatch(setCurrentUser(response.data))
    }
}



export default reducer