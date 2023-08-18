import styled from "styled-components";


export const CommentsWrapper = styled.div`
    padding: 0 2rem;
    text-align: center;
    width: 100%;

    @media only screen and (max-width: 330px) {
        max-width: 330px;
    }
`;

export const CommentsHeader = styled.header`
    margin-top: 1rem;
    
`;

export const CommentsTitle = styled.h2`
    font-size: 4rem;
    font-weight: 500;

    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
    }

    @media only screen and (max-width: 330px) {
        font-size: 2rem;
    }
`;

export const CommentsSubtitle = styled.h3`
    margin-top: 1rem;
    font-size: 3rem;
    font-weight: 400;
    

    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 330px) {
        font-size: 2rem;
    }
`;

export const CommentConroller = styled.div`
    margin-top: 1rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CreateButton = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.3rem 2rem;
    background-color: #000;
    color: #fff;
    font: inherit;
    font-size: 2rem;

    transition: .3s ease-in-out;
    
    :hover {
        -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, .2);
    }


    @media only screen and (max-width: 330px) {
        font-size: 1.6rem;
        padding: 1rem 1.7rem;
    }
`;

export const Filter = styled.div`
    padding: 2rem;
    
    
    @media only screen and (max-width: 330px) {
        padding: 0;
    }

`;

export const Star = styled.div`
    cursor: pointer;
`;

export const CommentsBlock = styled.main`
    overflow-y: scroll;
    max-height: 600px;
`;

export const TotalStarRating = styled.div`

`;