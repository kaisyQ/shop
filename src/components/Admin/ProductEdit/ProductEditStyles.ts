import styled from "styled-components";

export const ProductEditWrapper = styled.div`
`;

export const BlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 3rem;
    max-width: 48%;

    @media only screen and (max-width: 600px){
        max-width: 100%;
    }

`;

export const EditForm = styled.form`
    display: flex;
    gap: 2rem;
    
    @media only screen and (max-width: 600px){
        flex-direction: column;
    }
`;

export const InputsWrapper = styled.div`
    display: flex;
    column-gap: 2rem;
`;

export const InputWrapper = styled.div`

`;

export const ImagesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const ImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 40%;
    
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Image = styled.img`
    display: block;
    width: 100%;
`;

export const FormControl = styled.div`
    text-align: left;
    padding-left: 3rem;
`;

export const BtnWrapper = styled.div`
    text-align: left;
`;