import type { RatingScore } from "types/types";

const SET_NAME = "ADD-COMMENT-MODAL/SET_NAME";
const SET_REVIEW = "ADD-COMMENT-MODAL/SET_REVIEW";
const SET_RATING = "ADD-COMMENT-MODAL/SET_RATING";



const setName = (payload: string) => ({
    type: SET_NAME as typeof SET_NAME,
    payload: payload
});

const setReview = (payload: string) => ({
    type: SET_REVIEW as typeof SET_REVIEW,
    payload: payload
});

const setRating = (payload: RatingScore) => ({
    type: SET_RATING as typeof SET_RATING,
    payload: payload
});

type SetRatingType = ReturnType<typeof setRating>;
type SetReviewType = ReturnType<typeof setReview>;
type SetNameType = ReturnType<typeof setName>;

export type ActionType = SetRatingType | SetReviewType | SetNameType;

type InitialStateType  = {
    name: string,
    review: string,
    rating: RatingScore
};

export const initialState: InitialStateType = {
    name: "",
    review: "",
    rating: 1
}

export const actions = {
    setName, setRating, setReview
}


const reducer = (state: InitialStateType, action: ActionType) => {
    switch(action.type) {
        case SET_NAME:  
            return {
                ...state,
                name: action.payload
            };
        case SET_RATING:  
            return {
                ...state,
                rating: action.payload
            };
        case SET_REVIEW:  
            return {
                ...state,
                review: action.payload
            };
        default:
            throw new Error("BAD ACTION TYPE");
    }
}

export default reducer;