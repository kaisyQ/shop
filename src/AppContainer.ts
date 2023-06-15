import App from "./App";

import { ConnectedProps, connect } from "react-redux";

import { getIsDark } from "./redux/reducers/styles/selector";
import { setIsDark } from "./redux/reducers/styles/stylesSlice";

import { RootState } from "redux/store";
import { fetchToCheckMe } from "redux/reducers/auth/authSlice";


const mapStateToProps = (state: RootState) => ({
    isDark: getIsDark(state)
});

const mapDispatchToProps = {
    setIsDark, fetchToCheckMe
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AppConnectedProps = ConnectedProps<typeof connector>;

export default connector(App);