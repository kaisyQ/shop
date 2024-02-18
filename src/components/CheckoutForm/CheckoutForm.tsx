import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import type { StripeError } from '@stripe/stripe-js';

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
    }


    const reset = () => {
        setError(void(0));
        setProcessing(false);
        setPaymentMethod(null);
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input label='Name' value={name} onChange={(ev) => setName(ev.target.value)}/>
                <Input label='Email' value={email} onChange={(ev) => setEmail(ev.target.value)} />
                <Input label='Phone number' value={phone} onChange={(ev) => setPhone(ev.target.value)} />
                <Button type='submit'>Pay</Button>
            </form>
        </>
    );
}