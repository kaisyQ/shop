import React from "react";

import { 
    FooterWrapper, OurContacts, Title, Information, LinksContainer, Links, SignInButton
} from "./FooterStyles";

import { NavLink } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';



const Footer: React.FC = () => {
    return (
        <>
            <FooterWrapper>
                <OurContacts>
                    <Title>Our Contacts</Title>
                    <Information>contact@gmail.com</Information>
                    <Information>8(228)(228)</Information>
                </OurContacts>
                    <LinksContainer>
                        <Links>
                            <Icon.Instagram size={'2rem'}/>
                            <Icon.Facebook size={'2rem'}/>
                            <Icon.Whatsapp size={'2rem'}/>
                        </Links>
                        <NavLink to={'/auth'}>
                            <SignInButton>Sign into your working account</SignInButton>
                        </NavLink>
                    </LinksContainer>
            </FooterWrapper>
        </>
    );
}

export default Footer;