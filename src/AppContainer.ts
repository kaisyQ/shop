import App from "./App";
import { ConnectedProps, connect } from "react-redux";
import { getIsDark } from "./store/reducers/style/StyleSelector";
import { setIsDark } from "./store/reducers/style/StyleSlice";
import type { RootState } from "store/store";


const mapStateToProps = (state: RootState) => ({
    isDark: getIsDark(state),
});

const mapDispatchToProps = {
    setIsDark
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AppConnectedProps = ConnectedProps<typeof connector>;

export default connector(App);