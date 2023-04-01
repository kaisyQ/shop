import React from "react"

import styled from "styled-components"

import Button from "../../Custom/Button"
import Counter from "../../Counter/Counter"

import * as Icon from 'react-bootstrap-icons'

import { NavLink } from "react-router-dom"

const Wrapper = styled.div`
    width: 100%;
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
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const ItemAboutName = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
    position: relative;
    color: #c62828;
    line-height: 2rem;
    
    cursor: pointer;

    :hover{
        transition: .3s ease-in-out;
        color: #fc8507;
        font-size: 2rem;
    }
    
    :not(:hover){
        transition: .3s ease-in-out;
        color: #c74646;
        font-size: 1.8rem;
    }

    @media only screen and (max-width: 330px) {
        max-width: 14rem;
        font-size: 1.2rem;
    }
`

const ItemAboutHeader = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;

    @media only screen and (max-width: 330px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const Price = styled.span`
    font-size: 1.8rem;
    padding: .5rem 1rem;
    background: #c62828;
    color: #fff;
    border-radius: .3rem;
    font-style: italic;
`

const ItemAboutFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 4rem;


    @media only screen and (max-width: 330px) {
        flex-direction: column;
        row-gap: 1rem;
    }
`

const CounterContainer = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
`

export default (props) => {
    
    const { id, name, count, price, discountPrice, image, removeCartItem } = props

    const removeItem = (ev) => {
        removeCartItem(id)
    }
 
    return (
        <>
            <Wrapper>
                <ItemImage src={image} alt={`product ${id}`} />
                <ItemAbout>
                    <ItemAboutHeader>
                        <ItemAboutName><NavLink to={`catalog/${id}`}>{ name }</NavLink></ItemAboutName>
                        <Price>{ (discountPrice?discountPrice:price)+'$' }</Price>
                    </ItemAboutHeader>
                    <ItemAboutFooter>
                        <CounterContainer>
                            <Counter productCount={count}/>
                            <Icon.Trash3 cursor={'pointer'} size={'2rem'} onClick={removeItem}/>
                        </CounterContainer>
                        <div>
                            <Button width={"100%"} padding={".8rem  4rem"}>
                                <NavLink to={`catalog/${id}`}>Show in store</NavLink>
                            </Button>
                        </div>
                    </ItemAboutFooter>
                </ItemAbout>
            </Wrapper>
        </>
    )
}