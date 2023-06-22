import SellSofaView from "./SellSofaView";

import { ConnectedProps, connect } from "react-redux";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { fetchSellMessage } from "redux/reducers/forms/formsSlice";

const mapDipatchToProps = {
    setConfirmModalData, fetchSellMessage
}

const connector = connect(null, mapDipatchToProps);

export type SellSofaViewConnectedProps = ConnectedProps<typeof connector>;

export default connector(SellSofaView);

