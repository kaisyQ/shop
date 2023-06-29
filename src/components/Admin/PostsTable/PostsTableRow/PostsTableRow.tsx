import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon, EditBtn, PencilIcon, TableTdInner } from "components/Admin/AdminStyles";

import { NavLink } from "react-router-dom";

interface ITableRowProps{
    id: string,
    title: string,
    text: string,
    imageSrc: string,
    date: Date
    index: number,
    delete: (id: string) => void
}

const PostsTableRow: React.FC<ITableRowProps> = (props) => {

    return (
        <>
            <TableTr key={ props.id }>
                <TableTd>
                    <TableTdInner>{ props.index+1 }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.title }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.date.toLocaleDateString() }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.text }</TableTdInner>
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
                        <NavLink to={`/admin/post/${props.id}`}>
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

export default React.memo(PostsTableRow);