import React from "react";

import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";
import SellingIcon from './../../components/Custom/Icons/SellingIcon';

import { 
    Wrapper, Subtitle, FormWrapper, 
    InputsWrapper, ButtonWrapper, IconWrapper 
} from "./SellSofaStyles";

import { SellSofaViewConnectedProps } from "./SellSofaViewContainer";
import reducer, { initialState, actions } from "reducers/sell-sofa-view/reducer";
import OkMessage from "components/Ui/OkMessage/OkMessage";

interface ISellSofaViewProps extends SellSofaViewConnectedProps {

}

const SellSofaView: React.FC<ISellSofaViewProps> = (props) => {

    const { status, setStatus, setConfirmModalData, fetchSellMessage } = props;

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        return () => {
            setStatus(null);
        }
    }, []);

    const onNameChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setName(ev.target.value));
    }

    const onEmailChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setEmail(ev.target.value));
    }

    const onPhoneNumberChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setPhoneNumber(ev.target.value));
    }

    const onBrandChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setBrandOfSofa(ev.target.value));
    }

    const onCommentChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.setComment(ev.target.value));
    }
    
    const onSendClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        setConfirmModalData({
            callback: () => {
                setStatus(500);
                fetchSellMessage({
                    email: state.email,
                    comment: state.comment,
                    brand: state.brandOfSofa,
                    phoneNumber: state.phoneNumber,
                    name: state.name
                })
            },
            isVisible: true,
            message: "Confirm your action..."
        });
    }

    return (
        <> 
        {
            status ? <OkMessage status={status} /> :
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
                                value={state.name} onChange={onNameChange} 
                            />

                            <Input padding={'2.4rem 3rem'} id='sell-email' placeholder='Email *' 
                                value={state.email} onChange={onEmailChange} 
                            />
                        </InputsWrapper>   

                        <Input padding={'2.4rem 3rem'} id='sell-phoneNumber' placeholder='Phone number *' 
                            value={state.phoneNumber} onChange={onPhoneNumberChange} 
                        />

                        <Input padding={'2.4rem 3rem'} id='sell-brand' placeholder='Brand of sofa *' 
                            value={state.brandOfSofa} onChange={onBrandChange} 
                        />

                        <Input padding={'4rem 3rem'} id='sell-comment' placeholder='Message *' 
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

export default SellSofaView;