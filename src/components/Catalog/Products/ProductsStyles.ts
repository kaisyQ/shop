import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;

    @media only screen and (max-width: 768px){
        justify-content: center;
    }

    @media only screen and (max-width: 330px){
        
    }
`;
