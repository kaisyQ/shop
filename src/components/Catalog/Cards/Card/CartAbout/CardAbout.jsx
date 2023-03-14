import "react-responsive-carousel/lib/styles/carousel.min.css"

import React from "react"
import styled from "styled-components"


import { Carousel } from 'react-responsive-carousel'
import Button from "../../../../Custom/Button"
import { useParams } from "react-router-dom"

const CardAboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1.5rem;
    z-index: 1;
`
const Title = styled.h3`
    text-align: left;
    font-size: 2.4rem;
`

const PriseWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
`

const Prise = styled.div`
    font-size: ${props => props.crossedOut ? '1.8rem' : '3rem'};
    text-decoration: ${props => props.crossedOut ? 'line-through' : 'none'};
    opacity: ${props => props.crossedOut ? '50%' : '0'};;
`

const DiscountPrice = styled.div`
    font-size: 3rem;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`


const ProductSection = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const Text = styled.p`
    font-size: 1.6rem;
    text-indent: 2.5rem;    
    text-align: justify;
`

export default ({ item }) => {

    const { id } = useParams()

    React.useEffect(() => {
        //get product data from server
    }, [id])

    return (
        <>
            <CardAboutWrapper>
                <Wrapper>
                    <Carousel>
                    {
                        item.imagesSrc.map((imageSrc, index) => <img key={index} src={imageSrc} alt={`product image ${index}`}/>)
                    }
                    </Carousel>
                </Wrapper>
                <Title>Blue Structube Erin Sectional Sof</Title>
                <PriseWrapper>
                    <Prise crossedOut={ item.discountPrice && true }>{item.price+'$'}</Prise>
                    { item.discountPrice ? <DiscountPrice>{item.discountPrice+'$'}</DiscountPrice> : <></> }
                </PriseWrapper>
                <Button width='100%'>Add to cart</Button>
                <Button width='100%'>Buy it now</Button>
                <ProductSection>
                    <Title>About Product</Title>
                    <Text>{ item.description }</Text>
                </ProductSection>
                <ProductSection>
                    <Title>About Delivery</Title>
                    <Text>{ item.delivery }</Text>
                </ProductSection>
            </CardAboutWrapper>
        </>
    )
}