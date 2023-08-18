import styled, { keyframes } from "styled-components";

interface ITopProdutsSliderProps {
    width: number
}

interface ISliderItemProps extends ITopProdutsSliderProps {
    current: number
} 

export const TopProductsSliderWrapper = styled.div<ITopProdutsSliderProps>`
    margin: 0 auto;
    box-sizing: border-box;
    width: ${props => `${props.width - 40}px`};
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
    transition: 2s transform ease-in-out;
    transform: ${props => `translateX(-${100*props.current}%)`};
    
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    background: #000;
    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to top,rgba(0,0,0,.9), rgba(0,0,0,.8), rgba(0,0,0,.5), rgba(0,0,0,0));
    }
`;

export const TopProductsSliderItemImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`;

export const TopProductSliderName = styled.div`
    position: absolute;
    bottom: 2rem;
    font-size: 2.2rem;
    z-index: 22223;
    overflow: hidden;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    color: #fff;
    text-decoration: underline;
`;