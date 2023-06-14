import styled from "styled-components";


export const ImageWrapper = styled.img`
    width: 100%;
    object-fit: cover;
    transform: scale(100%);
    transition: .3s ease-in-out;
    aspect-ratio: 1/1;
    cursor: pointer;
    :hover {
        transform: scale(120%);
        transition: .3s ease-in-out;
    }

`;