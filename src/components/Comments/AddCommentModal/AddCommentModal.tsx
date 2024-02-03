import React, { ChangeEventHandler } from "react";
import styled from 'styled-components';
import StarsSelector from "../Stars/StarsSelector";
import { AddCommentConnectedProps } from "./AddCommentContainer";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from "@nextui-org/react";
import { RatingScore } from "types/types";
import ReCAPTCHA from "react-google-recaptcha";
import { CreateCommentDto } from "dto/CreateCommentDto";

interface IAddCommentModalProps extends AddCommentConnectedProps {
    isOpen: boolean,
    onOpenChange: any,
    onOpen: any
}

const StarsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const StarsTitle = styled.h3`
    font-size: 18px;
`;

const AddCommentModal: React.FC<IAddCommentModalProps> = ({ isOpen, onOpen, onOpenChange, fetchToCreateComment }) => {

    const [name, setName] = React.useState<string>('');
    const [review, setReview] = React.useState<string>('');
    const [stars, setStars] = React.useState<RatingScore>(1);
    const captchaRef = React.useRef(null);


    const onNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setName(ev.target.value);
    }
    
    const onReviewChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
        setReview(ev.target.value);
    }

    const onStarsChange = (count: RatingScore) => {
        setStars(count);
    }

    const onSubmitClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        fetchToCreateComment(new CreateCommentDto(stars, name, review));
        setName('');
        setReview('');
        setStars(1);
    }

    return (
        <>
            <Modal className="dark text-white" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
                <ModalContent className="">
                    {(onClose) => (
                        <>
                            <ModalHeader className="light flex flex-col gap-1">Write a review</ModalHeader>

                            <ModalBody
                                className="d-flex flex-col items-center"
                            >
                                <Input
                                    autoFocus
                                    label="Name"
                                    variant="bordered"
                                    value={name}
                                    onChange={onNameChange}
                                />

                                <Textarea
                                    label="Review"
                                    value={review}
                                    onChange={onReviewChange}
                                />

                                <StarsWrapper>
                                    <StarsTitle>Select your rating</StarsTitle>
                                    <StarsSelector onChange={onStarsChange} count={stars} />
                                </StarsWrapper>
                                
                                <div>
                                    <ReCAPTCHA
                                        sitekey="6LcLUVApAAAAANqbWc8hF4PDiafOddXx4MWnnbTV"
                                        ref={captchaRef}
                                        hl="en"
                                    />
                                </div>

                            </ModalBody>

                            <ModalFooter className="d-flex flex-col items-center">

                                <Button 
                                    color="danger" 
                                    variant="solid" 
                                    onPress={onClose}
                                    fullWidth
                                >
                                    Close
                                </Button>

                                <Button
                                    onClick={onSubmitClick}
                                    color="primary" 
                                    onPress={onClose}
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </ModalFooter>
                            
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}


export default AddCommentModal;
