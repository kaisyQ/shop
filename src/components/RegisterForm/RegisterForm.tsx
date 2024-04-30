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

const RegisterForm: React.FC<ILoginFormProps> = (props) => {
    
    const usernameRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const emailRef = React.useRef(null);

    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        props.onSubmit();
    }
    

    return (
        <>
            <Form onSubmit={onSubmit}>
            
                <Input type='text' label='Username' ref={usernameRef} className='dark' size='lg'/>
                
                <Input type='email' label='Email' ref={emailRef} className='dark' size='lg'/>
            
                <Input type='password' label='Password' ref={passwordRef} className='dark' size='lg'/>
            
                <Button type='submit' className='dark' size='lg'>Register</Button>
            
            </Form>
        </>
    );
}

export default RegisterForm;