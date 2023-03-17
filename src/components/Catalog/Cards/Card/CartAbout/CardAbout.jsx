import "react-responsive-carousel/lib/styles/carousel.min.css"

import * as Icon from 'react-bootstrap-icons'

import React from "react"
import styled from "styled-components"


import Button from "../../../../Custom/Button"
import Slider from "../../../../Custom/Slider"
import { useParams } from "react-router-dom"


const CardAboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    justify-content: flex-start;
`

const Prise = styled.div`
    font-size: ${props => props.crossedOut ? '1.8rem' : '3rem'};
    text-decoration: ${props => props.crossedOut ? 'line-through' : 'none'};
    opacity: ${props => props.crossedOut ? '50%' : '0'};;
`

const DiscountPrice = styled.div`
    font-size: 3rem;
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

const SliderWrapper = styled.div`
    max-width: 100%;
    padding: 1rem 1rem 0 1rem;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(118,75,75,1) 50%, rgba(0,0,0,1) 100%);
`

export default ({ item }) => {

    const ref = React.useRef(null)
    const [ refWidth, setRefWidth ] = React.useState(0)

    const { id } = useParams()

    React.useEffect(() => {
        setRefWidth(ref.current.offsetWidth/10)
    }, [])

    return (
        <>
            <CardAboutWrapper ref={ref}>

                <SliderWrapper>
                    <Slider width={refWidth-2} images={item.imagesSrc}/>
                </SliderWrapper>

                <Title>{ item.name }</Title>

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