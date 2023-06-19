import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd } from './../AdminStyles';

import { UserTableConnectedProps } from "./UsersTableContainer";

import UsersTableRow from "./UsersTableRow/UsersTableRow";

interface IUserTableProps extends UserTableConnectedProps {
}

const UsersTable: React.FC<IUserTableProps> = (props) => {
    
    const { users, fetchUsers, fetchToDeleteUser, setConfirmModalData } = props;

    React.useEffect(() => {
        fetchUsers();
    }, [fetchUsers])
    
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
                               <UsersTableRow 
                                    index={index}
                                    key={user.id}
                                    {...user}
                                    fetchToDeleteUser={fetchToDeleteUser}
                                    setConfirmModalData={setConfirmModalData}
                               />
                            </>
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default UsersTable;