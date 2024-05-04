import styled from "styled-components";


export const CommentHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export const CommentHeaderInfo = styled.div`
    @media only screen and (max-width: 400px) {
        flex-direction: column;
    }
`;



export const CommentInfo = styled.div`
    max-width: 200px;
    width: 100%;
    display: grid;
    grid-row-gap: 5px;
    justify-items: center;
`;

export const CreatedDate = styled.span`
    font-size: 14px;
    font-weight: 500;

    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media only screen and (max-width: 330px) {
        font-size: 12px;
    }
`;


export const CommentScore = styled.div`
    display: flex;
    gap: 5px;
    justify-content: flex-start;
`;


