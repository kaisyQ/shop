import React from "react";

import { 
    CommentsWrapper, CommentsHeader, CommentConroller, 
    CommentsTitle, CommentsSubtitle, CommentsBlock,
    TotalStarRating
} from "./CommentsStyles";

import Comment from "./Comment/Comment";

import * as Icon from "react-bootstrap-icons";

import AddCommentContainer from "./AddCommentModal/AddCommentContainer";

import { CommentsConnectedProps } from "./CommentsContainer";

import { LOADING } from "constants/constants";

import Preloader from "components/Ui/Preloader/Preloader";
import {Button, useDisclosure} from "@nextui-org/react";

interface ICommentsProps extends CommentsConnectedProps{
}

const Comments: React.FC<ICommentsProps> = ({ comments, loading, fetchComments }) => {
    
    const [showModal, setShowModal] = React.useState(false);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
                    <CommentsTitle>Customer reviews</CommentsTitle>
                    <CommentsSubtitle>Read what our customers have to say</CommentsSubtitle>
                </CommentsHeader>
                <CommentConroller>
                    <Button 
                        onPress={onOpen}
                        className="dark"
                        radius="sm"
                        size="lg" 
                        onClick={(ev) => setShowModal(true)}
                    >
                        Write a review
                    </Button>
                    
                    <TotalStarRating>
                        <Icon.StarFill size={"30px"} />
                        <Icon.StarFill size={"30px"} />
                        <Icon.StarFill size={"30px"} />
                        <Icon.StarFill size={"30px"} />
                        <Icon.StarHalf size={"30px"} />
                    </TotalStarRating>
                
                </CommentConroller>
                <CommentsBlock>
                {
                    comments.map((comment) => <Comment key={comment.id} comment={comment} />)
                }
                </CommentsBlock>
                {
                    showModal ? <AddCommentContainer 
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onOpenChange={onOpenChange}
                    /> 
                    : null 
                }
            </CommentsWrapper>
        </>
    );
}

export default Comments;