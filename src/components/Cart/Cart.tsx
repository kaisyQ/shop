import React from 'react';

import CartStyles from './CartStyles';

import { CartConnectedProps } from './CartContainer';

import CartItemContainer from './CartItem/CartItemContainer';

import Title from 'components/Custom/Title/Title';

import { Button } from '@nextui-org/react';

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
                            
                                <ArrowRight size={'20px'} />
                            
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
                        <Button className='dark' size='lg' isDisabled>Checkout</Button>
                    </div>
                </CartStyles.CartFooter>
            
            </CartStyles.Wrapper>
        </>
    );
}


export default Cart;