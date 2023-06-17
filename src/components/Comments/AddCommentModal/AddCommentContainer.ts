import AddCommentModal from "./AddCommentModal";

import { ConnectedProps, connect } from "react-redux";

import { addComment } from "redux/reducers/comment/commentSlice";

const mapDispatchToProps = {
    addComment
};

const connector = connect(null, mapDispatchToProps);

export type AddCommentConnectedProps = ConnectedProps<typeof connector>;

export default connector(AddCommentModal);
