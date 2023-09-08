import React from 'react';

import CartStyles from './CartStyles';

import { CartConnectedProps } from './CartContainer';

import CartItemContainer from './CartItem/CartItemContainer';

import Title from 'components/Custom/Title/Title';

import Button from 'components/Custom/Button/Button';

import { ArrowRight } from 'react-bootstrap-icons';

import { NavLink } from 'react-router-dom';


const Cart: React.FC<CartConnectedProps> = (props) => {

    if (props.cartItems.length === 0) {
        return (
            <>
                
                <CartStyles.Wrapper>
                
                    <CartStyles.Message>Your cart is empty !</CartStyles.Message>
                
                    <CartStyles.NavigateBtnWrapper>
                        <NavLink to={'/catalog'}>
                            <CartStyles.NavigateBtn>
                                
                                Continue shopping
                            
                                <ArrowRight size={'2rem'} />
                            
                            </CartStyles.NavigateBtn>
                        </NavLink>
                    </CartStyles.NavigateBtnWrapper>

                </CartStyles.Wrapper>
            </>
        );
    }

    return (
        <>
            <CartStyles.Wrapper>
                <Title>Your cart</Title>
                <CartStyles.CartContainer>
                {
                    props.cartItems.map(cartItem => <React.Fragment key={cartItem.id}>
                        
                        <CartItemContainer product={cartItem} />

                    </React.Fragment>)
                }
                </CartStyles.CartContainer>
                
                <CartStyles.CartFooter>
                
                    <CartStyles.Subtotal>
                        Subtotal: <span>{`$${props.subtotal} CAD`}</span>
                    </CartStyles.Subtotal>

                    <div>
                        <Button padding='1.5rem 5rem' isReverse={true} disabled={true}>Checkout</Button>
                    </div>
                </CartStyles.CartFooter>
            
            </CartStyles.Wrapper>
        </>
    );
}


export default Cart;