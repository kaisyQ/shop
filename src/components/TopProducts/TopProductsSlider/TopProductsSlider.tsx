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

    const [current, setCurrent] = React.useState(1);

    const [arr, setArr] = React.useState<string[]>(["red",  "yellow", "green",  "pink"]);

    React.useEffect(() => {
        
        if (intervalRef.current !== null) {
            return;
        }
        
        intervalRef.current = setInterval(() => {
            setArr(prevArr => {
                const [first, ...tArr] = prevArr;
                return [...tArr, first]
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
                        arr.map((color, index) => <TopProductsSliderItem current={current} key={index} width={props.width} clr={color}>
                        </TopProductsSliderItem>)
                    }
                </TopProductsSliderBlock>
            </TopProductsSliderWrapper>
        </>
    );
} 

export default TopProductsSlider;
