import Auth from "./Auth"

import { ConnectedProps, connect } from "react-redux"
import { signInThunk as signIn } from "../../redux/reducers/auth/authSlice"
import { getIsAuth } from "../../redux/reducers/auth/selector"

import { RootState } from "redux/store"


interface IMapStateToPropsType  {
    isAuth: boolean
}

/*
            исправить dispatch тип any
*/

interface IMapDispatchToPropsType {
    signIn: (login: string, password: string) => (dispatch: any) => Promise<void>
}

const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    isAuth: getIsAuth(state)
});

const mapDispatchToProps: IMapDispatchToPropsType = {
    signIn
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AuthConnectedProps = ConnectedProps<typeof connector>;

export default connector(Auth);