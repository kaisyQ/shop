import SellSofaView from "./SellSofaView";

import { ConnectedProps, connect } from "react-redux";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

const mapDipatchToProps = {
    setConfirmModalData
}

const connector = connect(null, mapDipatchToProps);

export type SellSofaViewConnectedProps = ConnectedProps<typeof connector>;

export default connector(SellSofaView);

