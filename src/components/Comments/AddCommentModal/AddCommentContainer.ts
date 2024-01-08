import AddCommentModal from "./AddCommentModal";

import { ConnectedProps, connect } from "react-redux";

import { addComment, fetchToCreateComment } from "store/reducers/comment/comment.slice";


const mapDispatchToProps = {
    addComment, fetchToCreateComment
};

const connector = connect(null, mapDispatchToProps);

export type AddCommentConnectedProps = ConnectedProps<typeof connector>;

export default connector(AddCommentModal);
