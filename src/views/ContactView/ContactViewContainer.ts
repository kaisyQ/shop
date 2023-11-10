import ContactView from "./ContactView";

import { ConnectedProps, connect } from "react-redux";

import { setConfirmModalData } from "store/reducers/style/StyleSlice";

import { fetchContactMessage } from "store/reducers/form/FormSlice";

import { RootState } from "store/store";
import { getFormLoading, getFormStatus } from "store/reducers/form/FormSelector";
import { setStatus } from "store/reducers/form/FormSlice";

const mapStateToProps = (state: RootState) => ({
    status: getFormStatus(state),
    loading: getFormLoading(state),
})

const mapDipatchToProps = {
    setConfirmModalData, fetchContactMessage, setStatus
}

const connector = connect(mapStateToProps, mapDipatchToProps);

export type ContactViewConnectedProps = ConnectedProps<typeof connector>;

export default connector(ContactView);

