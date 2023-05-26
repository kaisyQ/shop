export const SET_TITLE = 'SET_TITLE';
export const SET_TEXT = 'SET_TEXT';
export const SET_IMAGE_SRC = 'SET_IMAGE-SRC';
export const SET_IMAGE_FILE = 'SET_IMAGE-FILE';
export const SET_TITLE_EDIT = 'SET_TITLE_EDIT';
export const SET_TEXT_EDIT = 'SET_TEXT_EDIT';

type SetTitleType = typeof SET_TITLE;
type SetTextType = typeof SET_TEXT;
type SetImageSrcType = typeof SET_IMAGE_SRC;
type SetImageFileType = typeof SET_IMAGE_FILE;
type SetTitleEditType = typeof SET_TITLE_EDIT;
type SetTextEditType = typeof SET_TEXT_EDIT;


interface IBlogAboutInitialState {
    title: string,
    text: string,
    imageSrc: string,
    imageFile: File | null,
    titleEdit: boolean,
    textEdit: boolean
};


export const initialState: IBlogAboutInitialState = {
    title: '',
    text: '',
    imageSrc: '',
    imageFile: null,
    titleEdit: false,
    textEdit: false,
};


export const setTitleAC = (payload: string) => ({
    type: SET_TITLE as SetTitleType, payload
});

export const setTextAC = (payload: string) => ({
    type: SET_TEXT as SetTextType, payload
});

export const setImageSrcAC = (payload: string) => ({
    type: SET_IMAGE_SRC as SetImageSrcType, payload
});

export const setImageFileAC = (payload: File | null) => ({
    type: SET_IMAGE_FILE as SetImageFileType, payload
});

export const setTitleEditAC = (payload: boolean) => ({
    type: SET_TITLE_EDIT as SetTitleEditType, payload
});

export const setTextEditAC = (payload: boolean) => ({
    type: SET_TEXT_EDIT as SetTextEditType, payload
});


type SetTitleAction = ReturnType<typeof setTitleAC>;
type SetTextAction = ReturnType<typeof setTextAC>;
type SetImageSrcAction = ReturnType<typeof setImageSrcAC>;
type SetimageFileAction = ReturnType<typeof setImageFileAC>;
type SetTitleEditAction = ReturnType<typeof setTitleEditAC>;
type SetTextEditAction = ReturnType<typeof setTextEditAC>;


export type BlogAboutAction = SetTitleAction | SetTextAction | SetImageSrcAction | SetimageFileAction |
    SetTitleEditAction | SetTextEditAction;

const reducer = (state: IBlogAboutInitialState, action: BlogAboutAction) => {
    switch(action.type) {
        case SET_TITLE: {
            return {
                ...state,
                title: action.payload
            }
        }
        case SET_TEXT : {
            return {
                ...state,
                text: action.payload
            }
        }
        case SET_IMAGE_SRC : {
            return {
                ...state,
                imageSrc: action.payload
            }
        }
        case SET_IMAGE_FILE : {
            return {
                ...state,
                imageFile: action.payload            
            }
        }
        case SET_TITLE_EDIT: {
            return {
                ...state, 
                titleEdit: action.payload
            }
        }
        case SET_TEXT_EDIT: {
            return {
                ...state, 
                textEdit: action.payload
            }
        }
    }
}

export default reducer;