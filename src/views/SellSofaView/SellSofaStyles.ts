import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: left;

    @media only screen and (max-width: 768px){
    }
    
`;

export const Subtitle =  styled.h3`
    margin-left: 30px;
    margin-top: 30px;
    font-size: 25px;
    display: flex;
    align-items: center;
    column-gap: 20px;
`;

export const FormWrapper = styled.form`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InputsWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;
    
    @media only screen and (max-width: 500px){
        flex-direction: column;
    }
`;

export const ButtonWrapper = styled.div`
    
`;


export const FormControl = styled.button`
    
`;


export const IconWrapper = styled.div`
`

export const UploadBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const UploadBlockTitle = styled.h3`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
`;

export const UploadBlock = styled.label`
    border: 1px solid #000;
    padding: 10px;
    max-width: 100px;

    cursor: pointer;

    &:hover {
        outline: 1px solid #000;
    }
`;

