import React from "react"

import styled from "styled-components"

import CartItemContainer from "./CartItem/CartItemContainer"
import Button from "../Custom/Button"
import { NavLink } from "react-router-dom"


const Wrapper = styled.div`
    
`
const Title = styled.h3`
    margin-bottom: 2rem;
    font-size: 3rem;
`

const EmptyMessage = styled.h2`
    font-size: 5rem;
    display: flex;
    justify-content: center;
    position: relative;
    color: #b71616;
    text-decoration: underline;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.9rem;
`

const TotalPriceWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 500;
`

const CheckOutBtnWrapper = styled.div`
    text-align: left;
`

export default ({ items, totalPrice }) => {
    return (
        <>
            <Wrapper>
                <Title>Shopping cart</Title>
                <ItemWrapper>
                {
                    items.map((item, index) => <CartItemContainer key={item.id} {...item} />)
                }
                {
                    items.length!==0 ? <>
                    <TotalPriceWrapper>
                        <span>Total price</span>
                        <span>{totalPrice+'$'}</span>
                    </TotalPriceWrapper>
                    <CheckOutBtnWrapper>
                        <Button padding={"1.5rem 8rem"}>Check out</Button>
                    </CheckOutBtnWrapper>
                    </> : <></>
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