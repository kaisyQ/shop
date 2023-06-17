import React from "react";

import {
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, RemoveBtn, 
    EditBtn, XLgIcon, PencilIcon 
} from '../AdminStyles';


import { NavLink } from "react-router-dom";

import { CommentsTableConnectedProps } from "./CommentTableContainer";

interface CommentsTableProps extends CommentsTableConnectedProps {
}

const CommentsTable: React.FC<CommentsTableProps> = (props) => {
    
    const { comments, fetchComments, fetchToDeleteComment, setConfirmModalData } = props;
    
    React.useEffect(() => {
        fetchComments();
    }, [fetchComments, comments]);


    const onDeleteClick = (id: string) => {
        setConfirmModalData({ 
            isVisible: true, 
            callback: () => fetchToDeleteComment(id), 
            message: "Are you sure? The comment will be deleted..."
        });
    }

    return (
        <>
            <TableWrapper>
                <TableThead>
                    <TableTr>
                        <TableTd>Id</TableTd>
                        <TableTd>Author</TableTd>
                        <TableTd>Date</TableTd>
                        <TableTd>Text</TableTd>
                        <TableTd>Delete</TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {
                        comments.map((comment, index) => <>
                                <TableTr key={ comment.id }>
                                    <TableTd>{ index+1 }</TableTd>
                                    <TableTd>{ comment.author }</TableTd>
                                    <TableTd>{ comment.date.toLocaleDateString() }</TableTd>
                                    <TableTd>{ comment.text }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={(ev) => onDeleteClick(comment.id)}>
                                            <XLgIcon colorindex={index} />
                                        </RemoveBtn>
                                    </TableTd>
                                </TableTr>
                            </>
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default CommentsTable;