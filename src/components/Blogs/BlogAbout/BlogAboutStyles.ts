import styled from "styled-components";

export const Wrapper = styled.section`
    color: #000;
    padding: 2rem 4rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;

    text-align: left;
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;

`;

export const Date = styled.p`
    text-align: right;
    font-size: 1.6rem;
    text-decoration: underline;
`;

export const BtnsWrapper = styled.div`
    display: flex;
    column-gap: 2rem;
`;