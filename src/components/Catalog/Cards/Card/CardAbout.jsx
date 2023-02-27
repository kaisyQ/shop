import "react-responsive-carousel/lib/styles/carousel.min.css"

import React from "react"
import styled from "styled-components"


import { Carousel } from 'react-responsive-carousel'
import Counter from "./Counter/Counter"
import Button from "../../../Custom/Button"

const CardAboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    z-index: 1;
`
const Title = styled.h3`
    text-align: left;
    font-size: 2.4rem;
`


const Prise = styled.div`
    font-size: 3rem;

`


export default () => {
    return (
        <>
            <CardAboutWrapper>
                <Carousel>
                    <img src="https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9551_360x.heic?v=1675042214" />
                    <img src="https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9551_360x.heic?v=1675042214" />
                    <img src="https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9551_360x.heic?v=1675042214" />
                </Carousel>
                <Title>Blue Structube Erin Sectional Sof</Title>
                <Prise>890$</Prise>
                <Button width='100%'>Add to cart</Button>
                <Button width='100%'>Buy it now</Button>
            </CardAboutWrapper>
        </>
    )
}