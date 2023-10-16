import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon, TableTdInner } from "components/Admin/AdminStyles";
import { NavLink } from "react-router-dom";
import { EditBtn } from "components/Admin/AdminStyles";
import { PencilIcon } from "components/Admin/AdminStyles";
interface ITableRowProps{
    id: string,
    name: string,
    index: number,
    slug: string
    delete: (slug: string) => void
}

const TableRow: React.FC<ITableRowProps> = (props) => {

    return (
        <>
            <TableTr key={ props.id }>
                <TableTd>
                    <TableTdInner>{ props.index + 1 }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.name }</TableTdInner>
                </TableTd>
               
                <TableTd>
                    <TableTdInner>
                        <RemoveBtn onClick={(ev) => props.delete(props.slug)}>
                            <XLgIcon colorindex={props.index} />
                        </RemoveBtn>
                    </TableTdInner>
                </TableTd>

                <TableTd>
                    <TableTdInner>
                        <NavLink to={`/admin/category/update/${props.slug}`}>
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

export default React.memo(TableRow);