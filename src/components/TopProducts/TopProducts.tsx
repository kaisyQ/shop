import React from "react";

import { 
    TopProductsWrapper, TopProductsMain, TopProductsHeader, 
    TopProductsTitle 
} from "./TopProductsStyles";

import TopProduct from "./TopProduct/TopProduct";

import TopProductsSlider from "./TopProductsSlider/TopProductsSlider";

import useWindowWidth from "hooks/useWindowWidth";

import type { TopProductsConnectedProps } from "./TopProductsContainer";

interface ITopProductsProps extends TopProductsConnectedProps{
}



const TopProducts: React.FC<ITopProductsProps> = ({ fetchBestsellers, bestsellers }) => {
    
    React.useEffect(() => {
        fetchBestsellers();
    }, [fetchBestsellers]);
    
    const width = useWindowWidth();

    return (
        <>
            <TopProductsWrapper>
                <TopProductsHeader>
                    <TopProductsTitle>Top of the week</TopProductsTitle>
                </TopProductsHeader>
                {
                    width <= 500 ? 
                        <TopProductsSlider topProducts={bestsellers} width={width}/> : <>
                            <TopProductsMain>
                            {
                                bestsellers.map(bestseller => <TopProduct  bestseller={bestseller} key={bestseller.id}/>)
                            }
                            </TopProductsMain> 
                        </>
                }
            </TopProductsWrapper>
        </>
    );
} 

export default TopProducts;