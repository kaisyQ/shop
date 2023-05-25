import React from "react";

import { 
    FooterWrapper, OurContacts, Title, Information, LinksContainer
} from "./FooterStyles";

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
                    <Icon.Instagram size={'2rem'}/>
                    <Icon.Facebook size={'2rem'}/>
                    <Icon.Whatsapp size={'2rem'}/>
                </LinksContainer>
            </FooterWrapper>
        </>
    );
}

export default Footer;