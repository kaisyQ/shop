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
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 1.5rem;
    z-index: 1;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
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

const ZeroCountMessage = styled.h4`
    margin-left: 2rem;
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    font-weight: 500;
    background: #d62e2e;
    color: #fff;
    text-decoration: underline;
    border-radius: .5rem;
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
    margin-bottom: 1rem;
    max-width: 32rem;
`

const ButtonWrapper = styled.div`
    width: 100%;
    max-width: 32rem;
`

export default ({ item, addCartItem }) => {

    const { id } = useParams()

    const addToCart = (ev) => {
        addCartItem(item.id)
    }

    return (
        <>
            <CardAboutWrapper>

                <SliderWrapper>
                    <Slider images={item.imagesSrc}/>
                </SliderWrapper>

                <InfoWrapper>

                    <Title>{ item.name }</Title>

                    <PriseWrapper>
                        <Prise crossedOut={ item.discountPrice && true }>{item.price+'$'}</Prise>
                        { item.discountPrice ? <DiscountPrice>{item.discountPrice+'$'}</DiscountPrice> : <></> }
                        {
                            !item.count ? <ZeroCountMessage>Out of stock</ZeroCountMessage> : <></>
                        }
                    </PriseWrapper>
                    
                    <ButtonWrapper>
                        <Button disabled={item.count===0} onClick={addToCart} width='100%'>Add to cart</Button>
                    </ButtonWrapper>
                    
                    <ButtonWrapper>
                        <Button disabled={item.count===0} width='100%'>Buy it now</Button>
                    </ButtonWrapper>
                    <CardAboutSection title={'About Product'} text={item.description} />

                    <CardAboutSection title={'Dimensions'} params={item.params} />

                    <CardAboutSection title={'About Delivery'} text={item.delivery} />

                </InfoWrapper>
            </CardAboutWrapper>
        </>
    )
}