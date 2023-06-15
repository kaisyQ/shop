import UserEdit from "./UserEdit";

import { RootState } from "redux/store";

import { connect, ConnectedProps } from "react-redux";

import { getCurrentUser } from "redux/reducers/users/selector";
import { getIsAuth } from "redux/reducers/auth/selector";

import { 
    fetchUserById, fetchToUpdateUser,
    setCurrentUser, fetchToCreateUser
} from "redux/reducers/users/usersSlice";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps = (state: RootState) => ({
    user: getCurrentUser(state),
    isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
    fetchUserById, fetchToUpdateUser,
    setCurrentUser, fetchToCreateUser
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IUserEditConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(UserEdit));

