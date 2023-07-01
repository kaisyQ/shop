import styled from "styled-components";

export const InputsWrapper = styled.div`
    display: flex;
    gap: 2rem;

    @media only screen and (max-width: 360px){
        width: 100%;
        flex-direction: column;
    }
`;

export const InputWrapper = styled.div`

`;

export const Label = styled.label`
    display: flex;
    gap: 1rem;
    font-size: 1.6rem;
    align-items: center;
    min-width: 200px;
`;

export const Checkbox = styled.input`
    width: 2rem;
    height: 2rem;
`;