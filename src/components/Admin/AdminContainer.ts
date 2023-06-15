import Admin from "./Admin";

import { ConnectedProps, connect } from "react-redux";

import { getIsAuth, getId, getLogin } from "redux/reducers/auth/selector";

import { RootState } from "redux/store";

const mapStateToProps = (state: RootState) => ({
    isAuth: getIsAuth(state),
    id: getId(state),
    login: getLogin(state),
})


const connector = connect(mapStateToProps, null);

export type AdminConnectedProps = ConnectedProps<typeof connector>;

export default connector(Admin);