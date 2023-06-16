import React from "react";

import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";
import SellingIcon from './../../components/Custom/Icons/SellingIcon';

import { 
    Wrapper, Subtitle, FormWrapper, 
    InputsWrapper, ButtonWrapper, IconWrapper 
} from "./SellSofaStyles";

import { SellSofaViewConnectedProps } from "./SellSofaViewContainer";

interface ISellSofaViewProps extends SellSofaViewConnectedProps {

}

const SellSofaView: React.FC<ISellSofaViewProps> = ({ setConfirmModalData }) => {

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
                        <SellingIcon width="64" height="64" />
                    </IconWrapper>
                    <span>Sell your sofa.</span>
                </Subtitle>
                <FormWrapper onSubmit={(ev) => ev.preventDefault()}>
                    <InputsWrapper>
                        <Input padding={'2.4rem 3rem'} id='sell-name' placeholder='Name *' 
                            value={name} onChange={onNameChange} 
                        />

                        <Input padding={'2.4rem 3rem'} id='sell-email' placeholder='Email *' 
                            value={email} onChange={onEmailChange} 
                        />
                    </InputsWrapper>   

                    <Input padding={'2.4rem 3rem'} id='sell-phoneNumber' placeholder='Phone number *' 
                        value={phoneNumber} onChange={onPhoneNumberChange} 
                    />

                    <Input padding={'2.4rem 3rem'} id='sell-brand' placeholder='Brand of sofa *' 
                        value={brand} onChange={onBrandChange} 
                    />

                    <Input padding={'4rem 3rem'} id='sell-comment' placeholder='Message *' 
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

export default SellSofaView;