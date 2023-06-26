import React from "react";

import { 
    TopProductsSliderWrapper, TopProductsSliderBlock, TopProductsSliderItem,
    TopProductsSliderItemImage
} from "./TopProductsSliderStyles";

interface ITopProductsSliderProps {}

const TopProductsSlider: React.FC<ITopProductsSliderProps> = (props) => {
    
    const intervalRef = React.useRef<NodeJS.Timer | null>(null);

   
    React.useEffect(() => {
        
        if (intervalRef.current !== null) {
            return;
        }
        
        intervalRef.current = setInterval(() => {
            console.log("from interval")
        }, 1000);



        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, []);


    return (
        <>
            <TopProductsSliderWrapper>
                <TopProductsSliderBlock>
                    
                    <TopProductsSliderItem clr={"red"}>
                        <TopProductsSliderItemImage />
                    </TopProductsSliderItem>


                    <TopProductsSliderItem clr={"yellowe"}>
                        <TopProductsSliderItemImage />
                    </TopProductsSliderItem>

                </TopProductsSliderBlock>
            </TopProductsSliderWrapper>
        </>
    );
} 

export default TopProductsSlider;
