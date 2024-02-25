import React from "react";
import MailICon from '../../components/Ui/Icons/MailICon';
import { 
    Wrapper, Subtitle, FormWrapper, 
    InputsWrapper, ButtonWrapper, IconWrapper 
} from "./ContactViewStyles";
import { ContactViewConnectedProps } from "./ContactViewContainer";
import { useFormik } from "formik";
import OkMessage from "components/Ui/OkMessage/OkMessage";
import ContactValidationSchema from '../../validators/contact.validation.schema';
import Preloader from "components/Ui/Preloader/Preloader";
import { LOADING } from "constants/constants";
import {Input, Textarea, Button, useDisclosure} from "@nextui-org/react";
import ConfirmModal from "components/ConfirmModal/ConfirmModal";
import { CONTACT_CONFIRM_MESSAGE } from "constants/constants";

interface IContactView extends ContactViewConnectedProps {

}

const ContactView: React.FC<IContactView> = (props) => {

    const { status, fetchContactMessage, setStatus } = props;

    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    React.useEffect(() => {
        return () => {
            setStatus(null);
        }
    }, [setStatus]);


    const formik = useFormik({
        initialValues: {
            contactName: '',
            contactEmail: '',
            contactPhoneNumber: '',
            contactMessage: ''
        },
        validationSchema: ContactValidationSchema,
        onSubmit: (values) => {
            onOpen();
        }
    })

    if (props.loading === LOADING) {
        return <Preloader />
    }

    return (
        
        <>
            <ConfirmModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                callback={() => { 
                    setStatus(202);
                    fetchContactMessage({
                        name: formik.values.contactName,
                        email: formik.values.contactEmail,
                        comment: formik.values.contactMessage,
                        phoneNumber: formik.values.contactPhoneNumber
                    })
                }}
                message={CONTACT_CONFIRM_MESSAGE}
            />
            {
                status ? <>
                    <OkMessage status={status} />
                </> : <>
                    <Wrapper>
                        <Subtitle>
                            <IconWrapper>
                                <MailICon width="64" height="64"/>
                            </IconWrapper>
                            <span>
                                Please let us know how we can assist you.
                            </span>
                        </Subtitle>
                        <FormWrapper onSubmit={formik.handleSubmit}>
                            <InputsWrapper>
                                <Input
                                    size="lg" 
                                    variant="bordered" height={100} className="light" label="Name *" errorMessage={
                                        formik.touched.contactName && formik.errors.contactName 
                                        ? formik.errors.contactName : undefined
                                    }
                                    isInvalid={
                                        formik.touched.contactName && formik.errors.contactName ? true: false
                                    }
                                    {...formik.getFieldProps('contactName')}
                                />

                                <Input
                                    variant="bordered"
                                    size="lg" 
                                    className="light" label="Email *" errorMessage={
                                        formik.touched.contactEmail && formik.errors.contactEmail 
                                        ? formik.errors.contactEmail : undefined
                                    }
                                    isInvalid={
                                        formik.touched.contactEmail && formik.errors.contactEmail ? true: false
                                    }
                                    {...formik.getFieldProps('contactEmail')}
                                />
                            </InputsWrapper>   
                            <Input
                                variant="bordered"
                                size="lg" 
                                label="Phone number *"
                                errorMessage={
                                    formik.touched.contactPhoneNumber && formik.errors.contactPhoneNumber 
                                        ? formik.errors.contactPhoneNumber : undefined
                                }
                                isInvalid={
                                    formik.touched.contactPhoneNumber && formik.errors.contactPhoneNumber ? true: false
                                }
                                {...formik.getFieldProps('contactPhoneNumber')}
                            />
                            <Textarea 
                                variant="bordered"
                                label="Message *"
                                placeholder="Enter your message"
                                isInvalid={
                                    formik.touched.contactMessage && formik.errors.contactMessage ? true: false
                                }
                                {...formik.getFieldProps('contactMessage')}
                            />
                            <ButtonWrapper>
                                <Button type="submit" size="lg" className="dark" variant="solid">
                                    Send
                                </Button>
                            </ButtonWrapper>
                        </FormWrapper>
                    </Wrapper>
                </>
            }
        </>
    );
}

export default ContactView;