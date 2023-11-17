import styled from "styled-components";

export const SearchResultItemWrapper = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), 0 0 5px 0 rgba(0, 0, 0, 0.2) inset;
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
    text-align: left;
    width: 100%;
`;


export const RightBlock = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
    
    @media only screen and (max-width: 450px){
        flex-direction: column;
    }
`;