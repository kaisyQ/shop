import React from "react";

import { 
    CommentWrapper, CommentInfo, AuthorName, 
    AuthorCircle, CreatedDate, CommentText, 
    CommentScore, CommentReview
} from "./CommentStyles";

import * as Icon from "react-bootstrap-icons";
import { Comment as IComment } from "types/types";

interface ICommentProps {
    comment: IComment
}

const Comment: React.FC<ICommentProps> = ({ comment }) => {
    return (
        <>
            <CommentWrapper>
                <CommentInfo>
                    <AuthorCircle>{ comment.author[0].toUpperCase() }</AuthorCircle>
                    <AuthorName>{ comment.author }</AuthorName>
                    <CreatedDate>{ comment.date.toLocaleDateString() }</CreatedDate>
                </CommentInfo>
                <CommentReview>
                    <CommentScore>
                    {
                        (() => {
                            const arr: React.JSX.Element[] = [];

                            for(let i=1; i<=comment.rating; ++i) {
                                arr.push(<Icon.StarFill key={i} size={"2rem"} />);
                            }
                            
                            return arr;
                        })()
                    }
                    {
                        (() => {
                            const arr: React.JSX.Element[] = [];
                            for(let i=comment.rating; i<5; ++i) {
                                arr.push(<Icon.Star key={i} size={"2rem"} />);
                            }
                            return arr
                        })()
                    }
                    </CommentScore>
                    <CommentText>{ comment.text }</CommentText>
                </CommentReview>
            </CommentWrapper>
        </>
    );
}

export default React.memo(Comment);