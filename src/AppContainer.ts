import App from "./App";

import { ConnectedProps, connect } from "react-redux";

import { getIsDark } from "./redux/reducers/styles/selector";
import { setIsDark } from "./redux/reducers/styles/stylesSlice";

import { RootState } from "redux/store";

interface IMapStateToPropsType {
    isDark: boolean
}

interface IMapDispatchToPropsType {
    setIsDark: typeof setIsDark
}

const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    isDark: getIsDark(state)
});

const mapDispatchToProps: IMapDispatchToPropsType = {
    setIsDark
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AppConnectedProps = ConnectedProps<typeof connector>;

export default connector(App);