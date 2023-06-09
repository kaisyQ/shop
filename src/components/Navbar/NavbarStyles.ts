import styled from "styled-components";

export const Wrapper = styled.nav`
    position: relative;

    padding: 1.5rem;
    column-gap: 2rem;
    margin-bottom: 3rem;

    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    color: #fff;
    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        border-bottom: .1rem solid #ab5f08;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const Item =  styled.div`
    padding: 1rem 2rem;
    font-size: 1.6rem;
    text-transform: capitalize;
    text-align: left;
    background: #fff;
    color: #000;
    border: .1rem solid #fff;
    border-radius: 30%;

    :hover{
        border: .1rem solid #000;
        border-radius: 0;
        transition: .6s ease-in-out;
    }
`;