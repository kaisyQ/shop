import AddCommentModal from "./AddCommentModal";

import { ConnectedProps, connect } from "react-redux";

import { addComment, fetchToCreateComment } from "redux/reducers/comment/commentSlice";


const mapDispatchToProps = {
    addComment, fetchToCreateComment
};

const connector = connect(null, mapDispatchToProps);

export type AddCommentConnectedProps = ConnectedProps<typeof connector>;

export default connector(AddCommentModal);
