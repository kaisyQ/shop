import styled from "styled-components";

export const ImagesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const ImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    width: 40%;
    
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Image = styled.img`
    display: block;
    aspect-ratio: 1/1;
    object-fit: cover;
`;

export const LabelSpan = styled.span`
    padding: 1rem 2rem;

    background-color: #000;
    border: .1rem solid #000;
    color: #fff;

    :hover {
        background-color: #fff;
        color: #000;
        transform: scale(105%);
        transition: .3s ease-in-out;
    }
    
    transition: .3s ease-in-out;
    cursor: pointer;
`;