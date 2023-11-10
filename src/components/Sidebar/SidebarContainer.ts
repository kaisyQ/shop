import Sidebar from "./Sidebar"
import { ConnectedProps, connect } from "react-redux"


import { setIsDark } from "../../store/reducers/style/StyleSlice"

const mapDispatchToProps = {
    setIsDark
};

const connector = connect(null, mapDispatchToProps);

export type SidebarConnectedProps = ConnectedProps<typeof connector>;


export default connector(Sidebar);