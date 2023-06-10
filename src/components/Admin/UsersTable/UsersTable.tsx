import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd, RemoveBtn, EditBtn, XLgIcon, PencilIcon, defineIconColor } from './../AdminStyles';

import { UserTableConnectedProps } from "./UsersTableContainer";

import { NavLink } from "react-router-dom";


interface IUserTableProps extends UserTableConnectedProps {
}

const UsersTable: React.FC<IUserTableProps> = ({ users, removeUser, setCurrentUser }) => {
    
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
                                    <TableTd>{ user.id }</TableTd>
                                    <TableTd>{ user.login }</TableTd>
                                    <TableTd>{ user.role }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={() => {
                                            removeUser(user.id)
                                        }}>
                                            <XLgIcon color={defineIconColor(index)} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to={'/admin/user'}>
                                            <EditBtn onClick={() => {
                                                setCurrentUser(user.id);
                                            }}>
                                                <PencilIcon color={defineIconColor(index)} />
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