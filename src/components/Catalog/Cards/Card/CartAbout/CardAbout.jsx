import "react-responsive-carousel/lib/styles/carousel.min.css"

import * as Icon from 'react-bootstrap-icons'

import React from "react"
import styled from "styled-components"


import Button from "../../../../Custom/Button"
import Slider from "../../../../Custom/Slider"
import CardAboutSection from "./CardAboutSection/CardAboutSection"

import { useParams } from "react-router-dom"


const CardAboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1.5rem;
    z-index: 1;
`
const Title = styled.h3`
    position: relative;
    text-align: center;
    font-size: 3rem;
    letter-spacing: .1rem;

    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: .1rem solid #000;
    }
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


const SliderWrapper = styled.div`
    max-width: 100%;
    margin-bottom: 1rem;
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
                    <Slider width={refWidth} images={item.imagesSrc}/>
                </SliderWrapper>

                <Title>{ item.name }</Title>

                <PriseWrapper>
                    <Prise crossedOut={ item.discountPrice && true }>{item.price+'$'}</Prise>
                    { item.discountPrice ? <DiscountPrice>{item.discountPrice+'$'}</DiscountPrice> : <></> }
                </PriseWrapper>

                <Button width='100%'>Add to cart</Button>

                <Button width='100%'>Buy it now</Button>

                <CardAboutSection imageIndex={0} title={'About Product'} text={item.description} />

                <CardAboutSection imageIndex={1} title={'Dimensions'} params={item.params} />

                <CardAboutSection imageIndex={2} title={'About Delivery'} text={item.delivery} />

            </CardAboutWrapper>
        </>
    )
}