import React from "react";

import { TopProductWrapper, TopProductImage } from "./TopProductStyles";

import { NavLink } from "react-router-dom";

interface ITopProductProps {
    id: string, 
    imagesSrc: string[]
}

const TopProduct: React.FC<ITopProductProps> = (props) => {
    return (
        <>
            <TopProductWrapper>
                <NavLink to={`/catalog/${props.id}`}>
                    <TopProductImage src={props.imagesSrc[0]} alt="top-product"/>
                </NavLink>
            </TopProductWrapper>
        </>
    );
}

export default TopProduct;