import styled from "styled-components";


export const FooterWrapper = styled.footer`
    margin-top: 2rem;
    text-align: left;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    
    gap: 3rem;
    
    padding: 0 2rem ;


    @media only screen and (max-width: 768px){
        max-width: 768px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media only screen and (max-width: 330px){
        max-width: 330px;
        flex-direction: column;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Links = styled.div`
    display: flex;
    gap: 2rem;
`;

export const OurContacts = styled.div`
    
`;

export const Title = styled.h3`
    
`;

export const Information = styled.p`
    margin-top: .5rem;
    padding-left: 1rem;
    text-decoration: underline;
`;

export const SignInButton = styled.button`
    display: block;
    font-size: 1rem;
    text-decoration: underline;
    
    transition: .2s ease-in-out;
    :hover {
        color: #c74646;
        transform: scale(1.05);
    }   

    :not(:hover){
        color: #000;
        transform: scale(1);
    }
`;