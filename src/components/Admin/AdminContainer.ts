import Admin from "./Admin";

import { ConnectedProps, connect } from "react-redux";

import { getIsAuth, getId, getLogin, getRole } from "redux/reducers/auth/selector";

import type { RootState } from "redux/store";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps = (state: RootState) => ({
    isAuth: getIsAuth(state),
    id: getId(state),
    login: getLogin(state),
    role: getRole(state)
})


const connector = connect(mapStateToProps, null);

export type AdminConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(Admin));