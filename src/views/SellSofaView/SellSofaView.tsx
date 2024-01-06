import React from "react";
import SellingIcon from '../../components/Ui/Icons/SellingIcon';
import { 
    Wrapper, Subtitle, FormWrapper, 
    InputsWrapper, ButtonWrapper, IconWrapper, UploadBlock, UploadBlockWrapper, UploadBlockTitle 
} from "./SellSofaStyles";
import { SellSofaViewConnectedProps } from "./SellSofaViewContainer";
import { useFormik } from "formik";
import sellSofaValidationSchema from './../../yup/sellsofa.validation.schema';
import OkMessage from "components/Ui/OkMessage/OkMessage";
import Preloader from "components/Ui/Preloader/Preloader";
import { LOADING } from "constants/constants";
import uploadImage from 'images/upload.png';
import UploadedImages from "components/UploadedImages/UploadedImages";
import { Input, Textarea, Button, useDisclosure } from "@nextui-org/react";
import ConfirmModal from "components/ConfirmModal/ConfirmModal";
import { CONTACT_CONFIRM_MESSAGE } from "constants/constants";

interface ISellSofaViewProps extends SellSofaViewConnectedProps {

}

const SellSofaView: React.FC<ISellSofaViewProps> = (props) => {

    const { status, setStatus, setConfirmModalData, fetchSellMessage } = props;

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [files, setFiles] = React.useState<FileList | null>(null);

    React.useEffect(() => {
        return () => {
            setStatus(null);
        }
    }, [setStatus]);

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
            onOpen();
        }
    });

    const onUploadFiles = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
        setFiles(ev.target.files);
    }


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
                    fetchSellMessage({
                        name: formik.values.sellSofaName,
                        email: formik.values.sellSofaEmail,
                        brand: formik.values.sellSofaBrand,
                        comment: formik.values.sellSofaMessage,
                        phoneNumber: formik.values.sellSofaPhoneNumber,
                        files: files
                    })
                    }}
                message={CONTACT_CONFIRM_MESSAGE}  
            />
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
                                size="lg" 
                                variant="bordered" className="light" label="Name *" errorMessage={
                                    formik.touched.sellSofaName && formik.errors.sellSofaName 
                                    ? formik.errors.sellSofaName : undefined
                                }
                                isInvalid={
                                    formik.touched.sellSofaName && formik.errors.sellSofaName ? true: false
                                }
                                {...formik.getFieldProps('sellSofaName')}
                            />

                            <Input 
                                size="lg" 
                                variant="bordered" className="light" label="Email *" errorMessage={
                                    formik.touched.sellSofaEmail && formik.errors.sellSofaEmail 
                                    ? formik.errors.sellSofaEmail : undefined
                                }
                                isInvalid={
                                    formik.touched.sellSofaEmail && formik.errors.sellSofaEmail ? true: false
                                }
                                {...formik.getFieldProps('sellSofaEmail')}
                            />
                        </InputsWrapper>   

                        <Input 
                            size="lg" 
                            variant="bordered" className="light" label="Phone *" errorMessage={
                                formik.touched.sellSofaPhoneNumber && formik.errors.sellSofaPhoneNumber 
                                ? formik.errors.sellSofaPhoneNumber : undefined
                            }
                            isInvalid={
                                formik.touched.sellSofaPhoneNumber && formik.errors.sellSofaPhoneNumber ? true: false
                            }
                            {...formik.getFieldProps('sellSofaPhoneNumber')}
                        />

                        <Input 
                            size="lg" 
                            variant="bordered" className="light" label="Brand *" errorMessage={
                                formik.touched.sellSofaBrand && formik.errors.sellSofaBrand 
                                ? formik.errors.sellSofaBrand : undefined
                            }
                            isInvalid={
                                formik.touched.sellSofaBrand && formik.errors.sellSofaBrand ? true: false
                            }
                            {...formik.getFieldProps('sellSofaBrand')}
                        />

                        <Textarea 
                            size="lg" 
                            variant="bordered" className="light" label="Message *" errorMessage={
                                formik.touched.sellSofaMessage && formik.errors.sellSofaMessage 
                                ? formik.errors.sellSofaMessage : undefined
                            }
                            isInvalid={
                                formik.touched.sellSofaMessage && formik.errors.sellSofaMessage ? true: false
                            }
                            {...formik.getFieldProps('sellSofaMessage')}
                        />


                        <UploadBlockWrapper>

                            <UploadBlockTitle>{'Picture(optional)'}</UploadBlockTitle>

                            <UploadBlock>
                                
                                <img src={uploadImage} alt="upload button" />

                                <input 
                                
                                    type="file" 
                                    accept="image/*" 
                                    multiple 
                                    style={{display: 'none'}} 
                                    onChange={onUploadFiles}
                                
                                />

                            </UploadBlock>
                            
                        </UploadBlockWrapper>

                        <UploadedImages files={files} />

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

export default SellSofaView;