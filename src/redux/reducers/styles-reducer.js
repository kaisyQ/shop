import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isDark: false
}

const slylesSlice = createSlice({
    name: 'stylesSlice',
    initialState,
    reducers: {
        setIsDark : (state, action) => {
            state.isDark = action.payload
        }
    }
})

const { reducer, actions } = slylesSlice


export const { setIsDark } = actions 

export default reducer