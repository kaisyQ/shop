import Comments from "./Comments";

import { ConnectedProps, connect } from "react-redux";

import type { RootState } from "redux/store";

import { getFilteredComments } from "redux/reducers/comment/selector";

const mapStateToProps = (state: RootState) => ({
    comments: getFilteredComments(state)
})

const connector = connect(mapStateToProps, null);

export type CommentsConnectedProps = ConnectedProps<typeof connector>;

export default connector(Comments);
