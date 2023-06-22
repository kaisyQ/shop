import React from "react";

import { 
    CommentsWrapper, CommentsHeader, CommentConroller, 
    CommentsTitle, CommentsSubtitle, CommentsBlock,
    CreateButton, Filter
} from "./CommentsStyles";

import Comment from "./Comment/Comment";

import StarsFilterContainer from "./Stars/StarsFilterContainer";

import * as Icon from "react-bootstrap-icons";

import AddCommentContainer from "./AddCommentModal/AddCommentContainer";

import { CommentsConnectedProps } from "./CommentsContainer";
import { LOADING } from "types/types";
import Preloader from "components/Ui/Preloader/Preloader";

interface ICommentsProps extends CommentsConnectedProps{
}

const Comments: React.FC<ICommentsProps> = ({ comments, loading, fetchComments }) => {
    
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        fetchComments()
    }, [fetchComments]); 

    if (loading === LOADING) {
        return <Preloader />
    }

    return (
        <>
            <CommentsWrapper>
                <CommentsHeader>
                    <CommentsTitle>CUSTOMER REVIEWS</CommentsTitle>
                    <CommentsSubtitle>Read what our customers have to say</CommentsSubtitle>
                </CommentsHeader>
                <CommentConroller>
                    <CreateButton onClick={(ev) => setShowModal(true)}>
                        <Icon.Plus size={"3rem"} />
                        <span>Write a review</span>
                    </CreateButton>
                    <Filter>
                        <StarsFilterContainer />
                    </Filter>
                </CommentConroller>
                <CommentsBlock>
                {
                    comments.map((comment) => <Comment key={comment.id} comment={comment} />)
                }
                </CommentsBlock>
                { showModal ? <AddCommentContainer close={() => setShowModal(false)} /> : null }
            </CommentsWrapper>
        </>
    );
}

export default Comments;