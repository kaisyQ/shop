import UsersTable from "./UsersTable";

import { RootState } from "redux/store";

import { ConnectedProps, connect } from "react-redux";
import { IUser } from "types/types";
import { getUsers } from "redux/reducers/users/selector";

import { fetchUsers, fetchToDeleteUser } from "redux/reducers/users/usersSlice";


interface IMapStateToPropsType {
    users: IUser[]
}

const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    users: getUsers(state)
});

const mapDispatchToProps = {
    fetchUsers, fetchToDeleteUser
};

export type MapDispatchToProps = typeof mapDispatchToProps;

const connector = connect(mapStateToProps, mapDispatchToProps);

export type UserTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(UsersTable);