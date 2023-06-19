import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon } from "components/Admin/AdminStyles";

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
                <TableTd>{ props.index+1 }</TableTd>
                <TableTd>{ props.author }</TableTd>
                <TableTd>{ props.date.toLocaleDateString() }</TableTd>
                <TableTd>{ props.text }</TableTd>
                <TableTd>{ props.rating }</TableTd>
                <TableTd>
                    <RemoveBtn onClick={onDeleteClick}>
                        <XLgIcon colorindex={props.index} />
                    </RemoveBtn>
                </TableTd>
            </TableTr>
        </>
    );
}

export default React.memo(TableRow);