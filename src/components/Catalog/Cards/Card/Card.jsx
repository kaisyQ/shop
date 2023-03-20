import React from "react"
import styled from "styled-components"

import Button from "../../../Custom/Button"

import { NavLink } from "react-router-dom"



const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    text-align: left;
    cursor: pointer;
    :hover{
        border-color: #ac3b61;
        transition: .4s ease-in-out;
    }
    z-index: 1;
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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;    
    height: 100%;
    background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%);
    z-index: 2;
    
    opacity: 0;

    :hover {
        opacity: 1;
        transition: .4s ease-in-out;
    }

    :not(:hover) {
        opacity: 0;
        transition: .4s ease-in-out;
    }
`

const CardInfoContainer = styled.div`
    position: relative;
    left: 0;
    top: 50%;
    padding: 1rem;
`

const CardInfo = styled.div`

`

const CardInfoItem = styled.div`
    margin: 1rem 0;
    padding-left: 1rem;
`

const CardTitle = styled.h3`
    position: relative;
    display: inline-block;
    font-size: ${props => props.size};
    letter-spacing: .1rem;
    font-weight: 500;
    color: white;
    

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
    }
    :not(:hover){
        transition: .3s ease-in-out;
        color: white;
    }
`



export default ({ count, name, imageSrc, id }) => {

    return (
        <>
            <NavLink to={`/catalog/${id}`}>
                <CardWrapper> 
                    <CardImageWrapper>
                        <CardImage 
                            src={imageSrc}
                            alt="Card image" 
                        />
                    </CardImageWrapper>
                    <CardInfoWrapper>
                        <CardInfoContainer>
                            <CardInfo>
                                <CardInfoItem>
                                    <CardTitle size={"2.4rem"}>{ name }</CardTitle>
                                </CardInfoItem>
                                <CardInfoItem>
                                    <CardTitle border={true} size={"2rem"}>{ count === 0 ? 'Sold out' : 'Sale'}</CardTitle>
                                </CardInfoItem>
                                <CardInfoItem>
                                    <Button isReverse={true}>Add to cart</Button>
                                </CardInfoItem>
                            </CardInfo>
                        </CardInfoContainer>
                    </CardInfoWrapper>
                </CardWrapper>
            </NavLink>
        </>
    )
}