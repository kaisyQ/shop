import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from 'components/CheckoutForm/CheckoutForm';
import CheckoutProducts from 'components/CheckoutProducts/CheckoutProducts';
import styled from 'styled-components';


const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const PaymentViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentView = () => {
  return (
    <PaymentViewWrapper>

        <CheckoutProducts />
        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
            <CheckoutForm />
        </Elements>
    
    </PaymentViewWrapper>
  );
};

export default PaymentView;