import App from "./App";

import { ConnectedProps, connect } from "react-redux";

import { getConfirmModalVisibility, getIsDark, getIsHint } from "./redux/reducers/styles/selector";
import { setIsDark, setIsHint } from "./redux/reducers/styles/stylesSlice";

import type { RootState } from "redux/store";


const mapStateToProps = (state: RootState) => ({
    isDark: getIsDark(state),
    isHint: getIsHint(state),
    confirmModalVisibility: getConfirmModalVisibility(state)
});

const mapDispatchToProps = {
    setIsDark, setIsHint
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AppConnectedProps = ConnectedProps<typeof connector>;

export default connector(App);