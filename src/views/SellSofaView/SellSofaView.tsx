import React from "react";

import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";
import SellingIcon from './../../components/Custom/Icons/SellingIcon';

import { 
    Wrapper, Subtitle, FormWrapper, 
    InputsWrapper, ButtonWrapper, IconWrapper 
} from "./SellSofaStyles";

import { SellSofaViewConnectedProps } from "./SellSofaViewContainer";

import { useFormik } from "formik";

import sellSofaValidationSchema from './../../yup/sellsofa.validation.schema';

import OkMessage from "components/Ui/OkMessage/OkMessage";



interface ISellSofaViewProps extends SellSofaViewConnectedProps {

}

const SellSofaView: React.FC<ISellSofaViewProps> = (props) => {

    const { status, setStatus, setConfirmModalData, fetchSellMessage } = props;

    React.useEffect(() => {
        return () => {
            setStatus(null);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            sellSofaName: '',
            sellSofaEmail: '',
            sellSofaPhoneNumber: '',
            sellSofaBrand: '',
            sellSofaMessage: ''
        },
        validationSchema: sellSofaValidationSchema,
        onSubmit: (values) => {
            setConfirmModalData({
                callback: () => {
                    setStatus(500);
                    fetchSellMessage({
                        email: values.sellSofaEmail,
                        comment: values.sellSofaMessage,
                        brand: values.sellSofaBrand,
                        phoneNumber: values.sellSofaPhoneNumber,
                        name: values.sellSofaName
                    })
                },
                isVisible: true,
                message: "Confirm your action..."
            });
        }
    });


    return (
        <> 
        {
            status ? <OkMessage status={status} /> :
            <>
                <Wrapper>
                    <Subtitle>
                        <IconWrapper>
                            <SellingIcon width="64" height="64" />
                        </IconWrapper>
                        <span>Sell your sofa.</span>
                    </Subtitle>
                    <FormWrapper onSubmit={formik.handleSubmit}>
                        <InputsWrapper>
                            <Input 
                                padding={'2.4rem 3rem'} 
                                id='sellSofaName' 
                                placeholder='Name *' 
                                error={
                                    formik.touched.sellSofaName && formik.errors.sellSofaName 
                                        ? formik.errors.sellSofaName : undefined
                                }
                                {...formik.getFieldProps('sellSofaName')}
                            />

                            <Input 
                                padding={'2.4rem 3rem'} 
                                id='sellSofaEmail' 
                                placeholder='Email *' 
                                error={
                                    formik.touched.sellSofaEmail && formik.errors.sellSofaEmail 
                                        ? formik.errors.sellSofaEmail : undefined
                                }
                                {...formik.getFieldProps('sellSofaEmail')}
                            />
                        </InputsWrapper>   

                        <Input 
                            padding={'2.4rem 3rem'} 
                            id='sellSofaPhoneNumber' 
                            placeholder='Phone number *' 
                            error={
                                formik.touched.sellSofaPhoneNumber && formik.errors.sellSofaPhoneNumber 
                                    ? formik.errors.sellSofaPhoneNumber : undefined
                            }
                            {...formik.getFieldProps('sellSofaPhoneNumber')}
                        />

                        <Input 
                            padding={'2.4rem 3rem'} 
                            id='sellSofaBrand' 
                            placeholder='Brand of sofa *' 
                            error={
                                formik.touched.sellSofaBrand && formik.errors.sellSofaBrand 
                                    ? formik.errors.sellSofaBrand : undefined
                            }
                            {...formik.getFieldProps('sellSofaBrand')}
                        />

                        <Input 
                            padding={'4rem 3rem'} 
                            id='sellSofaMessage' 
                            placeholder='Message *' 
                            type='textarea'
                            error={
                                formik.touched.sellSofaMessage && formik.errors.sellSofaMessage 
                                    ? formik.errors.sellSofaMessage : undefined
                            }
                            {...formik.getFieldProps('sellSofaMessage')}
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

export default SellSofaView;