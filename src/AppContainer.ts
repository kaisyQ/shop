import App from "./App";

import { ConnectedProps, connect } from "react-redux";

import { getConfirmModalVisibility, getIsDark, getIsHint } from "./store/reducers/style/StyleSelector";
import { setIsDark, setIsHint } from "./store/reducers/style/StyleSlice";

import type { RootState } from "store/store";


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