import React from "react";

import { 
    AddCommentModalWrapper, AddCommentModalHeader, AddCommentModalTitle,
    AddCommentModalExit, AddCommentForm, StarsWrapper, Input, Textarea,
    StarsTitle, 
} from "./AddCommentModalStyles";

import Button from "components/Custom/Button/Button";
import Stars from "../Stars/Stars";

import * as Icon from "react-bootstrap-icons";

const AddCommentModal: React.FC = () => {
    return (
        <>
            <AddCommentModalWrapper>
                <AddCommentModalHeader>
                    <AddCommentModalTitle>Write a review</AddCommentModalTitle>
                    <AddCommentModalExit>
                        <Icon.XLg size={"3rem"} />
                    </AddCommentModalExit>
                </AddCommentModalHeader>
                <AddCommentForm onSubmit={(ev) => ev.preventDefault()}>
                    <StarsWrapper>
                        <StarsTitle>Select your rating</StarsTitle>
                        <Stars />
                    </StarsWrapper>
                    <Input placeholder="Enter your name"/>
                    <Textarea placeholder="Enter your review here"/>
                    <Button>Submit</Button>
                </AddCommentForm>
            </AddCommentModalWrapper>
        </>
    );
}


export default AddCommentModal;
