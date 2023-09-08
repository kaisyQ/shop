import React from 'react';

import CartItemStyles from './CartItemStyles';

import { NavLink } from 'react-router-dom';

import type { IProduct } from 'types/types';

import Counter from 'components/Counter/Counter';

import useWindowWidth from 'hooks/useWindowWidth';

import { Trash3, ArrowBarRight, ArrowRight } from 'react-bootstrap-icons';

import type { CartItemConnectedProps } from './CartItemContainer';

interface ICartItemProps extends CartItemConnectedProps{
    product: IProduct
}

const CartItem: React.FC<ICartItemProps> = (props) => {

    const width = useWindowWidth();

    const onRemoveBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        props.removeFromCart(props.product.id);
    }

    return (
        <>
            <CartItemStyles.Container>

                <CartItemStyles.ImageWrapper>
                        
                    <CartItemStyles.Image src={props.product.imagesSrc[0]}/>
                    

                </CartItemStyles.ImageWrapper>
                
                <CartItemStyles.Wrapper>
                    
                    <CartItemStyles.Info>
                        

                        <CartItemStyles.InfoHeader>
                            
                            <CartItemStyles.Name>
                            
                                <span>Product: </span>
                            
                                {props.product.name}
                            
                            </CartItemStyles.Name>
  
                        
                            <CartItemStyles.Price>
                                <span>Price: </span>
                                {
                                     "$" + (
                                        props.product.discountPrice ? 
                                            props.product.discountPrice :
                                            props.product.price
                                    
                                    ) + " CAD"
                                }
                            </CartItemStyles.Price>
                        </CartItemStyles.InfoHeader>

                        <CartItemStyles.InfoMain>
                            <Counter size={width < 330 ? '3rem' : '4rem'} productCount={props.product.count} />  
                        </CartItemStyles.InfoMain>

                        <CartItemStyles.InfoFooter>
                            
                            <CartItemStyles.BtnNavLinkFlexWrapper isLeft={true}>
                                <CartItemStyles.InfoFooterButton onClick={onRemoveBtnClick}>
                                    <Trash3 size={'1.8rem'} />
                                    Remove
                                </CartItemStyles.InfoFooterButton>
                            </CartItemStyles.BtnNavLinkFlexWrapper>

                            <CartItemStyles.BtnNavLinkFlexWrapper isLeft={false}>
                                <NavLink to={`/catalog/${props.product.id}`}>
                                    <CartItemStyles.InfoFooterButton>
                                        Show in catalog
                                        <ArrowRight size={'1.8rem'} />
                                    </CartItemStyles.InfoFooterButton>
                                </NavLink>
                            </CartItemStyles.BtnNavLinkFlexWrapper>
                            
                            <CartItemStyles.BtnNavLinkFlexWrapper isLeft={false}>
                                <NavLink to={'/catalog'}>
                                    <CartItemStyles.InfoFooterButton>
                                        Continue shopping
                                        <ArrowBarRight size={'1.8rem'} />
                                    </CartItemStyles.InfoFooterButton>
                                </NavLink>
                            </CartItemStyles.BtnNavLinkFlexWrapper>
                   
                        </CartItemStyles.InfoFooter>
                    
                    </CartItemStyles.Info>

                </CartItemStyles.Wrapper>

            
            </CartItemStyles.Container>
        </>
    );
}


export default React.memo(CartItem);