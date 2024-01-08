import React, { ChangeEventHandler } from "react";
import styled from 'styled-components';
import StarsSelector from "../Stars/StarsSelector";
import { AddCommentConnectedProps } from "./AddCommentContainer";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from "@nextui-org/react";
import { RatingScore } from "types/types";

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

const AddCommentModal: React.FC<IAddCommentModalProps> = ({ isOpen, onOpen, onOpenChange, addComment, fetchToCreateComment }) => {

    const [name, setName] = React.useState<string>('');
    const [review, setReview] = React.useState<string>('');
    const [stars, setStars] = React.useState<RatingScore>(1);


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
        fetchToCreateComment({
            username: name,
            text: review,
            stars: stars as number
        });
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

                            <ModalBody>
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

                            </ModalBody>

                            <ModalFooter className="">

                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>

                                <Button
                                    onClick={onSubmitClick}
                                    color="primary" onPress={onClose}>
                                    Action
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
