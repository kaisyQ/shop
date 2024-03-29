import React from "react";

import { 
    TopProductsWrapper, TopProductsContent, TopProductsHeader, 
    TopProductsTitle 
} from "./TopProductsStyles";

import TopProduct from "./TopProduct/TopProduct";

import useWindowWidth from "hooks/useWindowWidth";

import type { TopProductsConnectedProps } from "./TopProductsContainer";

import Slider from "components/Slider/Slider";
import TopProductSliderItem from "./TopProductSliderItem/TopProductSliderItem";

interface ITopProductsProps extends TopProductsConnectedProps{
}



const TopProducts: React.FC<ITopProductsProps> = ({ fetchBestsellers, bestsellers }) => {
    
    React.useEffect(() => {
        fetchBestsellers();
    }, [fetchBestsellers]);
    
    const width = useWindowWidth();

    if (bestsellers.length === 0) {
        return null;
    }

    return (
        <>
            <TopProductsWrapper>
                <TopProductsHeader>
                    <TopProductsTitle>Top of the week</TopProductsTitle>
                </TopProductsHeader>
                {
                    width <= 768 ? <>
                    
                        <Slider 
                            autoplay={true}
                        >
                            {
                                bestsellers.map(bestseller => <TopProductSliderItem 
                                    image={bestseller.imagesSrc[0]} 
                                    name={bestseller.name}
                                    price={bestseller.price}
                                    key={bestseller.slug}
                                />)
                            }
                            
                        </Slider>
                    
                    </> : <>
                        <TopProductsContent>
                        {
                            bestsellers.map(bestseller => <TopProduct  bestseller={bestseller} key={bestseller.id}/>)
                        }
                        </TopProductsContent> 
                    </>
                }
            </TopProductsWrapper>
        </>
    );
} 

export default TopProducts;