import React from "react";

import Post from "./Post/Post";
import Pagination from "../Pagination/Pagination";
import Title from "../Custom/Title/Title";
import Message from "components/Custom/Message/Message";


import { useParams } from "react-router-dom";

import { PostsWrapper, TitleWrapper, PostWrapper } from "./PostsStyles";

import { PostsConnectedProps } from "./PostsContainer";


const Blogs: React.FC<PostsConnectedProps> = ({ posts, fetchPosts }) => {
    
    const { id } = useParams();

    const pageId = id ? parseInt(id) : 1;


    React.useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <>
            <PostsWrapper>
                <TitleWrapper>
                    <Title>Posts</Title>
                </TitleWrapper>
                <PostWrapper>
                {
                    posts.length ?
                        posts.map(post => <Post key={post.id} {...post} />) :
                        <>
                        <Message message="There's nothing here yet..." />
                    </>
                }
                </PostWrapper>
                <Pagination pageId={pageId} count={Math.ceil(posts.length/6)}/>
            </PostsWrapper>
        </>
    );
}

export default Blogs;