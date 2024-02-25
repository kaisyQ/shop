import styled from "styled-components";

interface ISpanProps {
    weight?: number,
    underline?: boolean
}

export const FooterWrapper = styled.footer`
    background-color: #000;
    margin-top: 40px;

`;

export const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
    
    background-color: #000;
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    gap: 30px;

    width: 100%;
    
    padding: 20px;


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
    gap: 20px;
    width: 100%;

    @media only screen and (max-width: 768px){
        align-items: center;
        justify-content: space-around;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 50px;
    width: 100%;

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
    
    @media only screen and (max-width: 330px) {
        gap: 30px;
    }
`;

export const OurContacts = styled.div`
    width: 100%;
`;

export const Title = styled.h3`
    
`;

export const Information = styled.p`
    width: 100%;
    margin-top: 5px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        margin-top: 10px;
    }
`;

export const Copyright = styled.p`
    text-align: right;
    width: 100%;
    font-size: 14px;
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
    gap: 30px;
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