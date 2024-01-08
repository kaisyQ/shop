import styled from "styled-components";

export const OkMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 30px;
`;

export const OkMessageText = styled.p`
    font-size: 35px;
`;

export const OkMessageLogo = styled.div`
`;

export const BackHomeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    font-family: inherit;
    :hover {
        border-radius: 0;
        transition: border-radius .3s ease-in-out;
    }
    transition: border-radius .3s ease-in-out;
`;