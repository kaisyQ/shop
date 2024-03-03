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
    position: relative;
`;

const ProductInfoWrapper = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 99;
    background-color: #000;
    color: orange;
`;

const ProductInfo = styled.div`
    width: 100%;
    height: 100%;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    font-size: 18px;
    padding: 10px;
   
    h4, h5 {
        margin-left: 15px;
    }
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