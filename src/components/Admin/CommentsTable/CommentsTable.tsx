import React from "react";

import {
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, FilterSearch, FilterWrapper
} from '../AdminStyles';

import Preloader from "components/Ui/Preloader/Preloader";

import { CommentsTableConnectedProps } from "./CommentTableContainer";

import CommentTableRow from "./CommentTableRow/CommentTableRow";

import { LOADING } from "constants/constants";

import type { SelectType } from "types/types";

import { SELECT_NEWEST, SELECT_OLDEST } from "constants/constants";

interface CommentsTableProps extends CommentsTableConnectedProps {
}

const CommentsTable: React.FC<CommentsTableProps> = (props) => {
    
    const { 
        fetchComments, loading, comments,
        setConfirmModalData, fetchToDeleteComment, select,
        setSelectorType, 
    
    } = props;
    
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
            <FilterWrapper>
                <div>
                    <h3>Sort by</h3>
                    <select name="" id="" onChange={(ev) => setSelectorType(ev.target.value as SelectType)}>
                        <option selected={select===SELECT_OLDEST} value={SELECT_OLDEST}>Oldest</option>
                        <option selected={select===SELECT_NEWEST} value={SELECT_NEWEST}>Newest</option>
                    </select>
                </div>
            </FilterWrapper>
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