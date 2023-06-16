import Admin from "./Admin";

import { ConnectedProps, connect } from "react-redux";

import { getIsAuth, getId, getLogin, getRole } from "redux/reducers/auth/selector";

import type { RootState } from "redux/store";

import { fetchToLogout } from "redux/reducers/auth/authSlice";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps = (state: RootState) => ({
    isAuth: getIsAuth(state),
    id: getId(state),
    login: getLogin(state),
    role: getRole(state)
})

const mapDipatchToProps = {
    fetchToLogout, setConfirmModalData
}


const connector = connect(mapStateToProps, mapDipatchToProps);

export type AdminConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(Admin));