import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/store';
import {  setLoading, setToastmessage } from 'store/reducers/auth/AuthSlice';
import { getIsCode, getLoading, getToastMessage } from 'store/reducers/auth/AuthSelector';
import { FAILED, IDLE, LOADING } from 'constants/constants';
import { toast } from 'sonner';
import StepSlider from './StepSlider/StepSlider';

const Form = styled.form`
    max-width: 568px;
    margin: 0 auto;
    margin-bottom: 30px;
`;

interface IRegisterFormProps {

}

const RegisterForm: React.FC<IRegisterFormProps> = () => {

    const dispatch = useAppDispatch();

    const loading = useAppSelector(state => getLoading(state));
    const toastMessage = useAppSelector(state => getToastMessage(state));
    const codeStep = useAppSelector(state => getIsCode(state));

    React.useEffect(() => {

        if (loading === IDLE && toastMessage) {
            toast.success(toastMessage, {
                position: 'top-right',
                duration: 5000
            })
            dispatch(setLoading(IDLE));
            dispatch(setToastmessage(null));
        }

        if (loading === FAILED && toastMessage) {
            toast.error(toastMessage, {
                position: 'top-right',
                duration: 5000
            })
            dispatch(setLoading(IDLE));
            dispatch(setToastmessage(null));
        }
    }, [loading, toastMessage]);
    
    return (
        <>

            <Form onSubmit={(ev) => ev.preventDefault()}>
            
                <StepSlider isCodeStep={codeStep} />
            
            </Form>
        </>
    );
}

export default RegisterForm;