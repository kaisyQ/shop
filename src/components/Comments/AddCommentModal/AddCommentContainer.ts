import AddCommentModal from "./AddCommentModal";
import { ConnectedProps, connect } from "react-redux";
import { fetchToCreateComment } from "store/reducers/comment/comment.slice";


const mapDispatchToProps = {
    fetchToCreateComment
};

const connector = connect(null, mapDispatchToProps);

export type AddCommentConnectedProps = ConnectedProps<typeof connector>;

export default connector(AddCommentModal);
