import React from "react";

import Button from "../../../Custom/Button/Button";

import { NavLink } from "react-router-dom";

import { 
    Wrapper, 
    CardTitle,
    CardSaleTitle,
    CardImageWrapper, 
    CardImage, 
    CardInfoWrapper, 
    CardInfoItem,
    CardPrice,

} from "./ProductStyles";

import { Product as ProductModel } from "models/Product";


interface IProductProps {
    product: ProductModel
}

const Product: React.FC<IProductProps> = (props) => {
    return (
        <>
            <Wrapper>
                
                <CardSaleTitle>
                
                    { props.product.count === 0 ? 'Sold out' : 'Sale' }
                
                </CardSaleTitle>
                
                <NavLink to={`/catalog/${props.product.slug}`}>
                    
                    <CardImageWrapper>
                        
                        <CardImage 
                        
                            src={props.product.imagesSrc[0]}
                            alt="Card image" 
                
                        />
                        <CardPrice>

                            { props.product.getCurrentPriceWithVal() }

                        </CardPrice>
                
                    </CardImageWrapper>
                
                </NavLink>
                
                <CardInfoWrapper>
                
                    <NavLink to={`/catalog/${props.product.slug}`}>
                
                        <CardInfoItem>
                
                            <CardTitle>{ props.product.name }</CardTitle>
                
                        </CardInfoItem>
                
                    </NavLink>
                
                    <CardInfoItem>
                
                        <NavLink to={`/catalog/${props.product.slug}`}>
                
                            <Button isReverse={true}>Show More</Button>
                
                        </NavLink>
                
                    </CardInfoItem>
                
                </CardInfoWrapper>
            </Wrapper>
        </>
    );
}

export default React.memo(Product);