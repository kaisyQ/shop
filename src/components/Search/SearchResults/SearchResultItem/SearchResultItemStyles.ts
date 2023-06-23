import styled from "styled-components";

export const SearchResultItemWrapper = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    padding: 3rem;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
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