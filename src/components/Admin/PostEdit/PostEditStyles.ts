import styled from "styled-components";

export const UserEditWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
`;

export const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 3rem;
`;

export const InputWrapper = styled.div`
    padding: 1rem;
`;

export const LabelWrapper = styled.label`
    display: inline-flex;
    margin: 2rem 0;
`;
export const LabelSpan = styled.span`
    padding: 2rem 3rem;
    border: .1rem solid #000;
    color: #fff;
    background-color: #000;
    transition: .3s ease-in-out;
    cursor: pointer;

    :hover {
        transform: scale(1.05);
        background-color: #fff;
        color: #000;
    }
`;

export const EditFormControl = styled.div`
    text-align: left;
    padding-left: 3rem;
`;

