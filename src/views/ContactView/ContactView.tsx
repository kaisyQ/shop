import React from "react";

import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";
import Title from "components/Custom/Title/Title";

import { Wrapper, Subtitle, FormWrapper, InputsWrapper, ButtonWrapper } from "./ContactViewStyles";

export default () => {

    const [name, setName] =  React.useState('');
    const [email, setEmail] =  React.useState('');
    const [phoneNumber, setPhoneNumber] =  React.useState('');
    const [comment, setComment] =  React.useState('');


    const onNameChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(ev.target.value);
    }

    const onEmailChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(ev.target.value);
    }

    const onPhoneNumberChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPhoneNumber(ev.target.value);
    }

    const onCommentChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(ev.target.value);
    }
    
    return (
        <>
            <Wrapper>
                <Title>Contact</Title>
                
                <Subtitle>Please let us know how we can assist you.</Subtitle>
                
                <FormWrapper>
                    <InputsWrapper>
                        <Input 
                            padding={'2.4rem 3rem'}
                            id='contact-name' 
                            placeholder='Name' 
                            value={name} 
                            onChange={onNameChange} 
                        />

                        <Input
                            padding={'2.4rem 3rem'}
                            id='contact-email' 
                            placeholder='Email' 
                            value={email} 
                            onChange={onEmailChange} 
                        />
                    </InputsWrapper>   

                    <Input 
                        padding={'2.4rem 3rem'} 
                        id='contact-phoneNumber' 
                        placeholder='Phone number' 
                        value={phoneNumber} 
                        onChange={onPhoneNumberChange} 
                    />

                    <Input 
                        padding={'4rem 3rem'} 
                        id='contact-comment'
                        placeholder='Comment' 
                        type='textarea' 
                        value={comment} 
                        onChange={onCommentChange} 
                    />

                    <ButtonWrapper>
                        <Button padding={'2rem 7rem'} isReverse={true}>Send</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </Wrapper>
        </>
    );
}