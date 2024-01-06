import React from "react";

import { 
    FooterWrapper, OurContacts, Title, Information, 
    LinksContainer, Links, Copyright,
    Span, ContactTitle, MainLinks,
    AboutSiteAndCompanyLinkList, AboutSiteAndCompanyLinkListItem
} from "./FooterStyles";

import { NavLink } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';

import { Button } from "@nextui-org/react";


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
                            <Button className="dark" color="primary" variant="faded">
                                <NavLink to={'/terms'}>
                                    Terms of Service
                                </NavLink>
                            </Button>
                        </AboutSiteAndCompanyLinkListItem>
                    
                    </AboutSiteAndCompanyLinkList>

                </MainLinks>
                <LinksContainer>
                    <Links>
                        <NavLink 
                            to={"https://instagram.com/bm_furniture_finds?igshid=MmIzYWVlNDQ5Yg=="}>
                                <Icon.Instagram size={'20px'}/>
                        </NavLink>
                        <NavLink to={"facebook-path"}><Icon.Facebook size={'20px'}/></NavLink>
                        <NavLink to={"whatapp-path"}><Icon.Whatsapp size={'20px'}/></NavLink>
                    </Links>
                    <Copyright>
                    © { new Date().getFullYear() } BM-furniture-finds. All rights reserved.
                    </Copyright>
                </LinksContainer>
            </FooterWrapper>
        </>
    );
}

export default Footer;