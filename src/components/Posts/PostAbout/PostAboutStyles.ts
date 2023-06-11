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

export const Title = styled.div`
    font-size: 3.2rem;
    position: relative;
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