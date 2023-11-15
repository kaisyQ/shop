import React from "react";

import { TopProductWrapper, TopProductImage, TopProductInfo, TopProductName, TopProductPrice, ImageWrapper } from "./TopProductStyles";
import { NavLink } from "react-router-dom";
import { Bestseller } from "models/Bestseller";

interface ITopProductProps {
    bestseller: Bestseller
}

const TopProduct: React.FC<ITopProductProps> = (props) => {
    
    const [hovered, setHovered] = React.useState(false);
    
    const wrapperMouseOver = (ev: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
    }

    const wrapperMouseOut = (ev: React.MouseEvent<HTMLDivElement>) => {
        setHovered(false);
    }


    return (
        <>
            
            <TopProductWrapper onMouseOver={wrapperMouseOver} onMouseOut={wrapperMouseOut}> 
            
                <NavLink to={`/catalog/${props.bestseller.slug}`}>
            
                    <ImageWrapper>
            
                        <TopProductInfo hovered={hovered}>
                        
                            <TopProductName>
                        
                                { props.bestseller.name }
                        
                            </TopProductName>
                        
                            <TopProductPrice>
                        
                                { props.bestseller.getCurrentPriceWithVal() }
                        
                            </TopProductPrice>
                        
                        </TopProductInfo>
            
                        <TopProductImage src={props.bestseller.imagesSrc[0]} alt="top-product" />
            
                    </ImageWrapper>
            
                </NavLink>
            
            </TopProductWrapper>
        </>
    );
}

export default TopProduct;