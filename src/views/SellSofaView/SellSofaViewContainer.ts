import SellSofaView from "./SellSofaView";
import { ConnectedProps, connect } from "react-redux";
import { fetchSellMessage } from "store/reducers/form/FormSlice";
import { setStatus } from "store/reducers/form/FormSlice";
import { getFormLoading, getFormStatus } from "store/reducers/form/FormSelector";
import type { RootState } from "store/store";

const mapStateToProps = (state: RootState) => ({
    status: getFormStatus(state),
    loading: getFormLoading(state),
})

const mapDipatchToProps = {
    fetchSellMessage, setStatus
}

const connector = connect(mapStateToProps, mapDipatchToProps);

export type SellSofaViewConnectedProps = ConnectedProps<typeof connector>;

export default connector(SellSofaView);

