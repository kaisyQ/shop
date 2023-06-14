import styled from "styled-components";

export const ProductEditWrapper = styled.div`
`;


export const EditForm = styled.form`
    display: flex;
    justify-content: center;
    gap: 2rem;
    
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`;

export const BlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 3rem;
    max-width: 48%;

    @media only screen and (max-width: 768px){
        max-width: 100%;
    }

`;

export const FormControl = styled.div`
    text-align: left;
    padding-left: 3rem;
`;

export const BtnWrapper = styled.div`
    text-align: left;
`;