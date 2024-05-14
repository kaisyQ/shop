import React from 'react';

import styled from 'styled-components';
import { Input, Button, CircularProgress } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from 'store/store';
import { getLoading } from 'store/reducers/auth/AuthSelector';
import { LOADING } from 'constants/constants';



const Wrapper = styled.div`
    display: grid;
    row-gap: 20px;
    margin-bottom: 20px;
    padding: 0 10px;
`;

const CodeStep = () => {

    const dispatch = useAppDispatch();

    const loading = useAppSelector(state => getLoading(state));

    const codeRef = React.useRef<HTMLInputElement>(null);

    const submit = (ev: React.MouseEvent<HTMLButtonElement>) => {

    }

    return (
        <>
            <Wrapper>
            
            <Input type='text' label='Registration Code' ref={codeRef} className='dark' size='lg'/>

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