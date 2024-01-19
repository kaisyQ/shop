import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IInitialStylesProps {
    isDark: boolean,
}

const initialState: IInitialStylesProps = {
    isDark: false,
}


const slylesSlice = createSlice({
    name: 'stylesSlice',
    initialState,
    reducers: {
        setIsDark: (state, action: PayloadAction<boolean>) => {
            state.isDark = action.payload;
        },
    }
})

const { reducer, actions } = slylesSlice;


export const { setIsDark } = actions;

export default reducer;