const SET_FULL_STATE = 'POST-EDIT/SET_FULL_STATE';
const SET_TITLE = "POST-EDIT/SET_TITLE";
const SET_TEXT = "POST-EDIT/SET_TEXT";
const SET_IMAGE_SRC = "POST-EDIT/SET_IMAGE_SRC";
const SET_IMAGE_FILE = "POST-EDIT/SET_IMAGE_FILE";
const SET_FULL_IMAGE = "POST-EDIT/SET_FULL_IMAGE";


type ShortState = {
    title: string,
    text: string,
    imageSrc: string | null,
}

interface InitialStateType extends ShortState {
    imageFile: File | null
};

export const initialState: InitialStateType = {
    title: "", 
    text: "",
    imageSrc: null,
    imageFile: null
};

export const setFullState = (payload: ShortState) => ({
    type: SET_FULL_STATE as typeof SET_FULL_STATE,
    payload: payload
});

export const setText = (payload: string) => ({
    type: SET_TEXT as typeof SET_TEXT,
    payload: payload
});

export const setTitle = (payload: string) => ({
    type: SET_TITLE as typeof SET_TITLE,
    payload: payload
});

export const setImageSrc =  (payload: string | null) => ({
    type: SET_IMAGE_SRC as typeof SET_IMAGE_SRC,
    payload: payload
});

export const setImageFile =  (payload: File | null) => ({
    type: SET_IMAGE_FILE as typeof SET_IMAGE_FILE,
    payload: payload
});

export const setFullImage = (payload: { 
    imageFile: File | null, 
    imageSrc: string | null 
}) => ({
    type: SET_FULL_IMAGE as typeof SET_FULL_IMAGE,
    payload: payload
});

type FullStateACtion = ReturnType<typeof setFullState>;
type TextACtion = ReturnType<typeof setText>;
type TitleACtion = ReturnType<typeof setTitle>;
type FullImageACtion = ReturnType<typeof setFullImage>;
type ImageSrcACtion = ReturnType<typeof setImageSrc>;
type ImageFileACtion = ReturnType<typeof setImageFile>;


type ActionType = FullStateACtion | TextACtion | TitleACtion | 
    FullImageACtion | ImageSrcACtion | ImageFileACtion;

export const selectTitle = (state: InitialStateType) => state.title;
export const selectText = (state: InitialStateType) => state.text;
export const selectImageSrc = (state: InitialStateType) => state.imageSrc;
export const selectImageFile = (state: InitialStateType) => state.imageFile;

const reducer = (state: InitialStateType, action: ActionType) => {
    switch(action.type) {
        case SET_FULL_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_TEXT: 
            return {
                ...state,
                text: action.payload
            }
        case SET_TITLE: 
            return {
                ...state,
                title: action.payload
            }
        case SET_FULL_IMAGE: { 
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_IMAGE_SRC: 
            return {
                ...state,
                imageSrc: action.payload
            }
        case SET_IMAGE_FILE: 
            return {
                ...state,
                imageFile: action.payload
            }
        default: 
            throw new Error("BAD ACTION TYPE");
    }
}

export default reducer;