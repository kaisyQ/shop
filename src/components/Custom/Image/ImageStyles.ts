import styled from "styled-components";


export const ImageStyle = styled.img`
    width: 100%;
    object-fit: cover;
    transform: scale(100%);
    transition: .3s ease-in-out;
    
    :hover {
        transform: scale(120%);
        transition: .3s ease-in-out;
    }

`;