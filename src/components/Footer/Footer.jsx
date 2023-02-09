import React from "react"
import styled from "styled-components"

import * as Icon from 'react-bootstrap-icons'

const FooterWrapper = styled.footer`
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: left;
    display: flex;
    align-items: flex;
    flex-direction: column;
    gap: 3rem;
`

const LinksContainer = styled.div`
    display: flex;
    gap: 2rem;
`

const OurContacts = styled.div`
    
`

const Title = styled.h3`
    
`

const Information = styled.p`
    margin-top: .5rem;
    padding-left: 1rem;
    text-decoration: underline;
`


export default () => {
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
    )
}