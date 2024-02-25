import styled from "styled-components";


export const CommentsWrapper = styled.div`
    padding: 0 20px;
    text-align: center;
    width: 100%;

    @media only screen and (max-width: 330px) {
        max-width: 330px;
    }
`;

export const CommentsHeader = styled.header`
    margin-top: 10px;
    
`;

export const CommentsTitle = styled.h2`
    font-size: 40px;
    font-weight: 500;

    @media only screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media only screen and (max-width: 330px) {
        font-size: 20px;
    }
`;  

export const CommentsSubtitle = styled.h3`
    margin-top: 10px;
    font-size: 30px;
    font-weight: 400;
    

    @media only screen and (max-width: 768px) {
        font-size: 25px;
    }

    @media only screen and (max-width: 330px) {
        font-size: 20px;
    }
`;

export const CommentConroller = styled.div`
    margin-top: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;


export const Filter = styled.div`
    padding: 20px;
    
    
    @media only screen and (max-width: 330px) {
        padding: 0;
    }

`;

export const Star = styled.div`
    cursor: pointer;
`;

export const CommentsBlock = styled.main`
    display: flex;
    flex-direction: column;
`;

export const TotalStarRating = styled.div`
    display: flex;
    gap: 2px;
`;