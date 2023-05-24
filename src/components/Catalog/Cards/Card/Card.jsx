import React from "react"
import styled from "styled-components"

import Button from "../../../Custom/Button/Button"

import { NavLink } from "react-router-dom"



const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    text-align: left;
    cursor: pointer;
    z-index: 1;
    
    :hover{
        border-color: #ac3b61;
        transition: .4s ease-in-out;
    }


    width: 31%;

    @media only screen and (max-width: 768px){
        width: 45%;
    }

    @media only screen and (max-width: 330px){
        width: 100%;
    }
`

const CardImageWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    z-index: 1;
`
const CardImage = styled.img`
    width: 100%;
    height: 100%;

    :hover {
        transition: .3s ease-in-out;
        transform: scale(120%);
    }

    :not(:hover) {
        transition: .3s ease-in-out;
        transform: scale(1);
    }
`

const CardInfoWrapper = styled.div`
    width: 100%;    
`

const CardInfoItem = styled.div`
    display: flex;
    column-gap: 1rem;
`

const CardTitle = styled.h3`
    position: relative;
    display: inline-block;
    font-size: ${props => props.size};
    letter-spacing: .1rem;
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 500;
    color: #c74646;
    padding: 1rem;

    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: .1rem solid white;
    }


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
`

const CardSaleTitle = styled.h3`
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: inline-block;
    font-size: ${props => props.size};
    letter-spacing: .1rem;
    font-style: italic;
    padding: .5rem 2rem;
    font-weight: 500;
    background: #fff;
    color: #c74646;
    z-index: 5;
`

export default ({ count, name, imageSrc, id, addCartItem }) => {

    const addToCart = (ev) => {
        addCartItem(id)
    }



    return (
        <>
            <CardWrapper>
                <CardSaleTitle border={true} >
                    {count===0?'Sold out':'Sale'}
                </CardSaleTitle>
                <NavLink to={`/catalog/${id}`}>
                    <CardImageWrapper>
                        <CardImage 
                            src={imageSrc}
                            alt="Card image" 
                        />
                    </CardImageWrapper>
                </NavLink>
                <CardInfoWrapper>
                    <NavLink to={`/catalog/${id}`}>
                        <CardInfoItem>
                            <CardTitle>{ name }</CardTitle>
                        </CardInfoItem>
                    </NavLink>
                    <CardInfoItem>
                        <Button withBaseResponse={true} onClick={addToCart} isReverse={true}>Add to cart</Button>
                        <NavLink to={`/catalog/${id}`}>
                            <Button withBaseResponse={true}>Show More</Button>
                        </NavLink>
                    </CardInfoItem>
                </CardInfoWrapper>
            </CardWrapper>
        </>
    )
}