import React from "react";

import { 
    CommentWrapper, CommentInfo, AuthorName, 
    AuthorCircle, CreatedDate, CommentText, 
    CommentScore, ScoreItem, CommentReview
} from "./CommentStyles";

import * as Icon from "react-bootstrap-icons";

const Comment = () => {
    return (
        <>
            <CommentWrapper>
                <CommentInfo>
                    <AuthorCircle>M</AuthorCircle>
                    <AuthorName>Micheas</AuthorName>
                    <CreatedDate>13.04.2023</CreatedDate>
                </CommentInfo>
                <CommentReview>
                    <CommentScore>
                        <Icon.StarFill size={"3rem"} />
                        <Icon.StarFill size={"3rem"} />
                        <Icon.StarFill size={"3rem"} />
                        <Icon.StarFill size={"3rem"} />
                        <Icon.Star size={"3rem"} />
                    </CommentScore>
                    <CommentText>
                        Koch by far has the best furniture collection I 
                        really enjoyed shopping through their website and 
                        finally getting the sofa
                    </CommentText>
                </CommentReview>
            </CommentWrapper>
        </>
    );
}

export default Comment;