import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    column-gap: 3rem;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 3rem;
    position: relative;
    text-decoration: underline;
    white-space: normal;
`;


export const Text = styled.p`
    position: relative;
    
    font-size: 2rem;
    text-indent: 5rem;
    word-spacing: .5rem;
    line-height: 3rem;
    text-align: justify;
    white-space: normal;
`;

export const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    
    width: 5rem;
    height: 5rem;

    :hover {
        background: #b42525;
        color: #fff;
        transition: .3s ease-in-out;
    }

    :not(:hover) {
        background: #fff;
        color: #b42525;
        transition: .3s ease-in-out;
    }
`;