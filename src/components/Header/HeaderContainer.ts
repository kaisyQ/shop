import Header from "./Header";
import { ConnectedProps, connect } from "react-redux";

import { getIsDark } from "../../redux/reducers/styles/selector";
import { setIsDark } from "../../redux/reducers/styles/stylesSlice";

import { RootState } from "redux/store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";


interface IMapStateToPropsType {
    isDark: boolean
}

interface IMapDispatchToPropsType {
    setIsDark: ActionCreatorWithPayload<boolean>
}

const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    isDark: getIsDark(state),
})

const mapDispatchToProps: IMapDispatchToPropsType = {
    setIsDark
}

const connector = connect(mapStateToProps, mapDispatchToProps);


export type HeaderConnectedProps = ConnectedProps<typeof connector>;


export default connector(Header);
