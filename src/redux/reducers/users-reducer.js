import { createSlice } from "@reduxjs/toolkit"
import { getUsers } from "../../api/api"


const initialState = {
    users: [],
    currentUserId: null
}


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        }
    }
})


const { actions, reducer } = usersSlice


export const { setUsers } = actions


export const getUsersThunk = () => async (dispatch) => {
    const response = await getUsers()
    console.log(response)
    if (response.status === 200) {
        dispatch(setUsers(response.data))
    }
}



export default reducer