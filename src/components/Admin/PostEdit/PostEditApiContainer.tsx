import React from "react";

import PostEdit from "./PostEdit";

import { IPostEditApiConnectedProps } from "./PostEditContainer";
import { useParams } from "react-router-dom";

const PostEditApiContainer: React.FC<IPostEditApiConnectedProps> = (props) => {

    const { fetchPostById, setCurrent } = props;

    const { id } = useParams();

    React.useEffect(() => {
        if(!id) {
            setCurrent(null);
            return;
        }
        
        fetchPostById(id);

        return () => {
            setCurrent(null);
        }

    }, [fetchPostById, id]);

    return (
        <>
            <PostEdit {...props} />
        </>
    );
}

export default PostEditApiContainer;