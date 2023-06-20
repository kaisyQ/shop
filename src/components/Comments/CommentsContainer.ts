import Comments from "./Comments";

import { ConnectedProps, connect } from "react-redux";

import type { RootState } from "redux/store";

import { getCommentLoadingStatus, getFilteredComments } from "redux/reducers/comment/selector";

import { fetchComments } from "redux/reducers/comment/commentSlice";

const mapStateToProps = (state: RootState) => ({
    comments: getFilteredComments(state),
    loading: getCommentLoadingStatus(state)
})

const mapDispatchToProps = {
    fetchComments
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type CommentsConnectedProps = ConnectedProps<typeof connector>;

export default connector(Comments);
