import ConfirmModal from "./ConfirmModal";

import { ConnectedProps, connect } from "react-redux";

import type { RootState } from "redux/store";

import { getConfirmModalMessage as getMessage } from "redux/reducers/styles/selector";
import { getConfirmModalCallback as getCallback } from "redux/reducers/styles/selector";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

const mapStateToProps = (state: RootState) => ({
    message: getMessage(state),
    callback: getCallback(state)
})

const mapDipatchToProps = {
    setConfirmModalData
}

const connector = connect(mapStateToProps, mapDipatchToProps);

export type ConfirmModalConnectedProps = ConnectedProps<typeof connector>;

export default connector(ConfirmModal);