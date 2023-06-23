import styled, { keyframes } from "styled-components";


const show = keyframes`
    from {
        max-height: 0;
    }
    to {
        max-height: 2000px;
    }
`

export const SearchResultWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: ${show} 2s ease-in-out forwards;
    overflow-y: hidden;
    max-height: 0;
`;