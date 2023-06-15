import UserEdit from "./UserEdit";

import { RootState } from "redux/store";

import { connect, ConnectedProps } from "react-redux";

import { getCurrentUser } from "redux/reducers/users/selector";

import { 
    fetchUserById, fetchToUpdateUser,
    setCurrentUser, fetchToCreateUser
} from "redux/reducers/users/usersSlice";



const mapStateToProps = (state: RootState) => ({
    user: getCurrentUser(state)
})

const mapDispatchToProps = {
    fetchUserById, fetchToUpdateUser,
    setCurrentUser, fetchToCreateUser
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IUserEditConnectedProps = ConnectedProps<typeof connector>;

export default connector(UserEdit);

