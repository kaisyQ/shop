import React from "react";
import styled from 'styled-components';
import { 
    CreatedDate, 
    CommentScore, CommentHeaderWrapper, CommentHeaderInfo
} from "./CommentStyles";

import * as Icon from "react-bootstrap-icons";
import { Comment as CommentModel } from "models/Comment";

import {Avatar,AvatarIcon, CardBody, Card, CardHeader} from "@nextui-org/react";


interface ICommentProps {
    comment: CommentModel
}

const PersonNameWrapper = styled.div`
    font-style: italic;
    font-weight: bold;
    padding: 0 20px;
    font-size: 22px;
`;

const Comment: React.FC<ICommentProps> = ({ comment }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CommentHeaderWrapper>
                        <CommentHeaderInfo className="flex items-center gap-3 italic">
                            <div className="flex items-center">
                                <Avatar icon={<AvatarIcon />} size="lg" isBordered={true} className="dark" />
                            </div>
                            <PersonNameWrapper>
                                {comment.author[0].toUpperCase() + comment.author.slice(1)}
                            </PersonNameWrapper>
                            <CommentScore>
                            {
                                (() => {
                                    const stars: React.JSX.Element[] = [];
                                    for(let i = 1; i <= comment.rating; ++i) {
                                        stars.push(<Icon.StarFill key={i} size={"20px"} />);
                                    }
                                    return stars;
                                })()
                            }
                            {
                                (() => {
                                    const stars: React.JSX.Element[] = [];
                                    for(let i = comment.rating; i < 5; ++i) {
                                        stars.push(<Icon.Star key={i} size={"20px"} />);
                                    }
                                    return stars;
                                })()
                            }
                            </CommentScore>
                        </CommentHeaderInfo>
                        <div>
                            <CreatedDate>
                                {comment.date.toLocaleDateString()}
                            </CreatedDate>
                        </div>
                    </CommentHeaderWrapper>
                </CardHeader>
                <CardBody>
                    <p className="text-xl indent-8">
                        { comment.text }
                    </p>
                </CardBody>
            </Card>
        </>
    );
}

export default React.memo(Comment);