import React from "react"
import styled from "styled-components"

import Input from "../Custom/Input"
import Button from "../Custom/Button"

const ContactWrapper = styled.div`
    text-align: left;
    margin-top: 3rem;
    padding: 2rem 4rem;
    max-width: 60rem;

    @media only screen and (max-width: 768px){
    }
    
    @media only screen and (max-width: 330px){
    }
`
const Title = styled.h1`
    font-size: 3rem;
    letter-spacing: 0.3rem;
`

const Subtitle =  styled.h3`
    margin-top: 3rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
`

const FormWrapper = styled.form`
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
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
                    <Input id='contact-name' placeholder='Name' value={name} onChange={(ev) => {setName(ev.target.value)}} />
                    <Input id='contact-email' placeholder='Email' value={email} onChange={(ev) => {setEmail(ev.target.value)}} />
                    <Input id='contact-phoneNumber' placeholder='Phone number' value={phoneNumber} onChange={(ev) => {setPhoneNumber(ev.target.value)}} />
                    <Input id='contact-comment'placeholder='Comment' type='textarea' value={comment} onChange={(ev) => {setComment(ev.target.value)}} />
                    <ButtonWrapper>
                        <Button isReverse={true}>Send</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </ContactWrapper>
        </>
    )
}