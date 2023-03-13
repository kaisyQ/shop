import React from "react"
import styled from "styled-components"

import { NavLink } from "react-router-dom"

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    padding: 1rem 1rem;
    text-align: left;
    max-width: 16rem;
    max-height: 26.3rem;
    cursor: pointer;
    :hover{
        border-color: #ac3b61;
        transition: .4s ease-in-out;
    }
`

const CardImageWrapper = styled.div`
    position: relative;
    width: 100%;
    max-height: 15rem;
    overflow: hidden;
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

const AdditionalCircle = styled.div`
    position: absolute;
    left: .5rem;
    bottom: .5rem;
    padding: .1rem 1rem;
    color: #f1eae8;
    background-color: #000;
    border-radius: .3rem;
`
const CardTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 500;
    :hover{
        transition: .3s ease-in-out;
        color: #ac3b61;
    }

    :not(:hover){
        transition: .3s ease-in-out;
        color: inherit;
    }
`
export default ({ title, price, count, salePrice}) => {

    const [ isHovered, setIsHovered ] = React.useState(false)

    return (
        <>
            <NavLink to='/catalog/1'>
                <CardWrapper> 
                    <CardImageWrapper
                            onMouseOver={(ev) => { setIsHovered(true) }} 
                            onMouseOut={(ev) => { setIsHovered(false) }} 
                            isHovered={isHovered} >
                        <CardImage 
                            src="https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9551_360x.heic?v=1675042214" 
                            alt="card-image" 
                        />
                        <AdditionalCircle>Sold out</AdditionalCircle>
                    </CardImageWrapper>
                    <CardTitle>Blue Structube Erin Sectional Sofa</CardTitle>
                </CardWrapper>
            </NavLink>
        </>
    )
}