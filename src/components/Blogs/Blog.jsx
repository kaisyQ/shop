import React from "react"

import styled from "styled-components"

import BlogItem from "./BlogItem/BlogItem"
import Pagination from "../Pagination/Pagination"

import { useParams } from "react-router-dom"


const Wrapper = styled.div`
    
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
                <BlogWrapper>
                {
                    blogs.filter((blog, index) => (index+1) > (pageId-1)*5 && (index+1) <= 5*pageId).map(blogItem => <BlogItem key={blogItem.id}{...blogItem} />) 
                }
                </BlogWrapper>
                <Pagination pageId={pageId} count={Math.ceil(blogs.length/5)}/>
            </Wrapper>
        </>
    )
}