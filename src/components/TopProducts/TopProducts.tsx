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
    
    /*React.useEffect(() => {
        fetchTopProducts();
    }, [fetchTopProducts]);
*/
    const width = useWindowWidth();

    if (topProducts.length === 0) {
        return null;
    }
    return (
        <>
            <TopProductsWrapper>
                <TopProductsHeader>
                    <TopProductsTitle>Top of the week</TopProductsTitle>
                </TopProductsHeader>
                {
                    width <= 330 ? 
                        <TopProductsSlider topProducts={topProducts} width={width}/> : <>
                            <TopProductsMain>
                            {
                                topProducts.map(product => <TopProduct {...product} />)
                            }
                            </TopProductsMain> 
                        </>
                }
            </TopProductsWrapper>
        </>
    );
} 

export default TopProducts;