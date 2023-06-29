import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon, EditBtn, PencilIcon, TableTdInner } from "components/Admin/AdminStyles";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { NavLink } from "react-router-dom";

import { ConfirmModalData } from "redux/reducers/styles/stylesSlice";

interface ITableRowProps{
    id: string,
    price: number,
    name: string
    count: number,
    index: number,
    setConfirmModalData: ActionCreatorWithPayload<ConfirmModalData>,
    fetchToDeleteProduct: (arg: string) => Promise<any>
}

const ProductsTableRow: React.FC<ITableRowProps> = (props) => {

    const onDeleteClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        props.setConfirmModalData({ 
            isVisible: true, 
            callback: () => props.fetchToDeleteProduct(props.id), 
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
                    <TableTdInner>{ props.name }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.price }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.count }</TableTdInner>
                </TableTd>
                <TableTd>
                <TableTdInner>
                    <RemoveBtn onClick={onDeleteClick}>
                        <XLgIcon colorindex={props.index} />
                    </RemoveBtn>
                </TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>
                        <NavLink to={`/admin/product/${props.id}`}>
                            <EditBtn>
                                <PencilIcon colorindex={props.index} />
                            </EditBtn>
                        </NavLink>
                    </TableTdInner>
                </TableTd>
            </TableTr>
        </>
    );
}

export default React.memo(ProductsTableRow);