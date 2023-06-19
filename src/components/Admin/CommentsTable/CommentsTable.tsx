import React from "react";

import {
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, RemoveBtn, 
    XLgIcon 
} from '../AdminStyles';


import { CommentsTableConnectedProps } from "./CommentTableContainer";

import CommentTableRow from "./CommentTableRow/CommentTableRow";

interface CommentsTableProps extends CommentsTableConnectedProps {
}

const CommentsTable: React.FC<CommentsTableProps> = (props) => {
    
    const { fetchComments, comments, fetchToDeleteComment, ...rowProps } = props;
    
    React.useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    return (
        <>
            <TableWrapper>
                <TableThead>
                    <TableTr>
                        <TableTd>Id</TableTd>
                        <TableTd>Author</TableTd>
                        <TableTd>Date</TableTd>
                        <TableTd>Text</TableTd>
                        <TableTd>Rating</TableTd>
                        <TableTd>Delete</TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {
                        comments.map((comment, index) => <>
                               <CommentTableRow
                                    fetchToDeleteComment={fetchToDeleteComment}
                                    index={index}
                                    {...comment}
                                    {...rowProps} 
                                    key={comment.id}
                                />
                            </>
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default CommentsTable;