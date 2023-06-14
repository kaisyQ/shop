import styled from "styled-components"


interface ISliderBlockProps {
    width: string
}

export const Wrapper = styled.div`
    max-height: 30rem;
`;

export const Slider = styled.div`
    max-height: 32rem;
    overflow-x: scroll;
    position: relative;
`;

export const Block = styled.div<ISliderBlockProps>`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    column-gap: 1rem;
    z-index: 1;
    transition: .2s ease-in-out;
`;

export const SliderItem = styled.img`
    display: block;
    max-width: 30rem;
    min-height: 30rem;
    object-fit: cover;
    transition: .6s ease-in-out;
`;