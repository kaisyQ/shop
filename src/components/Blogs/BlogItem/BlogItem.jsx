import React from "react"

import styled from "styled-components"

import { NavLink } from "react-router-dom"

const BlogItemWrapper = styled.div`
    position: relative;
    min-width: 33rem;
    width: 100%;
    height: 50rem;
    box-shadow: 0.1rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    
`

const ItemBackground = styled.img`
    display: block;
    height: 60rem;
    object-fit: cover;

    transform: ${props => props.isHover ? 'translateY(-1rem) ' : 'translateY(0rem)'};
    transition: .2s ease-in-out;

`

const ItemTitle = styled.h3`
    position: absolute;
    width: 22rem;
    left: 50%;
    bottom:  ${props => props.isHover ? '50%' : '4rem'};
    text-overflow: ellipsis;
    color: #fff;
    font-size: 1.8rem;
    transform: ${props => props.isHover ? 'translate(-50%, 50%)' : 'translate(-50%, 0)'};
    transition: ${props => props.isHover ? '.2s' : '.2s'} ease-in-out;
    
`

const ItemButton = styled.button`
    padding: 1rem 3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: white;
    border: .1rem #fff solid;
    cursor: pointer;
    :hover {
        outline: none;
        color: #000;
        background: #fff;
        transform: scale(120%);
        transition: .2s;
    }

    :not(:hover) {
        transform: scale(100%);
        transition: .2s;
    }
`

const ItemAbout = styled.div`
    position: absolute;
    width: 28rem;
    font-size: 1.2rem;
    top: 100%;
    left: 50%;
    color: #fff;
    transform: ${props => props.isHover ? 'translate(-50%, -160%)' : 'translate(-50%, 100%)'};
    transition: ${props => props.isHover ? '.3s' : '.2s'} ease-in-out;
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
                <ItemBackground isHover={isHover} src={imageSrc} alt="card__image" />
                <ItemTitle isHover={isHover}>{ title }</ItemTitle>
                <ItemButton>Read more</ItemButton>
                <ItemAbout isHover={isHover}>
                    <NavLink to={`/blog/${id}`}><ItemButton>Read More</ItemButton></NavLink>
                    <p>{ shortDescription }</p>
                </ItemAbout>
            </BlogItemWrapper>
        </>
    )
}