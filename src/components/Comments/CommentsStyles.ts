import styled from "styled-components";


interface ISelectItemProps {
    show?: boolean;
}

export const CommentsWrapper = styled.div`
    text-align: center;
    width: 100%;
`;

export const CommentsHeader = styled.header`
    margin-top: 1rem;
`;

export const CommentsTitle = styled.h2`
    font-size: 5rem;
    font-weight: 600;
`;

export const CommentsSubtitle = styled.h3`
    font-size: 3rem;
    font-weight: 500;
`;

export const CommentConroller = styled.div`
    margin-top: 1rem;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CreateButton = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.3rem 2rem;
    background-color: #000;
    color: #fff;
    border-radius: .5rem;
    font: inherit;
    font-size: 2rem;
`;

export const Filter = styled.div`
    padding: 2rem;
`;

export const Star = styled.div`
    cursor: pointer;
`;

export const Stars = styled.div`
    display: flex;
    gap: 1rem;
`;

export const CommentsBlock = styled.main`
    overflow-y: scroll;
    max-height: 600px;
`;