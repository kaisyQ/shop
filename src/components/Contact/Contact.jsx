import React from "react"
import styled from "styled-components"

import Input from "../Custom/Input"
import Button from "../Custom/Button"

const ContactWrapper = styled.div`
    text-align: left;
    margin-top: 3rem;
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
    gap: 1rem;
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

    
    const Name = Input({ placeholder:'Name', value:name, onChange:(ev) => {
         setName(ev.target.value)
         debugger
    }}) 

    const Email = Input({ placeholder:'Email', value:email, onChange:(ev) => { setEmail(ev.target.value) }}) 
    const PhoneNumber = Input({ placeholder:'Phone number', value:phoneNumber, onChange:(ev) => { setPhoneNumber(ev.target.value) }}) 
    const Comment = Input({ placeholder:'Comment', type:'textarea', value:comment, onChange:(ev) => { setComment(ev.target.value) }})

    return (
        <>
            <ContactWrapper>
                <Title>Contact</Title>
                <Subtitle>Please let us know how we can assist you.</Subtitle>
                <FormWrapper>
                    <Name />
                    <Email />
                    <PhoneNumber />
                    <Comment />
                    <ButtonWrapper>
                        <Button>Send</Button>
                    </ButtonWrapper>
                </FormWrapper>
            </ContactWrapper>
        </>
    )
}