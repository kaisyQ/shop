import React from "react";

import BlogItem from "./Post/Post";
import Pagination from "../Pagination/Pagination";
import Title from "../Custom/Title/Title";

import { useParams } from "react-router-dom";

import { BlogsWrapper, TitleWrapper, BlogWrapper } from "./PostsStyles";

import { PostsConnectedProps } from "./PostsContainer";


const Blogs: React.FC<PostsConnectedProps> = ({ posts, fetchPosts }) => {
    
    const { id } = useParams();

    const pageId = id ? parseInt(id) : 1;


    React.useEffect(() => {
        fetchPosts();
    }, [fetchPosts])

    return (
        <>
            <BlogsWrapper>
                <TitleWrapper>
                    <Title>Posts</Title>
                </TitleWrapper>
                <BlogWrapper>
                {
                    posts.filter((post, index) => (index+1) > (pageId-1)*6 && (index+1) <= 6*pageId).map(postItem => <BlogItem key={postItem.id} {...postItem} />) 
                }
                </BlogWrapper>
                <Pagination pageId={pageId} count={Math.ceil(posts.length/6)}/>
            </BlogsWrapper>
        </>
    );
}

export default Blogs;