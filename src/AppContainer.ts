import App from "./App";

import { ConnectedProps, connect } from "react-redux";

import { getConfirmModalVisibility, getIsDark, getIsHint } from "./redux/reducers/styles/selector";
import { setIsDark, setIsHint } from "./redux/reducers/styles/stylesSlice";

import { RootState } from "redux/store";
import { fetchToCheckMe } from "redux/reducers/auth/authSlice";


const mapStateToProps = (state: RootState) => ({
    isDark: getIsDark(state),
    isHint: getIsHint(state),
    confirmModalVisibility: getConfirmModalVisibility(state)
});

const mapDispatchToProps = {
    setIsDark, setIsHint, fetchToCheckMe
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AppConnectedProps = ConnectedProps<typeof connector>;

export default connector(App);