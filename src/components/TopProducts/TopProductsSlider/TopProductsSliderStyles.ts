import styled, { keyframes } from "styled-components";

interface ITopProdutsSliderProps {
    width: number
}

interface ISliderItemProps extends ITopProdutsSliderProps {
    clr: string,
} 

export const sliderMove = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {    
        transform: translateX(-100%);
        opacity: 0;
    }
`

export const TopProductsSliderWrapper = styled.div<ITopProdutsSliderProps>`
    box-sizing: border-box;
    width: ${props => `${props.width - 40}px`};
    
    aspect-ratio: 1/1;
    background-color: #000;
    overflow: hidden;
`;

export const TopProductsSliderBlock = styled.div<ITopProdutsSliderProps>`
    display: flex;
    width: ${props => `${(props.width - 40)*4}px`};
    height: 100%;
`;

export const TopProductsSliderItem = styled.div<ISliderItemProps>`
    max-width: ${props => `${props.width - 40}px`};
    width: 100%;
    height: 100%;
    background-color: ${props => props.clr};
    animation: ${sliderMove} 2s ease-in-out;
    animation-iteration-count: infinite;
`;

export const TopProductsSliderItemImage = styled.img`
    display: block;
`;