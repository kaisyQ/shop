import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon, TableTdInner } from "components/Admin/AdminStyles";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { RatingScore } from "types/types";

import { ConfirmModalData } from "redux/reducers/styles/stylesSlice";

interface ITableRowProps{
    id: string,
    author: string,
    date: Date,
    text: string,
    index: number,
    rating: RatingScore,
    setConfirmModalData: ActionCreatorWithPayload<ConfirmModalData>,
    fetchToDeleteComment: (arg: string) => Promise<any>
}

const TableRow: React.FC<ITableRowProps> = (props) => {

    const onDeleteClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        props.setConfirmModalData({ 
            isVisible: true, 
            callback: () => props.fetchToDeleteComment(props.id), 
            message: "Are you sure? The comment will be deleted..."
        });
    }

    return (
        <>
            <TableTr key={ props.id }>
                <TableTd>
                    <TableTdInner>{ props.index+1 }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.author }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.date.toLocaleDateString() }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.text }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.rating }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>
                        <RemoveBtn onClick={onDeleteClick}>
                            <XLgIcon colorindex={props.index} />
                        </RemoveBtn>
                    </TableTdInner>
                </TableTd>
            </TableTr>
        </>
    );
}

export default React.memo(TableRow);