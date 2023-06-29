import styled from "styled-components";

export const TopProductsWrapper = styled.div`
    width: 100%;
`;

export const TopProductsHeader = styled.header`
    margin: 2rem 0;
`;

export const TopProductsTitle = styled.h2`
    padding-left: 1rem;
    font-size: 4rem;
    text-align: center;
    font-weight: 500;
    text-decoration: underline;
`;

export const TopProductsMain = styled.main`

    @media only screen and (max-width: 330px) {
        display: none;
    }

    margin-top: 2rem;
    display: flex;
    gap: .5rem;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;