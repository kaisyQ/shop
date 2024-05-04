import React from 'react';
import { Button, Input, CircularProgress } from '@nextui-org/react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/store';
import { fetchToRegister, setLoading, setToastmessage } from 'store/reducers/auth/AuthSlice';
import { RegisterDto } from 'dto/RegisterDto';
import { getLoading, getToastMessage } from 'store/reducers/auth/AuthSelector';
import { FAILED, IDLE, LOADING } from 'constants/constants';
import { toast } from 'sonner';

const Form = styled.form`
    max-width: 568px;
    margin: 0 auto;
    display: grid;
    row-gap: 20px;
`;

interface IRegisterFormProps {

}

const RegisterForm: React.FC<IRegisterFormProps> = () => {

    const dispatch = useAppDispatch();

    const loading = useAppSelector(state => getLoading(state));
    const toastMessage = useAppSelector(state => getToastMessage(state));

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
    }, [loading, toastMessage])
    
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const emailRef = React.useRef<HTMLInputElement>(null);

    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        if (usernameRef.current && passwordRef.current && emailRef.current) {
            dispatch(fetchToRegister(
                new RegisterDto(
                    usernameRef.current.value, 
                    passwordRef.current.value, 
                    emailRef.current.value
                )
            ))
        }
    }
    
    console.log(loading)

    return (
        <>
            <Form onSubmit={onSubmit}>
            
                <Input type='text' label='Username' ref={usernameRef} className='dark' size='lg'/>
                
                <Input type='email' label='Email' ref={emailRef} className='dark' size='lg'/>
            
                <Input type='password' label='Password' ref={passwordRef} className='dark' size='lg'/>
            
                <Button 
                    type='submit' 
                    className='dark' 
                    size='lg'
                    disabled={loading === LOADING}
                >
                    {
                        loading === LOADING ?
                        <CircularProgress
                            size='sm'
                            color="warning" aria-label="Loading..."
                        /> : "Register"
                    }
                </Button>
            
            </Form>
        </>
    );
}

export default RegisterForm;