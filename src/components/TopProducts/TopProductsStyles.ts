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
    font-family: 'Jacques Francois Shadow', cursive;
    
    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
    }

    @media only screen and (max-width: 330px) {
        font-size: 2rem;
    }
`;

export const TopProductsMain = styled.main`

    @media only screen and (max-width: 450px) {
        display: none;
    }

    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    justify-content: sp;
    flex-wrap: wrap;
    width: 100%;
`;