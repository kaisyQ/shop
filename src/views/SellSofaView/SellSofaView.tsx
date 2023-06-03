import React from "react";

import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";

import SellingIcon from './../../components/Custom/Icons/SellingIcon';

import { Wrapper, Subtitle, FormWrapper, InputsWrapper, ButtonWrapper, IconWrapper } from "./SellSofaStyles";

const SellSofaView: React.FC = () => {

    const [name, setName] =  React.useState('');
    const [email, setEmail] =  React.useState('');
    const [phoneNumber, setPhoneNumber] =  React.useState('');
    const [brand, setBrand] = React.useState('');
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

    const onBrandChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBrand(ev.target.value);
    }

    const onCommentChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(ev.target.value);
    }
    
    return (
        <>
            <Wrapper>
                
                <Subtitle>
                    <IconWrapper>
                        <SellingIcon width="64" height="64" />
                    </IconWrapper>
                    <span>
                        Sell your sofa.
                    </span>
                </Subtitle>
                
                <FormWrapper>
                    <InputsWrapper>
                        <Input 
                            padding={'2.4rem 3rem'}
                            id='sell-name' 
                            placeholder='Name *' 
                            value={name}
                            onChange={onNameChange} 
                        />

                        <Input
                            padding={'2.4rem 3rem'}
                            id='sell-email' 
                            placeholder='Email *' 
                            value={email} 
                            onChange={onEmailChange} 
                        />
                    </InputsWrapper>   

                    <Input 
                        padding={'2.4rem 3rem'} 
                        id='sell-phoneNumber' 
                        placeholder='Phone number *' 
                        value={phoneNumber} 
                        onChange={onPhoneNumberChange} 
                    />

                    <Input 
                        padding={'2.4rem 3rem'} 
                        id='sell-brand' 
                        placeholder='Brand of sofa *' 
                        value={brand} 
                        onChange={onBrandChange} 
                    />

                    <Input 
                        padding={'4rem 3rem'} 
                        id='sell-comment'
                        placeholder='Message *' 
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

export default SellSofaView;