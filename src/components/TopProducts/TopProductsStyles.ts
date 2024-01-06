import styled from "styled-components";

export const TopProductsWrapper = styled.div`
    width: 100%;
`;

export const TopProductsHeader = styled.header`
    margin: 20px 0;
`;

export const TopProductsTitle = styled.h2`
    padding-left: 10px;
    font-size: 40px;
    text-align: center;
    font-weight: 500;
    
    @media only screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media only screen and (max-width: 330px) {
        font-size: 20px;
    }
`;

export const TopProductsMain = styled.main`

    @media only screen and (max-width: 450px) {
        display: none;
    }

    margin-top: 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;