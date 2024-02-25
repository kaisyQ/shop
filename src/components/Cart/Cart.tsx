import React from 'react';
import CartStyles from './CartStyles';
import { CartConnectedProps } from './CartContainer';
import CartItemContainer from './CartItem/CartItemContainer';
import Title from 'components/Custom/Title/Title';
import { Button } from '@nextui-org/react';
import { ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC<CartConnectedProps> = (props) => {
    const navigate = useNavigate();
    if (props.cartItems.length === 0) {
        return (
            <>
                
                <CartStyles.Wrapper>
                
                    <CartStyles.Message>Your cart is empty !</CartStyles.Message>
                
                    <CartStyles.NavigateBtnWrapper>
                        <Button size='lg' className='dark' radius='sm' onClick={(ev) =>{navigate('/catalog')}}>
                            
                            Continue shopping
                        
                            <ArrowRight size={'20px'} />
                        
                        </Button>
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
                        <Button 
                            className='dark' 
                            size='lg'
                            onClick={(ev) => navigate('/payment')}
                        >
                            Checkout
                        </Button>
                    </div>

                </CartStyles.CartFooter>
            
            </CartStyles.Wrapper>
        </>
    );
}


export default Cart;