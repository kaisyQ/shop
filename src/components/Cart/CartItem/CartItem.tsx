import React from 'react';
import CartItemStyles from './CartItemStyles';
import { NavLink } from 'react-router-dom';
import { Product } from 'models/Product';
import Counter from 'components/Counter/Counter';
import useWindowWidth from 'hooks/useWindowWidth';
import { Trash3, ArrowBarRight, ArrowRight } from 'react-bootstrap-icons';
import type { CartItemConnectedProps } from './CartItemContainer';
import { Image, Button } from '@nextui-org/react';


interface ICartItemProps extends CartItemConnectedProps{
    product: Product
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
                        
                    <Image isZoomed src={props.product.imagesSrc[0]}/>
                    

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
                                    props.product.getCurrentPriceWithVal()
                                }
                            </CartItemStyles.Price>
                        </CartItemStyles.InfoHeader>

                        <CartItemStyles.InfoMain>
                            <Counter size={width < 330 ? '30px' : '40px'} productCount={props.product.count} />  
                        </CartItemStyles.InfoMain>

                        <CartItemStyles.InfoFooter>
                            
                            <CartItemStyles.BtnNavLinkFlexWrapper isLeft={true}>

                                <Button variant='bordered' onClick={onRemoveBtnClick}>
                                    <Trash3 size={'18px'} />
                                    Remove
                                </Button>

                            </CartItemStyles.BtnNavLinkFlexWrapper>

                            <CartItemStyles.BtnNavLinkFlexWrapper isLeft={false}>
                                <NavLink to={`/catalog/${props.product.id}`}>
                                
                                    <Button variant='bordered'>
                                        Show in catalog
                                        <ArrowRight size={'18px'} />
                                    </Button>
                                
                                </NavLink>
                            </CartItemStyles.BtnNavLinkFlexWrapper>
                            
                            <CartItemStyles.BtnNavLinkFlexWrapper isLeft={false}>
                                <NavLink to={'/catalog'}>
                                
                                    <Button variant='bordered'>
                                        Continue shopping
                                        <ArrowBarRight size={'18px'} />
                                    </Button>
                                
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