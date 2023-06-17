import styled from "styled-components";

export const CommentWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2rem;
    padding: 3rem;
    border-top: .1rem solid #000;
    min-height: 200px;
`;

export const CommentInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`;

export const AuthorName = styled.span`
    font-size: 2rem;
    font-weight: 500;
`;

export const CreatedDate = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
`;

export const AuthorCircle = styled.div`
    width: 7rem;
    height: 7rem;
    line-height: 7rem;
    color: #fff;
    background-color: #000;
    border-radius: 50%;
    font-size: 2rem;
`;

export const CommentText = styled.p`
    text-align: left;
    font-size: 2.2rem;
`;

export const CommentScore = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ScoreItem = styled.div`

`;

export const CommentReview = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;


