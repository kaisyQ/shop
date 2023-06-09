import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
`;


export const PreviewImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Slogan = styled.p`
    margin-left: 2rem;
    font-size: 2rem;
`;