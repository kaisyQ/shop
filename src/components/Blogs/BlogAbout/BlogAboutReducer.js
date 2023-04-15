export const SET_TITLE = 'SET_TITLE'
export const SET_TEXT = 'SET_TEXT'
export const SET_IMAGE_SRC = 'SET_IMAGE-SRC'
export const SET_IMAGE_FILE = 'SET_IMAGE-FILE'
export const SET_TITLE_EDIT = 'SET_TITLE_EDIT'
export const SET_TEXT_EDIT = 'SET_TEXT_EDIT'

export const initialState = {
    title: '',
    text: '',
    
    imageSrc: '',
    imageFile: null,
    
    titleEdit: false,
    textEdit: false,
}


const reducer = (state, action) => {
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
        default: {
            throw new Error(`UNKNOWN ACTION TYPE: ${action.type}`);
        }
    }
}

export default reducer