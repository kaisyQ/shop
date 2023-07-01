import React from "react";

import { 
    TopProductsSliderWrapper, TopProductsSliderBlock, TopProductsSliderItem,
    TopProductsSliderItemImage
} from "./TopProductsSliderStyles";

import type { TopProduct } from "types/types";

import { NavLink } from "react-router-dom";

interface ITopProductsSliderProps {
    width: number,
    topProducts: TopProduct[]
}

const TopProductsSlider: React.FC<ITopProductsSliderProps> = (props) => {
    
    const intervalRef = React.useRef<NodeJS.Timer | null>(null);

    const [current, setCurrent] = React.useState(0);

    const [arr, setArr] = React.useState<{ image: string, id: string }[] | null>(null);

    React.useEffect(() => {
        setArr(props.topProducts.map(topProduct => ({ 
                image: topProduct.imagesSrc[0],
                id: topProduct.id
            })
        ));

        return () => {
            setArr(null);
        }
    }, [props.topProducts, setArr])


    React.useEffect(() => {
        
        if (intervalRef.current !== null) {
            return;
        }
        
        intervalRef.current = setInterval(() => {
            if (!arr) {
                return;
            }
            setCurrent(prevCurrent=>{
                if (prevCurrent === arr.length-1) return 0;
                return prevCurrent+1;
            });
        }, 2000);



        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, [arr]);

    return (
        <>
            <TopProductsSliderWrapper width={props.width}>
                <TopProductsSliderBlock width={props.width}>
                    {
                        arr ? arr.map
                            (
                                (topProduct, index) => <TopProductsSliderItem key={index} width={props.width} current={current}>
                                        <NavLink to={`catalog/${topProduct.id}`}>
                                            <TopProductsSliderItemImage src={topProduct.image} alt="top-product"/>
                                        </NavLink>
                                    </TopProductsSliderItem>
                            ) : null
                    }
                </TopProductsSliderBlock>
            </TopProductsSliderWrapper>
        </>
    );
} 

export default TopProductsSlider;
