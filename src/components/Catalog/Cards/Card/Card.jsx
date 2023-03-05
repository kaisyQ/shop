import React from "react"
import styled from "styled-components"

import { NavLink } from "react-router-dom"

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    padding: .5rem 1rem;
    text-align: left;
    max-width: 16rem;
    max-height: 26.3rem;
    cursor: pointer;
    :hover{
        border-color: #ac3b61;
        transition: .4s ease-in-out;
    }
    background: #fff;
    box-shadow: 0.1rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
`

const CardImageWrapper = styled.div`
    position: relative;
    width: 100%;
    max-height: 15rem;
    transform: ${props => props.isHovered ? 'scale(1.2)' : '0'};
    transition: all .3s;
`
const CardImage = styled.img`
    z-index: 1;
    width: 100%;
    height: 100%;
    transform: ${props => props.isHovered ? 'scale(1.2)' : '0'};
    transition: all .3s;
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
    :hover{
        color: #ac3b61;
    }
`
const CardPrice = styled.p`
    font-size: ${props => props.salePrice ? '1.8rem' : '1.6rem'};
    text-decoration: ${props => !props.salePrice ? 'line-through' : '0'};
    font-weight: ${props => props.salePrice ? '500' : '400'};;
`

const WithSalePrice = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
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
                    <CardPrice salePrice={salePrice}>2.000 USD</CardPrice>
                    {
                        !salePrice && <WithSalePrice>1.500 USD</WithSalePrice>
                    }
                </CardWrapper>
            </NavLink>
        </>
    )
}