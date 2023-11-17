import styled from "styled-components";

interface IImage {
    width?: string
}

export const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 48%;
    
    @media only screen and (max-width: 1200px) {
        display: flex;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }

    @media only screen and (max-width: 330px) {
        display: none;
    }
`;

export const ImageRow = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 2rem;
`

export const ImageWrapper = styled.div<IImage>`
    overflow: hidden;
    max-width: ${props => props.width || '48%'};
`;