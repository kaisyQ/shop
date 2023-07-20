import styled from "styled-components"


interface ISliderBlockProps {
    width: string
}

export const Slider = styled.div<ISliderBlockProps>`
    max-width: ${props => props.width};
    height: ${props => props.width};
    aspect-ratio: 1/1;
    overflow-x: scroll;
`;

export const Block = styled.div<ISliderBlockProps>`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    z-index: 1;
    transition: .2s ease-in-out;

`;

export const SliderItem = styled.img<ISliderBlockProps>`
    display: block;
    max-width: ${props => props.width};
    max-height: ${props => props.width};
    object-fit: fill;
    transition: .6s ease-in-out;
`;