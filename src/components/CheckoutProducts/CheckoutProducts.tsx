import React from 'react';
import { getCartItems } from 'store/reducers/cart/CartSelector';
import { useAppSelector } from 'store/store';
import styled from 'styled-components';
import { Image } from '@nextui-org/react';



const CheckoutProductsWrapper = styled.div`

    display: grid;
    grid-row-gap: 20px;

    -webkit-box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
`;


const CheckoutProduct = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;

`;


const CheckoutProducts = () => {
    
    

    const cartProducts = useAppSelector(state => getCartItems(state));

    console.log(cartProducts);

    return (
        <>
            <CheckoutProductsWrapper>
                {
                    cartProducts.map((product) => <>
                        <CheckoutProduct>
                            <Image src={product.imagesSrc[0]} />
                            <div>

                                <h4>{product.name}</h4>

                            </div>
                        </CheckoutProduct>
                    </>)
                }   
            </CheckoutProductsWrapper>
        </>
    );
}

export default CheckoutProducts;