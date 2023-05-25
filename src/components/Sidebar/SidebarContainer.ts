import Sidebar from "./Sidebar"
import { ConnectedProps, connect } from "react-redux"


import { setIsDark } from "../../redux/reducers/styles/stylesSlice"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"


interface IMapDispatchToPropsType {
    setIsDark: ActionCreatorWithPayload<boolean>
}

const mapDispatchToProps: IMapDispatchToPropsType = {
    setIsDark
};

const connector = connect(null, mapDispatchToProps);

export type SidebarConnectedProps = ConnectedProps<typeof connector>;


export default connector(Sidebar);