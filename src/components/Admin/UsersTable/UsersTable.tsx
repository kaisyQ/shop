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
    }, [fetchUsers]);

    const deleteUser = React.useCallback((id: string) => {
            setConfirmModalData({ 
                isVisible: true, 
                callback: () => fetchToDeleteUser(id), 
                message: "Are you sure? The user will be deleted..."
            });
        }, [fetchToDeleteUser, setConfirmModalData]);

    if (loading === LOADING) {
        return <Preloader />;
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
                    users.map((user, index) => <UsersTableRow 
                            index={index}
                            key={user.id}
                            {...user}
                            delete={deleteUser}
                        />
                    )
                }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default React.memo(UsersTable);