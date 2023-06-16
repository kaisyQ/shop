import React from "react";

import PostEdit from "./PostEdit";

import { IPostEditApiConnectedProps } from "./PostEditContainer";
import { useParams } from "react-router-dom";

const PostEditApiContainer: React.FC<IPostEditApiConnectedProps> = (props) => {

    const { post, updatePost, fetchToCreatePost, 
        fetchPostById, setCurrent, fetchToUpdatePost,
        setConfirmModalData 
    } = props;

    const { id } = useParams();

    React.useEffect(() => {
        if(!id) {
            setCurrent(null);
            return;
        }
        fetchPostById(id);
    }, [fetchPostById, id]);

    return (
        <>
            <PostEdit {...props} />
        </>
    );
}

export default PostEditApiContainer