import styled from "styled-components";

interface ISpanProps {
    weight?: number
}

export const FooterWrapper = styled.footer`
    margin-top: 2rem;
    text-align: left;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    
    gap: 3rem;
    
    padding: 2rem ;


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
    align-items: flex-end;
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
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

export const SignInButton = styled.button`
    display: block;
    font-size: 1rem;
    text-decoration: underline;
    color: #000;
    
    transition: .2s ease-in-out;
    :hover {
        transform: scale(1.1);
    }   

    :not(:hover){
        transform: scale(1);
    }
`;

export const Copyright = styled.p`
  font-size: 1.4rem;
  color: #000;
;`

export const Span = styled.span<ISpanProps>`
    font-weight: ${props => props.weight};
`;