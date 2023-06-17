import StarsFilter from "./StarsFilter";

import { ConnectedProps, connect } from "react-redux";

import type { RootState } from "redux/store";

import { setFilterScore } from "redux/reducers/comment/commentSlice";

import { getFilterScore } from "redux/reducers/comment/selector";

const mapStateToProps = (state: RootState) => ({
    filterScore: getFilterScore(state)
})

const mapDispatchToProps = {
    setFilterScore 
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type StarsConnectedProps = ConnectedProps<typeof connector>;

export default connector(StarsFilter);