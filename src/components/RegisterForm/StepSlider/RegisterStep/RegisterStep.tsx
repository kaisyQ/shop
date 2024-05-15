import React from 'react';
import { Input, Button, CircularProgress } from '@nextui-org/react';
import { RegisterDto } from 'dto/RegisterDto';
import { useAppDispatch, useAppSelector } from 'store/store';
import { getEmail, getLoading, getPassword, getUsername } from 'store/reducers/auth/AuthSelector';
import { fetchToRegister, setEmail, setPassword, setUsername } from 'store/reducers/auth/AuthSlice';
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

    const loading = useAppSelector(state => getLoading(state));

    const email = useAppSelector(state => getEmail(state));
    const password = useAppSelector(state => getPassword(state));
    const username = useAppSelector(state => getUsername(state));

    const submit = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        if (username && password && email) {
            dispatch(fetchToRegister(
                new RegisterDto(
                    username, 
                    password, 
                    email
                )
            ));
        }
    }
    return (
        <>
            <Wrapper>
                <Input 
                    onChange={(ev) => dispatch(setUsername(ev.target.value))}
                    type='text' 
                    label='Username' 
                    value={username} 
                    className='dark' 
                    size='lg'
                />
                
                <Input 
                    onChange={(ev) => dispatch(setEmail(ev.target.value))}
                    type='email' 
                    label='Email' 
                    value={email}
                    className='dark' 
                    size='lg'
                />
            
                <Input 
                    onChange={(ev) => dispatch(setPassword(ev.target.value))}
                    type='password' 
                    label='Password' 
                    value={password}
                    className='dark' 
                    size='lg'
                />

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