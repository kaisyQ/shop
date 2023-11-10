import React from "react";

import { TopProductWrapper, TopProductImage, TopProductName, ImageWrapper } from "./TopProductStyles";
import { NavLink } from "react-router-dom";
import { API_URL } from "constants/constants";
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
                        <TopProductName hovered={hovered}>{props.bestseller.name}</TopProductName>
                        <TopProductImage src={`${API_URL}${props.bestseller.imagesSrc[0]}`} alt="top-product" />
                    </ImageWrapper>
                </NavLink>
            </TopProductWrapper>
        </>
    );
}

export default TopProduct;