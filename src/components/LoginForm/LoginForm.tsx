import React from 'react';
import { Button, Input } from '@nextui-org/react';
import styled from 'styled-components';

const Form = styled.form`
    max-width: 568px;
    margin: 0 auto;
    display: grid;
    row-gap: 20px;
`;

interface ILoginFormProps {
    onSubmit: () => void;

}

const LoginForm: React.FC<ILoginFormProps> = (props) => {
    
    const passwordRef = React.useRef(null);
    const emailRef = React.useRef(null);

    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        props.onSubmit();
    }
    

    return (
        <>
            <Form onSubmit={onSubmit}>
            
                <Input 
                    type='text' 
                    label='Email' 
                    ref={emailRef} 
                    className='dark' 
                    size='lg'
                    isRequired
                />
            
                <Input 
                    type='password' 
                    label='Password' 
                    ref={passwordRef} 
                    className='dark' 
                    size='lg'
                    isRequired    
                />
            
                <Button type='submit' className='dark' size='lg'>Log in</Button>
            
            </Form>
        </>
    );
}

export default LoginForm;