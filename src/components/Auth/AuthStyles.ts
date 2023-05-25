import styled from "styled-components";

export const LoginWrapper = styled.form`
    padding: 2rem;
    gap: 3rem;
    text-align: left;
    max-width: 40rem;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
    font-weight: 500;
    display: inline-flex;
    color: #b42525;
    font-style: italic;

    position:relative;
    
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
    margin: 3rem 0;
`;

export const AuthFooterWrapper = styled.div`
    
`;

export const FooterTextWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    ::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        border-bottom: .1rem solid black;
        z-index: -1;
    }
`;

export const FooterText = styled.p`
    font-size: 1.8rem;
    letter-spacing: .1rem;
    text-align: center;
    background: white;
    font-style: italic;

`;

export const BtnWrapper = styled.div`
    padding: 2rem;
`;