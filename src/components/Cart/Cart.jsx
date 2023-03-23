import React from "react"

import styled from "styled-components"

import CartItem from "./CartItem"
import Button from "../Custom/Button"
import { NavLink } from "react-router-dom"


const Wrapper = styled.div`
    
`
const Title = styled.h3`
    margin-bottom: 2rem;
    font-size: 3rem;
`

const EmptyMessage = styled.h2`
    font-size: 3.5rem;
    display: inline-block;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: .1rem solid #000;
    }
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.9rem;
`
export default ({ items }) => {
    return (
        <>
            <Wrapper>
                <Title>Shopping cart</Title>
                <ItemWrapper>
                {
                    items.map((item, index) => <CartItem isLast={index===items.length-1} key={item.id} {...item} />)
                }

                {
                    items.length===0 ? <>
                        <EmptyMessage>Your cart is empty!</EmptyMessage>
                        <NavLink to={'/catalog'}>
                            <Button isReverse={true}>Continue shopping</Button>
                        </NavLink>
                    </> : <></>
                        
                }
                </ItemWrapper>
            </Wrapper>
        </>
    )
}