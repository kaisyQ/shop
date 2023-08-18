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



const TopProducts: React.FC<ITopProductsProps> = ({ fetchTopProducts, topProducts }) => {
    
    React.useEffect(() => {
        fetchTopProducts();
    }, [fetchTopProducts]);
    
    const width = useWindowWidth();

    return (
        <>
            <TopProductsWrapper>
                <TopProductsHeader>
                    <TopProductsTitle>Top of the week</TopProductsTitle>
                </TopProductsHeader>
                {
                    width <= 500 ? 
                        <TopProductsSlider topProducts={topProducts} width={width}/> : <>
                            <TopProductsMain>
                            {
                                topProducts.map(product => <TopProduct {...product} key={product.id}/>)
                            }
                            </TopProductsMain> 
                        </>
                }
            </TopProductsWrapper>
        </>
    );
} 

export default TopProducts;