import React from "react"

import styled from "styled-components"

import { NavLink } from "react-router-dom"
import Button from "../../Custom/Button"


const BlogItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    width: 100%;
    height: 40rem;
    box-shadow: 0.1rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
    background-color: #fff;
    color: inherit;
    overflow: hidden;
`

const ItemImage = styled.img`
    display: block;
    height: 50%;
    width: 100%;
    object-fit: cover;

    :hover {
        transform: scale(120%);
        transition: .4s ease-in-out;
    }
`


const ItemTitle = styled.h3`
    letter-spacing: 0.2rem;
    word-spacing: .7rem;
    padding: 1rem 1rem;
`

const ButtonWrapper = styled.div`
 
`

export default ({ id, title, shortDescription, imageSrc }) => {
    const [isHover, setIsHover] = React.useState(false)

    const onBlogMouseOver = (ev) => {
        setIsHover(true)
    }

    const onBlogMouseOut = (ev) => {
        setIsHover(false)
    }

    return (
        <>
            <BlogItemWrapper onMouseOver={onBlogMouseOver} onMouseOut={onBlogMouseOut}>
                <ItemImage src={imageSrc} alt='card-image' />
                <ItemTitle>{ title }</ItemTitle>
                <ButtonWrapper>
                    <Button>Read More</Button>
                </ButtonWrapper>
            </BlogItemWrapper>
        </>
    )
}