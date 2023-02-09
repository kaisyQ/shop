import { createSlice } from "@reduxjs/toolkit"



const initialState = {

}


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuthData: (state, action) => {

        }
    }
})


const { actions, reducer } = authSlice


export const { setAuthData } = actions

export default reducer