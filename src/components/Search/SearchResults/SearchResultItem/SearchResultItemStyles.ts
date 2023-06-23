import styled from "styled-components";

export const SearchResultItemWrapper = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border: .1rem solid #000;
    border-radius: 1rem;
    color: #000;
    font-size: 2rem;
`;

export const ImageWrapper = styled.div`
    width: 8rem;
    height: 8rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const NumberBlock = styled.p`
    width: 3rem;
    text-align: center;
`;

export const NameBlock = styled.p`
    text-align: left;
    flex-grow: 1;
    overflow: hidden;
`;

export const RightArrrow = styled.div`
    display: flex;
    align-items: center;
`;