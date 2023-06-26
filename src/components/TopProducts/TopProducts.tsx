import React from "react";

import { 
    TopProductsWrapper, TopProductsMain, TopProductsHeader, 
    TopProductsTitle 
} from "./TopProductsStyles";

import TopProduct from "./TopProduct/TopProduct";
import TopProductsSlider from "./TopProductsSlider/TopProductsSlider";

interface ITopProductsProps {
}

const TopProducts: React.FC<ITopProductsProps> = (props) => {
    
    const [ width, setWidth ] = React.useState(window.innerWidth);
    console.log(width);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    },[]);

    return (
        <>
            <TopProductsWrapper>
                <TopProductsHeader>
                    <TopProductsTitle>Top of the week</TopProductsTitle>
                </TopProductsHeader>
                {
                    width <= 330 ? 
                        <TopProductsSlider /> : <>
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