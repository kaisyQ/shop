import styled from "styled-components"


interface ISliderBlockProps {
    width: string
}

export const Slider = styled.div<ISliderBlockProps>`
    max-width: ${props => props.width};
    max-height: ${props => props.width};
    overflow-x: scroll;
    background-color: #000;
`;

export const Block = styled.div<ISliderBlockProps>`
    width: ${props => props.width};
    display: flex;
    z-index: 1;
    transition: .2s ease-in-out;
    align-items: center;
`;

export const SliderItem = styled.img<ISliderBlockProps>`
    display: block;
    max-width: ${props => props.width};
    max-height: ${props => props.width};
    transition: .6s ease-in-out;
`;