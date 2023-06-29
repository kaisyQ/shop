import React from "react";

import { 
    TopProductsSliderWrapper, TopProductsSliderBlock, TopProductsSliderItem,
    TopProductsSliderItemImage
} from "./TopProductsSliderStyles";

interface ITopProductsSliderProps {
    width: number
}

const TopProductsSlider: React.FC<ITopProductsSliderProps> = (props) => {
    
    const intervalRef = React.useRef<NodeJS.Timer | null>(null);

    const [current, setCurrent] = React.useState(0);

    const [arr, setArr] = React.useState<string[]>(["red",  "yellow", "green",  "pink"]);


    React.useEffect(() => {
        
        if (intervalRef.current !== null) {
            return;
        }
        
        intervalRef.current = setInterval(() => {
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
    }, []);

    return (
        <>
            <TopProductsSliderWrapper width={props.width}>
                <TopProductsSliderBlock width={props.width}>
                    {
                    arr.map
                        ((itm, index) => <TopProductsSliderItem key={index} width={props.width} clr={itm} current={current}/>
                    )}
                </TopProductsSliderBlock>
            </TopProductsSliderWrapper>
        </>
    );
} 

export default TopProductsSlider;
