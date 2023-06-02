import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd, RemoveBtn, EditBtn } from './../AdminStyles';

import * as Icon from 'react-bootstrap-icons';

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
                        <TableTd></TableTd>
                        <TableTd></TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {
                        users.map(user => <>
                                <TableTr key={ user.id }>
                                    <TableTd>{ user.id }</TableTd>
                                    <TableTd>{ user.login }</TableTd>
                                    <TableTd>{ user.role }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={() => {
                                            removeUser(user.id)
                                        }}>
                                            <Icon.XLg size={'2rem'} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to={'/admin/user'}>
                                            <EditBtn onClick={() => {
                                                setCurrentUser(user.id);
                                            }}>
                                                <Icon.Pencil size={'2rem'} />
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