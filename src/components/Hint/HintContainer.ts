import { getIsAuth } from "redux/reducers/auth/selector";
import Hint from "./Hint";

import { ConnectedProps, connect } from "react-redux";
import { getIsHint } from "redux/reducers/styles/selector";

import { setIsHint } from "redux/reducers/styles/stylesSlice";

import type { RootState } from "redux/store";

const mapStateToProps = (state: RootState) => ({
    isHint: getIsHint(state)
})

const mapDipatchToProps = {
    setIsHint
};

const connector = connect(mapStateToProps, mapDipatchToProps);

export type HintConnectedProps = ConnectedProps<typeof connector>;

export default connector(Hint);
