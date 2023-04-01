import React from "react"
import styled from "styled-components"

import Input from "../Custom/Input"
import Button from "../Custom/Button"

const ContactWrapper = styled.div`
    text-align: left;
    margin-top: 3rem;
    padding: 2rem 4rem;

    @media only screen and (max-width: 768px){
    }
    
`
const Title = styled.h1`
    font-size: 4.5rem;
    letter-spacing: 0.3rem;
    font-weight: 500;
    position: relative;
    display: inline-flex;
    color: #b42525;
    font-style: italic;
    
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: .1rem solid #000;
    }
`

const Subtitle =  styled.h3`
    margin-top: 3rem;
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
`

const FormWrapper = styled.form`
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
const InputsWrapper = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: row;
    
    @media only screen and (max-width: 330px){
        flex-direction: column;
    }
`

const ButtonWrapper = styled.div`
    
`


const FormControl = styled.button`
    
`
export default () => {

    const [name, setName] =  React.useState('')
    const [email, setEmail] =  React.useState('')
    const [phoneNumber, setPhoneNumber] =  React.useState('')
    const [comment, setComment] =  React.useState('')

    return (
        <>
            <ContactWrapper>
                <Title>Contact</Title>
                <Subtitle>Please let us know how we can assist you.</Subtitle>
                <FormWrapper>
                    <InputsWrapper>
                        <Input 
                            padding={'2.4rem 3rem'}
                            id='contact-name' 
                            placeholder='Name' 
                            value={name} 
                            onChange={(ev) => {setName(ev.target.value)}} 
                        />

                        <Input
                            padding={'2.4rem 3rem'}
                            id='contact-email' 
                            placeholder='Email' 
                            value={email} 
                            onChange={(ev) => {setEmail(ev.target.value)}} 
                        />
                    </InputsWrapper>                   
                    <Input padding={'2.4rem 3rem'} id='contact-phoneNumber' placeholder='Phone number' value={phoneNumber} onChange={(ev) => {setPhoneNumber(ev.target.value)}} />
                    <Input padding={'4rem 3rem'} id='contact-comment'placeholder='Comment' type='textarea' value={comment} onChange={(ev) => {setComment(ev.target.value)}} />
                    <ButtonWrapper>
                        <Button padding={'2rem 7rem'} isReverse={true}>Send</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </ContactWrapper>
        </>
    )
}