import styled from "styled-components";

interface ISpanProps {
    weight?: number,
    underline?: boolean
}

export const FooterWrapper = styled.footer`
    margin-top: 4rem;
    text-align: left;
    
    background-color: #000;
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    gap: 3rem;
    
    padding: 2rem;


    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
    width: 100%;

    @media only screen and (max-width: 768px){
        align-items: center;
        justify-content: space-around;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 5rem;
    width: 100%;

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
    
    @media only screen and (max-width: 330px) {
        gap: 3rem;
    }
`;

export const OurContacts = styled.div`
    width: 100%;
`;

export const Title = styled.h3`
    
`;

export const Information = styled.p`
    width: 100%;
    margin-top: .5rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        margin-top: 1rem;
    }
`;

export const SignInButtonWrapper = styled.div`
    width: 100%;
`;

export const SignInButton = styled.button`
    display: block;
    font-size: .6rem;
    text-decoration: underline;
    color: #fff;
    float: right;
    font: inherit;
    
    transition: .2s ease-in-out;
    :hover {
        transform: scale(1.1);
    }   

    :not(:hover){
        transform: scale(1);
    }

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Copyright = styled.p`
    text-align: right;
    width: 100%;
    font-size: 1.4rem;
    color: inherit;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
;`

export const ContactTitle = styled.span<ISpanProps>`
    text-align: left;
    font-weight: ${props => props.weight};
    @media only screen and (max-width: 300px) {
        text-align: center;
        width: 100%;
    }
`;

export const Span = styled.span<ISpanProps>`
    word-break: break-all;
    text-align: right;
    text-decoration: ${props => props.underline ? 'underline' : null};

    @media only screen and (max-width: 300px) {
        text-align: center;
        width: 100%;
    }
`;


export const MainLinks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const AboutSiteAndCompanyLinkList = styled.ul`
    list-style: inside;
`;

export const AboutSiteAndCompanyLinkListItem = styled.li`
    
    :hover {
        color: #cecece;
        text-decoration: underline;
    }
`;