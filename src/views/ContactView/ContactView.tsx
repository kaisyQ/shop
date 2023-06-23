import React from "react";

import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";
import MailICon from './../../components/Custom/Icons/MailICon';

import { 
    Wrapper, Subtitle, FormWrapper, 
    InputsWrapper, ButtonWrapper, IconWrapper 
} from "./ContactViewStyles";

import { ContactViewConnectedProps } from "./ContactViewContainer";
import reducer, { initialState, actions } from "reducers/contact-view/reducer";

import OkMessage from "components/Ui/OkMessage/OkMessage";

interface IContactView extends ContactViewConnectedProps {

}

const ContactView: React.FC<IContactView> = (props) => {

    const { status, setConfirmModalData, fetchContactMessage, setStatus } = props;

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        return () => {
            setStatus(null);
        }
    }, [setStatus])

    const onNameChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setName(ev.target.value));
    }

    const onEmailChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setEmail(ev.target.value));
    }

    const onPhoneNumberChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setPhoneNumber(ev.target.value));
    }

    const onCommentChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setComment(ev.target.value));
    }
    
    const onSendClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        setConfirmModalData({
            callback: () => { 
                setStatus(202);
                fetchContactMessage({
                    name: state.name,
                    email: state.email,
                    comment: state.comment,
                    phoneNumber: state.phoneNumber
                })
            },
            isVisible: true,
            message: "Confirm your action..."
        });
    }

    return (
        <>
            {
                status ? <>
                    <OkMessage status={status} />
                </> : <>
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
                                    placeholder='Name *' value={state.name} onChange={onNameChange} 
                                />

                                <Input
                                    padding={'2.4rem 3rem'} id='contact-email' placeholder='Email *' 
                                    value={state.email} onChange={onEmailChange} 
                                />
                            </InputsWrapper>   

                            <Input padding={'2.4rem 3rem'} id='contact-phoneNumber' placeholder='Phone number *' 
                                value={state.phoneNumber} onChange={onPhoneNumberChange} 
                            />

                            <Input padding={'4rem 3rem'} id='contact-comment' placeholder='Message *' 
                                type='textarea' value={state.comment} onChange={onCommentChange} 
                            />

                            <ButtonWrapper>
                                <Button onClick={onSendClick} padding={'2rem 7rem'} isReverse={true}>
                                    Send
                                </Button>
                            </ButtonWrapper>
                        </FormWrapper>
                    </Wrapper>
                </>
            }
        </>
    );
}

export default ContactView;