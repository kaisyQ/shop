import styled from "styled-components";

export const TopProductsSliderWrapper = styled.div`
    display: none;
    @media only screen and (max-width: 330px) {
        display: block;
    }

    width: 100%;
    max-width: 330px;
    aspect-ratio: 1/1;
    background-color: #000;
    overflow-x: scroll;
`;

export const TopProductsSliderBlock = styled.div`
    display: flex;
    width: calc(330px*4);
    height: 100%;
`;

export const TopProductsSliderItem = styled.div<any>`
    max-width: 330px;
    width: 100%;
    height: 100%;
    background-color: ${props => props.clr};
`;

export const TopProductsSliderItemImage = styled.img`

`;