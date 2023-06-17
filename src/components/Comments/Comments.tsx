import React from "react";

import { 
    CommentsWrapper, CommentsHeader, CommentConroller, 
    CommentsTitle, CommentsSubtitle, CommentsBlock,
    CreateButton, Filter
} from "./CommentsStyles";

import Comment from "./Comment/Comment";

import Stars from "./Stars/Stars";

import * as Icon from "react-bootstrap-icons";
import AddCommentModal from "./AddCommentModal/AddCommentModal";

interface ICommentsProps {

}

const Comments: React.FC<ICommentsProps> = () => {
    
    const [showModal, setShowModal] = React.useState(true);

    return (
        <>
            <CommentsWrapper>
                <CommentsHeader>
                    <CommentsTitle>CUSTOMER REVIEWS</CommentsTitle>
                    <CommentsSubtitle>Read what our customers have to say</CommentsSubtitle>
                </CommentsHeader>
                <CommentConroller>
                    <CreateButton>
                        <Icon.Plus size={"2rem"} />
                        <span>Write a review</span>
                    </CreateButton>
                    <Filter>
                        <Stars />
                    </Filter>
                </CommentConroller>
                <CommentsBlock>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </CommentsBlock>
                <AddCommentModal />
            </CommentsWrapper>
        </>
    );
}

export default Comments;