import styled from "styled-components";

export const CommentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-top: .1rem solid #000;
    min-height: 200px;

    @media only screen and (max-width: 768px){
        flex-direction: column;
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

    @media only screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const CreatedDate = styled.span`
    font-size: 1.4rem;
    font-weight: 500;

    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const AuthorCircle = styled.div`
    width: 7rem;
    height: 7rem;
    line-height: 7rem;
    color: #fff;
    background-color: #000;
    border-radius: 50%;
    font-size: 2rem;
    @media only screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const CommentText = styled.p`
    text-align: left;
    font-size: 2rem;
    height: 100%;
    @media only screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const CommentScore = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
`;

export const ScoreItem = styled.div`

`;

export const CommentReview = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;

    @media only screen and (max-width: 768px) {
        align-items: center;
    }
`;


