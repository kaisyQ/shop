import React from "react"

import styled from "styled-components"

import Title from "../Custom/Title"


const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
`


const PreviewImageWrapper = styled.div`
    
`
const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Slogan = styled.p`
    margin-left: 2rem;
    font-size: 2rem;
`

export default () => {
    return (
        <>
            <HomeWrapper>
                <Title>Addidas</Title>
                <PreviewImageWrapper>
                    <PreviewImage src='https://www.remontbp.com/wp-content/uploads/2017/04/6-13.jpg' alt="preview-image"/>
                </PreviewImageWrapper>
                <Slogan>
                    Our sofas like Lincolns -- except they dont make your ass hurt 
                </Slogan>
            </HomeWrapper>
        </>
    )
}