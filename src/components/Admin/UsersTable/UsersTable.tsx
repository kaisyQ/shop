import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd, RemoveBtn, EditBtn, XLgIcon, PencilIcon } from './../AdminStyles';

import { UserTableConnectedProps } from "./UsersTableContainer";

import { NavLink } from "react-router-dom";


interface IUserTableProps extends UserTableConnectedProps {
}

const UsersTable: React.FC<IUserTableProps> = ({ users, removeUser, setCurrentUser, fetchUsers }) => {
    
    React.useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    const onEditClick = (ev: React.MouseEvent<HTMLButtonElement>) => {

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
                                        <RemoveBtn onClick={() => {
                                            removeUser(user.id)
                                        }}>
                                            <XLgIcon colorindex={index} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to={'/admin/user'}>
                                            <EditBtn onClick={() => {
                                                setCurrentUser(user.id);
                                            }}>
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