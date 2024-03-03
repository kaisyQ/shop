import React from 'react';
import CheckoutForm from 'components/CheckoutForm/CheckoutForm';
import CheckoutProducts from 'components/CheckoutProducts/CheckoutProducts';
import styled from 'styled-components';


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
        <CheckoutForm />
    
    </PaymentViewWrapper>
  );
};

export default PaymentView;