const SET_NAME = "SELL-SOFA-VIEW/SET_NAME";
const SET_EMAIL = "SELL-SOFA-VIEW/SET_EMAIL";
const SET_PHONE_NUMBER = "SELL-SOFA-VIEW/SET_PHONE_NUMBER";
const SET_COMMENT = "SELL-SOFA-VIEW/SET_COMMENT";
const SET_BRAND_OF_SOFA = "SELL-SOFA-VIEW/SET_BRAND_OF_SOFA";


export const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
    brandOfSofa: ""
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

const setBrandOfSofa = (payload: string) => ({
    type: SET_BRAND_OF_SOFA as typeof SET_BRAND_OF_SOFA,
    payload: payload
});


type SetNameType = ReturnType<typeof setName>;
type SetEmailType = ReturnType<typeof setEmail>;
type SetPhoneNumberType = ReturnType<typeof setPhoneNumber>;
type SetCommentType = ReturnType<typeof setComment>;
type SetBrandOfSofaType = ReturnType<typeof setBrandOfSofa>;

export type ActionType = SetNameType | SetEmailType | SetPhoneNumberType | SetCommentType | 
    SetBrandOfSofaType;

type StateType = typeof initialState;

export const actions = {
    setName, setEmail, setPhoneNumber, setComment, setBrandOfSofa
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
        case SET_BRAND_OF_SOFA: 
            return {
                ...state,
                brandOfSofa: action.payload
            }
        default:
            throw new Error("BAD ACTION TYPE");
    }
}

export default reducer;