import styled, { keyframes } from "styled-components";


const show = keyframes`
    0% {
        max-height: 0;
    }
    100% {
        max-height: 2000px;
    }
`

export const SearchResultWrapper = styled.div`
    padding: 4rem 0;
`;

export const ResultItemsWrapper = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    animation: ${show} 3s linear forwards;
    overflow-y: hidden;
    max-height: 0;
`;

export const SearchResultController = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
`;
