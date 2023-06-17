import styled from "styled-components";

export const AddCommentModalWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    padding: 3rem;
    max-width: 500px;
    width: 100%;
    background-color: #000;
    color: #fff;

    display: flex;
    flex-direction: column;
    gap: 3rem;
`;


export const AddCommentModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;


export const AddCommentModalTitle = styled.div`
    font-size: 2.4rem;
`;


export const AddCommentModalExit = styled.button`
    color: #fff;
`;

export const AddCommentForm = styled.form`
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const StarsWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

export const StarsTitle = styled.h3`
    font-size: 1.8rem;
`;

export const Input = styled.input`
    width: 100%;
    color: #fff;
    border: 0;
    outline: 0;
    padding: 2rem;
    font-size: 1.8rem;
    font-family: inherit;
    border-bottom: .1rem solid #fff;
`

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 20rem;
    color: #fff;
    border: 0;
    outline: 0;
    padding: 2rem;
    font-size: 1.8rem;
    font-family: inherit;
    border: .1rem solid #fff;
    resize: none;
`