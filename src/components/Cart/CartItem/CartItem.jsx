import React from "react"

import styled from "styled-components"

import Button from "../../Custom/Button"
import Counter from "../../Counter/Counter"

import * as Icon from 'react-bootstrap-icons'

const Wrapper = styled.div`
    width: 100%;
    max-height: 17rem;
    column-gap: 1.5rem;
    align-items: flex-start;
    position: relative;
    display: flex;
    align-items: center;
    
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1rem;
        width: 100%;
        border-bottom: .1rem solid #000;
    }

`

const ItemImage = styled.img`
    display: block;
    max-width: 10rem;
    object-fit: cover;
`

const ItemAbout = styled.section`
    text-align: left;
`

const ItemAboutName = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
    max-width: 14rem;
    position: relative;
    color: #c62828;

    ::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        border-right: .1rem solid #000;
    }
`

const ItemAboutHeader = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
`

const Price = styled.span`
    font-size: 1.8rem;
    padding: .5rem 1rem;
    background: #c62828;
    color: #fff;
    border-radius: .3rem;
`

const ItemAboutFooter = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const CounterContainer = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
`

export default (props) => {
    
    const { id, name, count, price, discountPrice, image, isLast, removeCartItem } = props

    const removeItem = (ev) => {
        removeCartItem(id)
    }
 
    return (
        <>
            <Wrapper>
                <ItemImage src={image} alt={`product ${id}`} />
                <ItemAbout>
                    <ItemAboutHeader>
                        <ItemAboutName>{ name }</ItemAboutName>
                        <Price>{ (discountPrice?discountPrice:price)+'$' }</Price>
                    </ItemAboutHeader>
                    <ItemAboutFooter>
                        <CounterContainer>
                            <Counter productCount={count}/>
                            <Icon.Trash3 cursor={'pointer'} size={'2rem'} onClick={removeItem}/>
                        </CounterContainer>
                        <Button width={"100%"} padding={".8rem  4rem"}>Show in store</Button>
                    </ItemAboutFooter>
                </ItemAbout>
            </Wrapper>
        </>
    )
}