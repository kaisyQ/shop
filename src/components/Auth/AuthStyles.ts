import styled from "styled-components";

export const LoginWrapper = styled.form`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    text-align: left;
    max-width: 50rem;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    color: #b42525;
    font-style: italic;
    width: 100%;
    position: relative;
    
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: .1rem solid #000;
    }
`
export const InputWrapper = styled.div`
`;


export const BtnWrapper = styled.div`
`;