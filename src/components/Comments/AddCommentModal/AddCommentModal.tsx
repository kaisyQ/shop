import React from "react";

import { 
    AddCommentModalWrapper, AddCommentModalHeader, AddCommentModalTitle,
    AddCommentModalExit, AddCommentForm, StarsWrapper, Input, Textarea,
    StarsTitle, 
} from "./AddCommentModalStyles";

import Button from "components/Custom/Button/Button";
import StarsSelector from "../Stars/StarsSelector";

import * as Icon from "react-bootstrap-icons";
import reducer, { initialState, actions } from "reducers/add-comment-modal/reducer";

import { AddCommentConnectedProps } from "./AddCommentContainer";

interface IAddCommentModalProps extends AddCommentConnectedProps {
    close: () => void
}

const AddCommentModal: React.FC<IAddCommentModalProps> = ({ addComment, close, fetchToCreateComment }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const onNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.setName(ev.target.value));
    }
    const onReviewChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(actions.setReview(ev.target.value));
    }
    const onSubmitClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        fetchToCreateComment({ 
            userName: state.name,
            text: state.review,
            stars: state.rating as number
        });
        close();
    }   

    return (
        <>
            <AddCommentModalWrapper>
                <AddCommentModalHeader>
                    <AddCommentModalTitle>Write a review</AddCommentModalTitle>
                    <AddCommentModalExit onClick={(ev) => close()}>
                        <Icon.XLg size={"3rem"} />
                    </AddCommentModalExit>
                </AddCommentModalHeader>
                <AddCommentForm onSubmit={(ev) => ev.preventDefault()}>
                    <StarsWrapper>
                        <StarsTitle>Select your rating</StarsTitle>
                        <StarsSelector dispatch={dispatch} starCount={state.rating}/>
                    </StarsWrapper>
                    <Input value={state.name} placeholder="Enter your name" onChange={onNameChange}/>
                    <Textarea value={state.review} 
                        placeholder="Enter your review here"onChange={onReviewChange} />
                    <Button onClick={onSubmitClick}>Submit</Button>
                </AddCommentForm>
            </AddCommentModalWrapper>
        </>
    );
}


export default AddCommentModal;
