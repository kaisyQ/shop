import React from "react";

import { 
    CounterWrapper,
    BlockWrapper,
    ValueWrapper
} from "./CounterStyles";


interface ICounterProps {
    productCount: number,
    size?: string 
}


const Counter: React.FC<ICounterProps> = ({ productCount, size }) => {
    
    const [ count, setCount ] = React.useState(1);


    const minusClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (count === 1) return;
        setCount((prev) => prev - 1);
    } 

    const plusClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (count === productCount) return;
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <CounterWrapper>
                <BlockWrapper size={size} onClick={minusClick}>&ndash;</BlockWrapper>
                <ValueWrapper size={size}>{ count }</ValueWrapper>
                <BlockWrapper size={size} onClick={plusClick}>&#43;</BlockWrapper>
            </CounterWrapper>
        </>
    );
}

export default Counter;