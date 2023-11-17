import { createSlice } from "@reduxjs/toolkit"

import { PayloadAction } from "@reduxjs/toolkit"


export type ConfirmModalData = {
    isVisible: boolean,
    callback: null | (() => void),
    message: string | null
}

interface IInitialStylesProps {
    isDark: boolean,
    isHint: boolean,
    confirmModalData: ConfirmModalData,
}

const initialState: IInitialStylesProps = {
    isDark: false,
    isHint: false,
    confirmModalData: {
        isVisible: false,
        callback: null,
        message: null
    }
}


const slylesSlice = createSlice({
    name: 'stylesSlice',
    initialState,
    reducers: {
        setIsDark: (state, action: PayloadAction<boolean>) => {
            state.isDark = action.payload;
            if (state.confirmModalData.isVisible) {
                state.confirmModalData.callback = null;
                state.confirmModalData.message = null;
                state.confirmModalData.isVisible = false;
            }
        },
        setConfirmModalData: (state, action: PayloadAction<ConfirmModalData>) => {
            state.confirmModalData.callback = action.payload.callback;
            state.confirmModalData.isVisible = action.payload.isVisible;
            state.confirmModalData.message = action.payload.message;
            state.isDark = action.payload.isVisible;
        },
        setIsHint: (state, action: PayloadAction<boolean>) => {
            state.isHint = action.payload;
        }
    }
})

const { reducer, actions } = slylesSlice;


export const { setIsDark, setConfirmModalData, setIsHint } = actions;

export default reducer;