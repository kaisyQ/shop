import React from "react"

import styled from "styled-components"

import Button from "../Custom/Button"

const Wrapper = styled.div`
    width: 100%;
    max-height: 14rem;
    display: flex;
    column-gap: 1.5rem;
    align-items: flex-start;
    position: relative;
    
    ::after {
        content: '';
        display: ${props => !props.isLast ? "block" : "none"};
        position: absolute;
        left: 0;
        bottom: -1rem;
        width: 100%;
        border: .1rem solid #000;
    }

`

const ItemImage = styled.img`
    display: block;
    max-width: 12rem;
    object-fit: cover;
`

const ItemAbout = styled.section`
    text-align: left;
`

const ItemAboutName = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1rem;
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
const PriceWrapper = styled.div`
    margin-bottom: 1rem;
`

const ItemAboutPrice = styled.p`
    font-size: ${props => props.discountPrice ? "1.4rem" : "1.6rem"};
    margin-left: 1.5rem;
    padding: .5rem 1rem;
    display: inline-block;
    position: relative;


    background: ${props => props.discountPrice ?'#fff' : '#000'};
    color: ${props => props.discountPrice ?'#000' : '#fff'};

    ::after {
        display: ${props => props.discountPrice ? "block" : "none"};
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 50%);
        width: 80%;
        height: .1rem;
        background: ${props => props.discountPrice ? "#000" : '#fff'};

    }

`

const ItemAboutDisPrice = styled.p`
    display: inline-block;
    font-size: 1.6rem;
    margin-left: 1.5rem;
    padding: .6rem 1.2rem;
    border-radius: .3rem;
    
    background: #000;
    color: #fff;
`

const Count = styled.span`
    padding: .6rem 1.2rem;
    border-radius: .3rem;
    margin-left: 1rem;
    font-weight: 500;
    color: #fff;
    background: #000;
`

export default (props) => {
    
    const { id, name, count, price, discountPrice, image, isLast } = props
    
    return (
        <>
            <Wrapper isLast={isLast}>
                <ItemImage src={image} alt={`product ${id}`} />
                <ItemAbout>
                    <ItemAboutName>{name}</ItemAboutName>
                    <PriceWrapper>
                        {
                            !discountPrice ? <ItemAboutPrice 
                                discountPrice={discountPrice}>{price + "$"}
                                </ItemAboutPrice> : <></>
                        }
                        {
                            discountPrice ? <ItemAboutDisPrice>{discountPrice + "$"}</ItemAboutDisPrice> : <></>
                        }
                        <Count>count: {count}</Count>
                    </PriceWrapper>
                    <div>
                        <Button width={"100%"} padding={".8rem  4rem"}>Buy</Button>
                    </div>
                </ItemAbout>
            </Wrapper>
        </>
    )
}