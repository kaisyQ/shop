import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon, EditBtn, PencilIcon } from "components/Admin/AdminStyles";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { NavLink } from "react-router-dom";

import { ConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { Role } from "types/types";

interface ITableRowProps{
    id: string,
    index: number,
    login: string,
    role: Role
    setConfirmModalData: ActionCreatorWithPayload<ConfirmModalData>,
    fetchToDeleteUser: (arg: string) => Promise<any>
}

const UsersTableRow: React.FC<ITableRowProps> = (props) => {

    const onDeleteClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        props.setConfirmModalData({ 
            isVisible: true, 
            callback: () => props.fetchToDeleteUser(props.id), 
            message: "Are you sure? The comment will be deleted..."
        });
    }

    return (
        <>
            <TableTr key={ props.id }>
                <TableTd>{ props.index+1 }</TableTd>
                <TableTd>{ props.login }</TableTd>
                <TableTd>{ props.role }</TableTd>
                <TableTd>
                    <RemoveBtn onClick={onDeleteClick}>
                        <XLgIcon colorindex={props.index} />
                    </RemoveBtn>
                </TableTd>
                <TableTd>
                    <NavLink to={`/admin/user/${props.id}`}>
                        <EditBtn>
                            <PencilIcon colorindex={props.index} />
                        </EditBtn>
                    </NavLink>
                </TableTd>
            </TableTr>
        </>
    );
}

export default React.memo(UsersTableRow);