const SET_NAME = "CONTACT-VIEW/SET_NAME";
const SET_EMAIL = "CONTACT-VIEW/SET_EMAIL";
const SET_PHONE_NUMBER = "CONTACT-VIEW/SET_PHONE_NUMBER";
const SET_COMMENT = "CONTACT-VIEW/SET_COMMENT";

export const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    comment: ""
}

const setName = (payload: string) => ({
    type: SET_NAME as typeof SET_NAME, 
    payload: payload
});

const setEmail = (payload: string) => ({
    type: SET_EMAIL as typeof SET_EMAIL,
    payload: payload
});

const setPhoneNumber = (payload: string) => ({
    type: SET_PHONE_NUMBER as typeof SET_PHONE_NUMBER, 
    payload: payload
});

const setComment = (payload: string) => ({
    type: SET_COMMENT as typeof SET_COMMENT,
    payload: payload
});


type SetNameType = ReturnType<typeof setName>;
type SetEmailType = ReturnType<typeof setEmail>;
type SetPhoneNumberType = ReturnType<typeof setPhoneNumber>;
type SetCommentType = ReturnType<typeof setComment>;

export type ActionType = SetNameType | SetEmailType | SetPhoneNumberType | SetCommentType;

type StateType = typeof initialState;

export const actions = {
    setName, setEmail, setPhoneNumber, setComment
};

const reducer = (state: StateType, action: ActionType) => {
    switch(action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case SET_PHONE_NUMBER: 
            return {
                ...state,
                phoneNumber: action.payload
            }
        case SET_COMMENT: 
            return {
                ...state,
                comment: action.payload
            }
        default:
            throw new Error("BAD ACTION TYPE");
    }
}

export default reducer;