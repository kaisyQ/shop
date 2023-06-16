import UsersTable from "./UsersTable";

import { RootState } from "redux/store";

import { ConnectedProps, connect } from "react-redux";
import { getUsers } from "redux/reducers/users/selector";
import { getIsAuth } from "redux/reducers/auth/selector";

import { fetchUsers, fetchToDeleteUser } from "redux/reducers/users/usersSlice";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps = (state: RootState) => ({
    users: getUsers(state),
    isAuth: getIsAuth(state)
});

const mapDispatchToProps = {
    fetchUsers, fetchToDeleteUser, setConfirmModalData
};

export type MapDispatchToProps = typeof mapDispatchToProps;

const connector = connect(mapStateToProps, mapDispatchToProps);

export type UserTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(UsersTable));