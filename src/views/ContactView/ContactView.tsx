import React from "react";

import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";
import MailICon from '../../components/Ui/Icons/MailICon';

import { 
    Wrapper, Subtitle, FormWrapper, 
    InputsWrapper, ButtonWrapper, IconWrapper 
} from "./ContactViewStyles";

import { ContactViewConnectedProps } from "./ContactViewContainer";

import { useFormik } from "formik";

import OkMessage from "components/Ui/OkMessage/OkMessage";

import ContactValidationSchema from './../../yup/contact.validation.schema';
import Preloader from "components/Ui/Preloader/Preloader";
import { LOADING } from "constants/constants";

interface IContactView extends ContactViewConnectedProps {

}

const ContactView: React.FC<IContactView> = (props) => {

    const { status, setConfirmModalData, fetchContactMessage, setStatus } = props;

    React.useEffect(() => {
        return () => {
            setStatus(null);
        }
    }, []);


    const formik = useFormik({
        initialValues: {
            contactName: '',
            contactEmail: '',
            contactPhoneNumber: '',
            contactMessage: ''
        },
        validationSchema: ContactValidationSchema,
        onSubmit: (values) => {
            setConfirmModalData({
                callback: () => { 
                    setStatus(202);
                    fetchContactMessage({
                        name: values.contactName,
                        email: values.contactEmail,
                        comment: values.contactMessage,
                        phoneNumber: values.contactPhoneNumber
                    })
                },
                isVisible: true,
                message: "Confirm your action..."
            });
        }
    })

    if (props.loading === LOADING) {
        return <Preloader />
    }

    return (
        <>
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
                                    padding={'2.4rem 3rem'} 
                                    id='contactName' 
                                    placeholder='Name *'
                                    error={
                                        formik.touched.contactName && formik.errors.contactName 
                                            ? formik.errors.contactName : undefined
                                    }
                                    {...formik.getFieldProps('contactName')}
                                />
                                <Input
                                    padding={'2.4rem 3rem'} 
                                    id='contactEmail' 
                                    placeholder='Email *' 
                                    error={
                                        formik.touched.contactEmail && formik.errors.contactEmail 
                                            ? formik.errors.contactEmail : undefined
                                    }
                                    {...formik.getFieldProps('contactEmail')}
                                />
                            </InputsWrapper>   

                            <Input 
                                padding={'2.4rem 3rem'} 
                                id='contactPhoneNumber' 
                                placeholder='Phone number *' 
                                error={
                                    formik.touched.contactPhoneNumber && formik.errors.contactPhoneNumber 
                                        ? formik.errors.contactPhoneNumber : undefined
                                }
                                {...formik.getFieldProps('contactPhoneNumber')}
                            />
                            <Input 
                                padding={'4rem 3rem'} 
                                id='contactMessage' placeholder='Message *' 
                                type='textarea'
                                error={
                                    formik.touched.contactMessage && formik.errors.contactMessage 
                                        ? formik.errors.contactMessage : undefined
                                }
                                {...formik.getFieldProps('contactMessage')}
                            />
                            <ButtonWrapper>
                                <Button padding={'1.6rem 5.5rem'} isReverse={true}>
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