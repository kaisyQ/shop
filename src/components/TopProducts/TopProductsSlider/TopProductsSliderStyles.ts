import styled from "styled-components";

export const TopProductsSliderWrapper = styled.div`
    max-width: 300px;
    aspect-ratio: 1/1;
    background-color: #000;
    overflow-x: scroll;
`;

export const TopProductsSliderBlock = styled.div`
    display: flex;
    width: calc(300px*4);
    height: 100%;
`;

export const TopProductsSliderItem = styled.div<any>`
    max-width: 300px;
    width: 100%;
    height: 100%;
    background-color: ${props => props.clr};
`;

export const TopProductsSliderItemImage = styled.img`

`;