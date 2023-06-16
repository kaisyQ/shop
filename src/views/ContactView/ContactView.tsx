import React from "react";

import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";
import MailICon from './../../components/Custom/Icons/MailICon';

import { 
    Wrapper, Subtitle, FormWrapper, 
    InputsWrapper, ButtonWrapper, IconWrapper 
} from "./ContactViewStyles";

import { ContactViewConnectedProps } from "./ContactViewContainer";

interface IContactView extends ContactViewConnectedProps {

}

const ContactView: React.FC<IContactView> = ({ setConfirmModalData }) => {

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
    
    const onSendClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        setConfirmModalData({
            callback: () => {},
            isVisible: true,
            message: "Confirm your action..."
        });
    }

    return (
        <>
            <Wrapper>
                <Subtitle>
                    <IconWrapper>
                        <MailICon width="64" height="64"/>
                    </IconWrapper>
                    <span>
                        Please let us know how we can assist you.
                    </span>
                </Subtitle>
                <FormWrapper onSubmit={(ev) => ev.preventDefault()}>
                    <InputsWrapper>
                        <Input padding={'2.4rem 3rem'} id='contact-name' 
                            placeholder='Name *' value={name} onChange={onNameChange} 
                        />

                        <Input
                            padding={'2.4rem 3rem'} id='contact-email' placeholder='Email *' 
                            value={email} onChange={onEmailChange} 
                        />
                    </InputsWrapper>   

                    <Input padding={'2.4rem 3rem'} id='contact-phoneNumber' placeholder='Phone number *' 
                        value={phoneNumber} onChange={onPhoneNumberChange} 
                    />

                    <Input padding={'4rem 3rem'} id='contact-comment' placeholder='Message *' 
                        type='textarea' value={comment} onChange={onCommentChange} 
                    />

                    <ButtonWrapper>
                        <Button onClick={onSendClick} padding={'2rem 7rem'} isReverse={true}>
                            Send
                        </Button>
                    </ButtonWrapper>
                </FormWrapper>
            </Wrapper>
        </>
    );
}

export default ContactView;