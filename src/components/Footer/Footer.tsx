import React from "react";

import { 
    FooterWrapper, OurContacts, Title, Information, 
    LinksContainer, Links, SignInButton, Copyright,
    Span, SignInButtonWrapper, ContactTitle, MainLinks,
    AboutSiteAndCompanyLinkList, AboutSiteAndCompanyLinkListItem
} from "./FooterStyles";

import { NavLink } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';


const Footer: React.FC = () => {
    return (
        <>
            <FooterWrapper>
                <MainLinks>
                
                    <OurContacts>
                        <Title>Contacts</Title>
                        <Information>
                            <ContactTitle weight={500}>Our Email:</ContactTitle>
                            <Span underline={true}>
                                <a href="mailto:BM.unique.furniture.finds@gmail.com">
                                    BM.unique.furniture.finds@gmail.com
                                </a>
                            </Span>
                        </Information>
                        <Information>
                            <ContactTitle weight={500}>Our Phone:</ContactTitle>
                            <Span underline={true}>
                                <a href="tel:+16475615320">+16475615320</a>
                            </Span>
                        </Information>
                        {
                            //<Information>
                            //    <ContactTitle weight={500}>Our Address:</ContactTitle>
                            //    <Span underline={false}>
                            //        21 Raleigh avenue
                            //    </Span>
                            //</Information>
                        }
                    </OurContacts>

                    <AboutSiteAndCompanyLinkList>
                    
                        <AboutSiteAndCompanyLinkListItem>
                            <NavLink to={'/terms'}>
                                Terms of Service
                            </NavLink>
                        </AboutSiteAndCompanyLinkListItem>
                    
                    </AboutSiteAndCompanyLinkList>

                </MainLinks>
                <LinksContainer>
                    <Links>
                        <NavLink 
                            to={"https://instagram.com/bm_furniture_finds?igshid=MmIzYWVlNDQ5Yg=="}>
                                <Icon.Instagram size={'2rem'}/>
                        </NavLink>
                        <NavLink to={"facebook-path"}><Icon.Facebook size={'2rem'}/></NavLink>
                        <NavLink to={"whatapp-path"}><Icon.Whatsapp size={'2rem'}/></NavLink>
                    </Links>
                    <Copyright>
                    © { new Date().getFullYear() } BM-furniture-finds. All rights reserved.
                    </Copyright>
                    <SignInButtonWrapper>
                        <NavLink to={'/auth'}>
                            <SignInButton>Sign into your working account</SignInButton>
                        </NavLink>
                    </SignInButtonWrapper>
                </LinksContainer>
            </FooterWrapper>
        </>
    );
}

export default Footer;