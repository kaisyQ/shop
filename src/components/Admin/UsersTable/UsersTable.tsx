import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd } from './../AdminStyles';

import { UserTableConnectedProps } from "./UsersTableContainer";

import UsersTableRow from "./UsersTableRow/UsersTableRow";

import { LOADING } from "types/types";

import Preloader from "components/Ui/Preloader/Preloader";

interface IUserTableProps extends UserTableConnectedProps {
}

const UsersTable: React.FC<IUserTableProps> = (props) => {
    
    const { users, loading, fetchUsers, fetchToDeleteUser, setConfirmModalData } = props;

    React.useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    if (loading === LOADING) {
        return <Preloader />
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
                    users.map((user, index) => {
                            return <>
                                <UsersTableRow 
                                        index={index}
                                        key={user.id}
                                        {...user}
                                        fetchToDeleteUser={fetchToDeleteUser}
                                        setConfirmModalData={setConfirmModalData}
                                />
                            </>
                        }
                    )
                }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default UsersTable;