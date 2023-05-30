import UsersTable from "./UsersTable";

import { RootState } from "redux/store";

import { ConnectedProps, connect } from "react-redux";
import { IUser } from "types/types";
import { getUsers } from "redux/reducers/users/selector";

import { addUser, removeUser } from "redux/reducers/users/usersSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface IMapStateToPropsType {
    users: IUser[]
}

interface IMapDispatchToPropsType {
    addUser: ActionCreatorWithPayload<IUser>,
    removeUser: ActionCreatorWithPayload<number>
}

const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    users: getUsers(state)
});

const mapDispatchToProps: IMapDispatchToPropsType = {
    addUser, removeUser
};


const connector = connect(mapStateToProps, mapDispatchToProps);

export type UserTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(UsersTable);