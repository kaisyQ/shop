import React from "react";

import BlogItem from "./BlogItem/BlogItem";
import Pagination from "../Pagination/Pagination";
import Title from "../Custom/Title/Title";

import { useParams } from "react-router-dom";

import { BlogsWrapper, TitleWrapper, BlogWrapper } from "./BlogsStyles";

import { BlogsConnectedProps } from "./BlogsContainer";


const Blogs: React.FC<BlogsConnectedProps> = ({ blogs }) => {
    
    const { id } = useParams();

    const pageId = id ? parseInt(id) : 1;

    return (
        <>
            <BlogsWrapper>
                <TitleWrapper>
                    <Title>Blog</Title>
                </TitleWrapper>
                <BlogWrapper>
                {
                    blogs.filter((blog, index) => (index+1) > (pageId-1)*6 && (index+1) <= 6*pageId).map(blogItem => <BlogItem key={blogItem.id} {...blogItem} />) 
                }
                </BlogWrapper>
                <Pagination pageId={pageId} count={Math.ceil(blogs.length/6)}/>
            </BlogsWrapper>
        </>
    );
}

export default Blogs;