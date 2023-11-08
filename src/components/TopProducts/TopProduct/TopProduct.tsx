import React from "react";

import { 
    TopProductWrapper, 
    TopProductImage, 
    TopProductName, 
    ImageWrapper 
} from "./TopProductStyles";

import { NavLink } from "react-router-dom";
import { API_URL } from "constants/constants";
import { ProductLink } from "types/types";

interface ITopProductProps extends ProductLink {
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
                <NavLink to={`/catalog/${props.slug}`}>
                    <ImageWrapper>
                        <TopProductName hovered={hovered}>{props.name}</TopProductName>
                        <TopProductImage src={`${API_URL}${props.imagesSrc[0]}`} alt="top-product"/>
                    </ImageWrapper>
                </NavLink>
            </TopProductWrapper>
        </>
    );
}

export default TopProduct;