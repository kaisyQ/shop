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

interface ICommentsProps extends CommentsConnectedProps{
}

const Comments: React.FC<ICommentsProps> = ({ comments, fetchComments }) => {
    
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        fetchComments()
    }, [fetchComments]); 

    return (
        <>
            <CommentsWrapper>
                <CommentsHeader>
                    <CommentsTitle>CUSTOMER REVIEWS</CommentsTitle>
                    <CommentsSubtitle>Read what our customers have to say</CommentsSubtitle>
                </CommentsHeader>
                <CommentConroller>
                    <CreateButton onClick={(ev) => setShowModal(true)}>
                        <Icon.Plus size={"2rem"} />
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