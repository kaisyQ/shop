import React from "react"

import styled from "styled-components"

import BlogItem from "./BlogItem/BlogItem"
import Pagination from "../Pagination/Pagination"

import Title from "../Custom/Title"

import { useParams } from "react-router-dom"


const Wrapper = styled.div`
    
`

const TitleWrapper = styled.div`
    text-align: left;
    margin-bottom: 2rem;
`


const BlogWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
`


export default ({ blogs }) => {

    const { id } = useParams()

    const pageId = id ? parseInt(id) : 1

    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Title>Blog</Title>
                </TitleWrapper>
                <BlogWrapper>
                {
                    blogs.filter((blog, index) => (index+1) > (pageId-1)*6 && (index+1) <= 6*pageId).map(blogItem => <BlogItem key={blogItem.id}{...blogItem} />) 
                }
                </BlogWrapper>
                <Pagination pageId={pageId} count={Math.ceil(blogs.length/6)}/>
            </Wrapper>
        </>
    )
}