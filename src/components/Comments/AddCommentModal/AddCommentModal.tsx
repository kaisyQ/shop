import React, { ChangeEventHandler } from "react";
import styled from 'styled-components';
import StarsSelector from "../Stars/StarsSelector";
import { AddCommentConnectedProps } from "./AddCommentContainer";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea, useModal } from "@nextui-org/react";
import { RatingScore } from "types/types";
import ReCAPTCHA from "react-google-recaptcha";
import { CreateCommentDto } from "dto/CreateCommentDto";
import { useFormik } from "formik";
import CommentValidationSchema from './../../../validators/comment.validation.schema';
import { ToastContainer, ToastPosition, toast } from 'react-toastify';
import { OK } from "constants/constants";

interface IAddCommentModalProps extends AddCommentConnectedProps {
    isOpen: boolean,
    onOpenChange: any,
    onOpen: any,
    onClose: () => void
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

const AddCommentModal: React.FC<IAddCommentModalProps> = (props) => {
    
    const toastParams = {
        position: "top-right" as ToastPosition,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    const [stars, setStars] = React.useState<RatingScore>(1);
    const captchaRef = React.useRef(null);
    
    const formik = useFormik({
        initialValues: {
            review: '',
            username: '',
        },
        validationSchema: CommentValidationSchema,
        onSubmit: (values) => {
            props.fetchToCreateComment(new CreateCommentDto(stars, values.username, values.review));
            values.review = '';
            values.username = '';
            setStars(1);
        }
    });

    React.useEffect(() => {
        
        if (props.message) {
            
            if (props.message.status === OK) {
                toast.success(props.message.message, toastParams);
                props.onClose()
            } else {
                toast.error(props.message.message, toastParams);
            }
        }
        return () => {
            props.setCommentMessage(null);
        }
    }, [props.message, props.setCommentMessage, props.onClose]);


    const onStarsChange = (count: RatingScore) => {
        setStars(count);
    }

    return (
        <>
            <ToastContainer />
            
            <Modal 
                placement='top' 
                className="dark text-white" 
                isOpen={props.isOpen} 
                onOpenChange={props.onOpenChange} 
                isDismissable={false}
                onClose={props.onClose}
            >
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
                                    {...formik.getFieldProps('username')}
                                    errorMessage={
                                        formik.touched.username && formik.errors.username 
                                        ? formik.errors.username : undefined
                                    }
                                    isInvalid={
                                        formik.touched.username && formik.errors.username ? true : false
                                    }
                                />

                                <Textarea
                                    label="Review"
                                    errorMessage={
                                        formik.touched.review && formik.errors.review 
                                        ? formik.errors.review : undefined
                                    }
                                    isInvalid={
                                        formik.touched.review && formik.errors.review ? true : false
                                    }
                                    {...formik.getFieldProps('review')}
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
                                    onClick={() => formik.handleSubmit()}
                                    color="primary" 
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
