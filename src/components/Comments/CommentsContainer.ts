import Comments from "./Comments";

import { ConnectedProps, connect } from "react-redux";

import type { RootState } from "store/store";

import { getCommentLoadingStatus, getComments } from "store/reducers/comment/comment.selector";

import { fetchComments } from "store/reducers/comment/comment.slice";

const mapStateToProps = (state: RootState) => ({
    comments: getComments(state),
    loading: getCommentLoadingStatus(state)
})

const mapDispatchToProps = {
    fetchComments
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type CommentsConnectedProps = ConnectedProps<typeof connector>;

export default connector(Comments);
