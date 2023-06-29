import styled, { keyframes } from "styled-components";

interface ITopProdutsSliderProps {
    width: number
}

interface ISliderItemProps extends ITopProdutsSliderProps {
    clr: string,
    current: number
} 

export const TopProductsSliderWrapper = styled.div<ITopProdutsSliderProps>`
    box-sizing: border-box;
    width: ${props => `${props.width - 40}px`};
    aspect-ratio: 1/1;
    overflow: hidden;
`;

export const TopProductsSliderBlock = styled.div<ITopProdutsSliderProps>`
    width: ${props => `${(props.width - 40)*4}px`};
    height: 100%;
    display: flex;
`;

export const TopProductsSliderItem = styled.div<ISliderItemProps>`
    max-width: ${props => `${props.width - 40}px`};
    width: 100%;
    height: 100%;
    background-color: ${props => props.clr};
    transition: 2s transform ease-in-out;
    transform: ${props => `translateX(-${100*props.current}%)`};
`;

export const TopProductsSliderItemImage = styled.img`
    display: block;
`;