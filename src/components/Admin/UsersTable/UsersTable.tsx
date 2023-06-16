import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd, RemoveBtn, EditBtn, XLgIcon, PencilIcon } from './../AdminStyles';

import { UserTableConnectedProps } from "./UsersTableContainer";

import { NavLink } from "react-router-dom";


interface IUserTableProps extends UserTableConnectedProps {
}

const UsersTable: React.FC<IUserTableProps> = (props) => {
    
    const { users, fetchUsers, fetchToDeleteUser, setConfirmModalData } = props;

    React.useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    const onDeleteClick = (id: string) => {
        setConfirmModalData({ 
            isVisible: true, 
            callback: () => fetchToDeleteUser(id), 
            message: "Are you sure? The user will be deleted..."
        });
    }

    return (
        <>
            <TableWrapper>
                <TableThead>
                    <TableTr>
                        <TableTd>Id</TableTd>
                        <TableTd>Login</TableTd>
                        <TableTd>Role</TableTd>
                        <TableTd>Delete</TableTd>
                        <TableTd>Edit</TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {
                        users.map((user, index) => <>
                                <TableTr key={ user.id }>
                                    <TableTd>{ index+1 }</TableTd>
                                    <TableTd>{ user.login }</TableTd>
                                    <TableTd>{ user.role }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={(ev) => onDeleteClick(user.id)}>
                                            <XLgIcon colorindex={index} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to={`/admin/user/${user.id}`}>
                                            <EditBtn>
                                                <PencilIcon colorindex={index} />
                                            </EditBtn>
                                        </NavLink>
                                    </TableTd>
                                </TableTr>
                            </>
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default UsersTable;