import React from "react";

import { 
    CounterWrapper,
    BlockWrapper,
    ValueWrapper
} from "./CounterStyles";


interface ICounterProps {
    productCount: number
}


const Counter: React.FC<ICounterProps> = ({ productCount }) => {
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
                <BlockWrapper onClick={minusClick}>&ndash;</BlockWrapper>
                <ValueWrapper>{ count }</ValueWrapper>
                <BlockWrapper onClick={plusClick}>&#43;</BlockWrapper>
            </CounterWrapper>
        </>
    );
}

export default Counter;