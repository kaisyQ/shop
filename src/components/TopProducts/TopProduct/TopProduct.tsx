import React from "react";

import { TopProductWrapper, TopProductImage, TopProductInfo, TopProductName, TopProductPrice, ImageWrapper } from "./TopProductStyles";
import { NavLink } from "react-router-dom";
import { Bestseller } from "models/Bestseller";
import { Image } from "@nextui-org/react";

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
                        
                        <Image src={props.bestseller.imagesSrc[0]} alt="top_product" />
            
                    </ImageWrapper>
            
                </NavLink>
            
            </TopProductWrapper>
        </>
    );
}

export default TopProduct;