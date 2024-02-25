import React from 'react';
import { getCartItems } from 'store/reducers/cart/CartSelector';
import { useAppSelector } from 'store/store';
import styled from 'styled-components';
import { Image } from '@nextui-org/react';



const CheckoutProductsWrapper = styled.div`
    -webkit-box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
`;


const CheckoutProduct = styled.div`
    margin: 10px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-column-gap: 20px;
    justify-self: center;
`;

const ProductInfoWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const ProductInfo = styled.div`
    width: 100%;
    height: 100%;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
`;



const CheckoutProducts = () => {
    const cartProducts = useAppSelector(state => getCartItems(state));
    return (
        <>
            <CheckoutProductsWrapper>
                {
                    cartProducts.map((product) => <>
                        <CheckoutProduct>
                            <Image src={product.imagesSrc[0]} />
                            <ProductInfoWrapper>
                                <ProductInfo>
                                    <h4>{product.name}</h4>
                                    <h5>{product.getCurrentPriceWithVal()}</h5>
                                </ProductInfo>
                            </ProductInfoWrapper>
                        </CheckoutProduct>
                    </>)
                }   
            </CheckoutProductsWrapper>
        </>
    );
}

export default CheckoutProducts;