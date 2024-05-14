import React from 'react';
import { Input, Button, CircularProgress } from '@nextui-org/react';
import { RegisterDto } from 'dto/RegisterDto';
import { useAppDispatch, useAppSelector } from 'store/store';
import { getLoading } from 'store/reducers/auth/AuthSelector';
import { fetchToRegister } from 'store/reducers/auth/AuthSlice';
import { LOADING } from 'constants/constants';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: grid;
    row-gap: 20px;
    margin-bottom: 20px;
    padding: 0 10px;
`;

const RegisterStep = () => {

    const dispatch = useAppDispatch();
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const emailRef = React.useRef<HTMLInputElement>(null);
    const loading = useAppSelector(state => getLoading(state));

    const submit = (ev: React.MouseEvent<HTMLButtonElement>) => {
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
    return (
        <>
            <Wrapper>
                <Input type='text' label='Username' ref={usernameRef} className='dark' size='lg'/>
                
                <Input type='email' label='Email' ref={emailRef} className='dark' size='lg'/>
            
                <Input type='password' label='Password' ref={passwordRef} className='dark' size='lg'/>

                <Button 
                    type='submit' 
                    className='dark' 
                    size='lg'
                    disabled={loading === LOADING}
                    onClick={submit}
                >
                    {
                        loading === LOADING ?
                        <CircularProgress
                            size='sm'
                            color="warning" aria-label="Loading..."
                        /> : "Register"
                    }
                </Button> 
            </Wrapper>

        </>
    );
}

export default RegisterStep;