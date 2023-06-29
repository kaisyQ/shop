import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon, EditBtn, PencilIcon, TableTdInner } from "components/Admin/AdminStyles";

import { NavLink } from "react-router-dom";

interface ITableRowProps{
    id: string,
    price: number,
    name: string
    count: number,
    index: number,
    delete: (id: string) => void
}

const ProductsTableRow: React.FC<ITableRowProps> = (props) => {

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
                        <RemoveBtn onClick={(ev) => props.delete(props.id)}>
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