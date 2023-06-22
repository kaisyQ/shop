import styled from "styled-components";

export const Wrapper = styled.section`
    color: #000;
    padding: 2rem 4rem;
    background: #fff;
    text-align: left;
`;

export const ImageWrapper = styled.div`

`;

export const Image = styled.img`
    text-align: center;
    display: block;
    margin: 0 auto;
    margin-top: 4rem;

`;

export const Date = styled.p`
    text-align: right;
    font-size: 1.6rem;
    text-decoration: underline;
    margin-top: 4rem;
`;

export const Title = styled.div`
    font-size: 3.2rem;
    position: relative;
    white-space: normal;
    font-weight: 500;

    @media only screen and (max-width: 330px) {
        font-size: 2.4rem;
    }
`;


export const Text = styled.p`
    margin-top: 4rem;
    font-size: 2rem;
    text-indent: 5rem;
    word-spacing: .5rem;
    line-height: 3rem;
    text-align: justify;
    white-space: normal;

    @media only screen and (max-width: 330px) {
        font-size: 1.6rem;
    }
`;