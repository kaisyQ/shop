import ConfirmModal from "./ConfirmModal";

import { ConnectedProps, connect } from "react-redux";

import type { RootState } from "store/store";

import { getConfirmModalMessage as getMessage } from "store/reducers/style/StyleSelector";
import { getConfirmModalCallback as getCallback } from "store/reducers/style/StyleSelector";

import { setConfirmModalData } from "store/reducers/style/StyleSlice";

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