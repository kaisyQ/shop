import styled from "styled-components";

export const OkMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 3rem;
`;

export const OkMessageText = styled.p`
    font-size: 3.5rem;
`;

export const OkMessageLogo = styled.div`
`;

export const BackHomeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background-color: #000;
    color: #fff;
    border-radius: .5rem;
    
    :hover {
        border-radius: 0;
        transform: scale(1.1);
        transition: .3s ease-in-out;
    }
    transition: .3s ease-in-out;
`;