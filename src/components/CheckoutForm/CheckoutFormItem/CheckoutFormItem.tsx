import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import type { StripeCardElementChangeEvent } from '@stripe/stripe-js';

interface ICheckoutFormItemProps {
    onChange: (ev: StripeCardElementChangeEvent) => void    
}


const CheckoutFormItem: React.FC<ICheckoutFormItemProps> = (props) => {
    
    return (
        <>
            <CardElement onChange={props.onChange} />
        </>
    );
}

export default CheckoutFormItem;