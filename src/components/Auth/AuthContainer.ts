import Auth from "./Auth";

import { ConnectedProps, connect } from "react-redux";
import { getIsAuth } from "../../redux/reducers/auth/selector";
import { setAuthData } from "redux/reducers/auth/authSlice";

import { RootState } from "redux/store";

const mapStateToProps = (state: RootState) => ({
    isAuth: getIsAuth(state),
});

const mapDispatchToProps = {
    setAuthData
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AuthConnectedProps = ConnectedProps<typeof connector>;

export default connector(Auth);