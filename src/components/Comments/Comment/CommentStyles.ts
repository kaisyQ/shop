import styled from "styled-components";

export const CommentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-top: 1px solid #000;
    padding: 10px;
    min-height: 240px;
    height: auto;

    @media only screen and (max-width: 768px){
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

export const AuthorName = styled.span`
    font-size: 20px;
    font-weight: 400;
    word-wrap: break-word;

    @media only screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 330px) {
        font-size: 16px;
    }
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


export const CommentText = styled.p`
    text-align: left;
    font-size: 20px;
    height: 100%;
    text-justify: auto;

    @media only screen and (max-width: 330px) {
        font-size: 16px;
    }
`;

export const CommentScore = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-start;
`;

export const ScoreItem = styled.div`

`;

export const CommentReview = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;

    @media only screen and (max-width: 768px) {
        align-items: center;
    }
`;


