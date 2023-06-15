import Header from "./Header";
import { ConnectedProps, connect } from "react-redux";

import { getIsDark } from "../../redux/reducers/styles/selector";
import { setIsDark } from "../../redux/reducers/styles/stylesSlice";

import { RootState } from "redux/store";

const mapStateToProps = (state: RootState) => ({
    isDark: getIsDark(state),
})

const mapDispatchToProps = {
    setIsDark
}

const connector = connect(mapStateToProps, mapDispatchToProps);


export type HeaderConnectedProps = ConnectedProps<typeof connector>;


export default connector(Header);
