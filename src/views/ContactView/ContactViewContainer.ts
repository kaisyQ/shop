import ContactView from "./ContactView";

import { ConnectedProps, connect } from "react-redux";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { fetchContactMessage } from "redux/reducers/forms/formsSlice";

import { RootState } from "redux/store";
import { getFormStatus } from "redux/reducers/forms/selector";
import { setStatus } from "redux/reducers/forms/formsSlice";

const mapStateToProps = (state: RootState) => ({
    status: getFormStatus(state)
})

const mapDipatchToProps = {
    setConfirmModalData, fetchContactMessage, setStatus
}

const connector = connect(mapStateToProps, mapDipatchToProps);

export type ContactViewConnectedProps = ConnectedProps<typeof connector>;

export default connector(ContactView);

