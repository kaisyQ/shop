import SellSofaView from "./SellSofaView";

import { ConnectedProps, connect } from "react-redux";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { fetchSellMessage } from "redux/reducers/forms/formsSlice";

import { setStatus } from "redux/reducers/forms/formsSlice";
import { getFormStatus } from "redux/reducers/forms/selector";
import { RootState } from "redux/store";

const mapStateToProps = (state: RootState) => ({
    status: getFormStatus(state)
})

const mapDipatchToProps = {
    setConfirmModalData, fetchSellMessage, setStatus
}

const connector = connect(mapStateToProps, mapDipatchToProps);

export type SellSofaViewConnectedProps = ConnectedProps<typeof connector>;

export default connector(SellSofaView);

