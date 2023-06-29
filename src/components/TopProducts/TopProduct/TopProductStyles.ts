import styled from "styled-components";

export const TopProductWrapper = styled.div`
    width: 23%;
    aspect-ratio: 1/1;
    background-color: #000;

    @media only screen and (max-width: 768px) {
        width: 40%;
    }
`;

export const TopProductImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;