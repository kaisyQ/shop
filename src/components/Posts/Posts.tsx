import React from "react";

import Post from "./Post/Post";
import Title from "../Custom/Title/Title";
import Message from "components/Custom/Message/Message";


import { useParams } from "react-router-dom";

import { PostsWrapper, TitleWrapper, PostWrapper } from "./PostsStyles";

import { PostsConnectedProps } from "./PostsContainer";

import Preloader from "components/Ui/Preloader/Preloader";

import { LOADING } from "constants/constants";

const Posts: React.FC<PostsConnectedProps> = ({ posts, loading, fetchPosts }) => {
    
    const { id } = useParams();

    const pageId = id ? parseInt(id) : 1;


    React.useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    if (loading === LOADING) {
        return <Preloader />;
    }

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
            </PostsWrapper>
        </>
    );
}

export default Posts;