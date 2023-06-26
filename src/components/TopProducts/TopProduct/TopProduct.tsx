import React from "react";

import { TopProductWrapper, TopProductImage } from "./TopProductStyles";

import { NavLink } from "react-router-dom";

interface ITopProductProps {
}

const TopProduct: React.FC<ITopProductProps> = (props) => {
    return (
        <>
            <TopProductWrapper>
                <TopProductImage />
            </TopProductWrapper>
        </>
    );
}

export default TopProduct;