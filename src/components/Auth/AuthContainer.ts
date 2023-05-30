import Auth from "./Auth";

import { ConnectedProps, connect } from "react-redux";
import { getIsAuth } from "../../redux/reducers/auth/selector";
import { setAuthData } from "redux/reducers/auth/authSlice";

import { RootState } from "redux/store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { IAuthState } from "redux/reducers/auth/authSlice";

interface IMapStateToPropsType  {
    isAuth: boolean,
}

interface IMapDispatchToPropsType {
    setAuthData: ActionCreatorWithPayload<IAuthState>
}

const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    isAuth: getIsAuth(state),
});

const mapDispatchToProps: IMapDispatchToPropsType = {
    setAuthData
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AuthConnectedProps = ConnectedProps<typeof connector>;

export default connector(Auth);