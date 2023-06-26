import styled from "styled-components";

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
    transition: 1s ease-in-out;
`;

export const TopProductsSliderItemImage = styled.img`
    display: block;
`;