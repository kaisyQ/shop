import styled from "styled-components";

export const CommentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    border-top: .1rem solid #000;
    min-height: 200px;

    @media only screen and (max-width: 330px){
        flex-direction: column;
        max-width: 330px;
    }
`;

export const CommentInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    max-width: 200px;
    width: 100%;

    @media only screen and (max-width: 330px) {
        
    }
`;

export const AuthorName = styled.span`
    font-size: 2rem;
    font-weight: 400;
    width: 100%;
    word-wrap: break-word;
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
    font-size: 2rem;
`;

export const CommentScore = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ScoreItem = styled.div`

`;

export const CommentReview = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;

    @media only screen and (max-width: 330px) {
        max-width: 330px;
    }
`;


