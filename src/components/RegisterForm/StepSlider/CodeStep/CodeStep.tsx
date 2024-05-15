import React from 'react';

import styled from 'styled-components';
import { Input, Button, CircularProgress } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from 'store/store';
import { getCode, getEmail, getLoading, getPassword, getUsername } from 'store/reducers/auth/AuthSelector';
import { LOADING } from 'constants/constants';
import { fetchToFinishRegistration, setCode } from 'store/reducers/auth/AuthSlice';
import { RegisterDto } from 'dto/RegisterDto';

const Wrapper = styled.div`
    display: grid;
    row-gap: 20px;
    margin-bottom: 20px;
    padding: 0 10px;
`;

const CodeStep = () => {

    const dispatch = useAppDispatch();

    const loading = useAppSelector(state => getLoading(state));
    const email = useAppSelector(state => getEmail(state));
    const password = useAppSelector(state => getPassword(state));
    const username = useAppSelector(state => getUsername(state));
    const code = useAppSelector(state => getCode(state));

    const submit = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();

        if (email && password && username && code) {
            dispatch(fetchToFinishRegistration(
                new RegisterDto(
                    username,
                    password,
                    email,
                    code
                )
            ));
        }
    }

    return (
        <>
            <Wrapper>
            
            <Input 
                value={code}
                onChange={(ev) => dispatch(setCode(ev.target.value))}
                type='text' 
                label='Registration Code' 
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
                        /> : "Finish regisration"
                    }
                </Button> 


            </Wrapper>

        </>
    );
}

export default CodeStep;