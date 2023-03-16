import "react-responsive-carousel/lib/styles/carousel.min.css"

import * as Icon from 'react-bootstrap-icons'

import React from "react"
import styled from "styled-components"


import Button from "../../../../Custom/Button"
import { useParams } from "react-router-dom"


const CardAboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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


const SliderWrapper = styled.div`
    
`

const Slider = styled.div`
    position: relative;
    width: 35rem;
    height: 35rem;
    background-color: #b19595;
    overflow: hidden;

`

const Block = styled.div`
    width: 105rem;
    height: 100%;
    display: flex;

    transition: .5s ease-in-out;
    transform: translateX(${props => props.clickCnt ? -props.clickCnt*35 + 'rem' : 'none'});
    z-index: 1;
`

const SliderItem = styled.div`
    overflow: hidden;
    width: 105rem;
    height: 35rem;
    background-color: ${props => props.background};
`

const Controller = styled.div`
    background-color: black;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

const ControllerBtn = styled.button`
    padding: 1.5rem 3.5rem;
    color: white;
    background-color: black;
    font: inherit;

`

const CircleBtns = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`

const CircleBtn = styled.button`
    padding: .7rem;
    border-radius: 50%;
    background-color: #fff;
`

export default ({ item }) => {

    const { id } = useParams()

    React.useEffect(() => {
        //get product data from server
    }, [id])


    const [clickCnt, setClickCnt] = React.useState(0)
    const [isHovered, setIsHovered] = React.useState(false)
    
    return (
        <>
            <CardAboutWrapper>
                <SliderWrapper>
                    <Slider onMouseOver={(ev) => {setIsHovered(true)}} onMouseOut={(ev) => {setIsHovered(false)}}>
                        <Block clickCnt={clickCnt}>
                            <SliderItem background='yellow'/>   
                            <SliderItem background='red'/>
                            <SliderItem background='black'/>
                    </Block>
                    </Slider>
                    <Controller>
                        <ControllerBtn onClick={() => {setClickCnt(cnt => cnt-1)}}>Prev</ControllerBtn>
                        <CircleBtns>
                            <CircleBtn id='1' onClick={() => {setClickCnt(0)}}></CircleBtn>
                            <CircleBtn id='2' onClick={() => {setClickCnt(1)}}></CircleBtn>
                            <CircleBtn id='3' onClick={() => {setClickCnt(2)}}></CircleBtn>
                        </CircleBtns>
                        <ControllerBtn onClick={() => {setClickCnt(cnt => cnt+1)}}>Next</ControllerBtn>
                    </Controller>
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