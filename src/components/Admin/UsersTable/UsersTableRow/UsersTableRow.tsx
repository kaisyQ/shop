import React from "react";

import { 
    TableTr, TableTd, RemoveBtn, 
    XLgIcon, EditBtn, PencilIcon, 
    TableTdInner 
} from "components/Admin/AdminStyles";

import { NavLink } from "react-router-dom";

import { Role } from "types/types";

interface ITableRowProps{
    id: string,
    index: number,
    login: string,
    role: Role
    delete: (id: string) => void
}

const UsersTableRow: React.FC<ITableRowProps> = (props) => {

    return (
        <>
            <TableTr key={ props.id }>
                <TableTd>
                    <TableTdInner>{ props.index+1 }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.login }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.role }</TableTdInner>
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
                        <NavLink to={`/admin/user/${props.id}`}>
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

export default React.memo(UsersTableRow);