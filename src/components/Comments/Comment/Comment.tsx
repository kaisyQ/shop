import React from "react";

import { 
    CommentWrapper, CommentInfo, AuthorName, 
    CreatedDate, CommentText, 
    CommentScore, CommentReview
} from "./CommentStyles";

import * as Icon from "react-bootstrap-icons";
import { Comment as CommentModel } from "models/Comment";

import {Avatar, AvatarIcon} from "@nextui-org/react";


interface ICommentProps {
    comment: CommentModel
}

const Comment: React.FC<ICommentProps> = ({ comment }) => {
    return (
        <>
            <CommentWrapper>
                <CommentInfo>
                <div className="flex items-center">
                    <Avatar
                        icon={<AvatarIcon />}
                        size="lg"
                        isBordered={true}
                        className="dark"
                    /> 
                </div>
                    <AuthorName>{ comment.author[0].toUpperCase() + comment.author.slice(1) }</AuthorName>
                    <CreatedDate>{ comment.date.toLocaleDateString() }</CreatedDate>
                </CommentInfo>
                <CommentReview>
                    <CommentScore>
                    {
                        (() => {
                            const arr: React.JSX.Element[] = [];

                            for(let i=1; i<=comment.rating; ++i) {
                                arr.push(<Icon.StarFill key={i} size={"20px"} />);
                            }
                            
                            return arr;
                        })()
                    }
                    {
                        (() => {
                            const arr: React.JSX.Element[] = [];
                            for(let i=comment.rating; i<5; ++i) {
                                arr.push(<Icon.Star key={i} size={"20px"} />);
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