import React from "react"
import styled from "styled-components"

import * as Icon from 'react-bootstrap-icons'

const FooterWrapper = styled.footer`
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