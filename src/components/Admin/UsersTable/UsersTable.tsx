import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd,  } from './../AdminStyles';

import * as Icon from 'react-bootstrap-icons';

import { IUser } from "types/types";

import { UserTableConnectedProps } from "./UsersTableContainer";

interface IUserTableProps extends UserTableConnectedProps {
}

const UsersTable: React.FC<IUserTableProps> = ({ users, removeUser, addUser }) => {
    
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
                                    <TableTd onClick={(ev) => {
                                        removeUser(user.id)
                                    }}>
                                        <Icon.XLg size={'2rem'} />
                                    </TableTd>
                                    <TableTd>
                                        <Icon.Pencil size={'2rem'} />
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