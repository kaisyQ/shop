import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon, EditBtn, PencilIcon } from "components/Admin/AdminStyles";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { NavLink } from "react-router-dom";

import { ConfirmModalData } from "redux/reducers/styles/stylesSlice";

interface ITableRowProps{
    id: string,
    title: string,
    text: string,
    imageSrc: string,
    date: Date
    index: number,
    setConfirmModalData: ActionCreatorWithPayload<ConfirmModalData>,
    fetchToDeletePost: (arg: string) => Promise<any>
}

const PostsTableRow: React.FC<ITableRowProps> = (props) => {

    const onDeleteClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        props.setConfirmModalData({ 
            isVisible: true, 
            callback: () => props.fetchToDeletePost(props.id), 
            message: "Are you sure? The comment will be deleted..."
        });
    }

    return (
        <>
            <TableTr key={ props.id }>
                <TableTd>{ props.index+1 }</TableTd>
                <TableTd>{ props.title }</TableTd>
                <TableTd>{ props.date.toLocaleDateString() }</TableTd>
                <TableTd>{ props.text }</TableTd>
                <TableTd>
                    <RemoveBtn onClick={onDeleteClick}>
                        <XLgIcon colorindex={props.index} />
                    </RemoveBtn>
                </TableTd>
                <TableTd>
                    <NavLink to={`/admin/post/${props.id}`}>
                        <EditBtn>
                            <PencilIcon colorindex={props.index} />
                        </EditBtn>
                    </NavLink>
                </TableTd>
            </TableTr>
        </>
    );
}

export default React.memo(PostsTableRow);