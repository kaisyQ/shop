import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import type { StripeError } from '@stripe/stripe-js';
import styled from 'styled-components';
import CheckoutFormItem from './CheckoutFormItem/CheckoutFormItem';


const CheckoutFormWrapper = styled.form`
    display: grid;
    grid-gap: 30px;
    padding: 50px 10px;

    -webkit-box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
`;


const CheckoutForm = () => {
    
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = React.useState<StripeError|undefined>();
    const [cardComplete, setCardComplete] = React.useState(false);
    const [processing, setProcessing] = React.useState(false);
    const [paymentMethod, setPaymentMethod] = React.useState<any>(null);
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');


    
    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        // the stripe was not loaded yet
        if (!stripe || !elements) {
            return;
        }
    
        var card = elements.getElement(CardElement);

        // the card data is empty
        if (!card) {
            return;
        }

        if (error) {
            card.focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        var payload = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {name, email, phone}
        });


        setProcessing(false);

        
        if (payload.error) {
            setError(payload.error);
        } else {
            setPaymentMethod(payload.paymentMethod);
        }

        reset();
    }


    const reset = () => {
        setError(void(0));
        setProcessing(false);
        setPaymentMethod(null);
    };
    
    return (
        <>
            <CheckoutFormWrapper onSubmit={handleSubmit}>
                <h3>Payment Dettails</h3>
                <CheckoutFormItem onChange={() => {}}/>
                <Input 
                    className='dark' 
                    label='Name' 
                    value={name} 
                    onChange={(ev) => setName(ev.target.value)}
                />
                <Input 
                    className='dark' 
                    label='Email' 
                    value={email} 
                    onChange={(ev) => setEmail(ev.target.value)} 
                />
                <Input 
                    className='dark' 
                    label='Phone number' 
                    value={phone} onChange={(ev) => setPhone(ev.target.value)} 
                />
                <Button 
                    className='dark ' 
                    type='submit'
                    size='lg'
                    color="success"
                    
                >
                    Pay
                </Button>
            </CheckoutFormWrapper>  
        </>
    );
}

export default CheckoutForm;