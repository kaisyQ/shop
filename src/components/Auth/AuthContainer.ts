import Auth from "./Auth";

import { ConnectedProps, connect } from "react-redux";
import { getIsAuth } from "../../redux/reducers/auth/selector";
import { fetchToLogin } from "redux/reducers/auth/authSlice";

import { RootState } from "redux/store";

const mapStateToProps = (state: RootState) => ({
    isAuth: getIsAuth(state),
});

const mapDispatchToProps = {
    fetchToLogin
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AuthConnectedProps = ConnectedProps<typeof connector>;

export default connector(Auth);