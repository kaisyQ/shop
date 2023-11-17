import Comments from "./Comments";

import { ConnectedProps, connect } from "react-redux";

import type { RootState } from "store/store";

import { getCommentLoadingStatus, getFilteredComments } from "store/reducers/comment/CommentSelector";

import { fetchComments } from "store/reducers/comment/CommentSlice";

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
