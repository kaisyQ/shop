import React from "react";

import {
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, RemoveBtn, 
    XLgIcon 
} from '../AdminStyles';

import Preloader from "components/Ui/Preloader/Preloader";

import { CommentsTableConnectedProps } from "./CommentTableContainer";

import CommentTableRow from "./CommentTableRow/CommentTableRow";
import { LOADING } from "types/types";

interface CommentsTableProps extends CommentsTableConnectedProps {
}

const CommentsTable: React.FC<CommentsTableProps> = (props) => {
    
    const { fetchComments, loading, comments, setConfirmModalData, fetchToDeleteComment } = props;
    
    React.useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    const deleteComment = React.useCallback((id: string) => {
        setConfirmModalData({ 
            isVisible: true, 
            callback: () => fetchToDeleteComment(id), 
            message: "Are you sure? The comment will be deleted..."
        });
    }, [fetchToDeleteComment, setConfirmModalData]);


    if (loading === LOADING) {
        return <Preloader />;
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
                        <TableTd>Rating</TableTd>
                        <TableTd>Delete</TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                {
                    comments.map((comment, index) => <CommentTableRow
                            index={index}
                            {...comment}
                            key={comment.id}
                            delete={deleteComment}
                        />
                    )
                }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default React.memo(CommentsTable);