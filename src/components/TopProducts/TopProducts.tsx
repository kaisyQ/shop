import React from "react";

import { 
    TopProductsWrapper, TopProductsMain, TopProductsHeader, 
    TopProductsTitle 
} from "./TopProductsStyles";

import TopProduct from "./TopProduct/TopProduct";
import TopProductsSlider from "./TopProductsSlider/TopProductsSlider";

import useWindowWidth from "hooks/useWindowWidth";

interface ITopProductsProps {
}

const TopProducts: React.FC<ITopProductsProps> = (props) => {
    
    const width = useWindowWidth();

    return (
        <>
            <TopProductsWrapper>
                <TopProductsHeader>
                    <TopProductsTitle>Top of the week</TopProductsTitle>
                </TopProductsHeader>
                {
                    width <= 330 ? 
                        <TopProductsSlider width={width}/> : <>
                            <TopProductsMain>
                                <TopProduct />
                                <TopProduct />
                                <TopProduct />
                                <TopProduct />
                            </TopProductsMain> 
                        </>
                }
            </TopProductsWrapper>
        </>
    );
} 

export default TopProducts;