import Hint from "./Hint";

import { ConnectedProps, connect } from "react-redux";

import { setIsHint } from "redux/reducers/styles/stylesSlice";

const mapDipatchToProps = {
    setIsHint
};

const connector = connect(null, mapDipatchToProps);

export type HintConnectedProps = ConnectedProps<typeof connector>;

export default connector(Hint);
