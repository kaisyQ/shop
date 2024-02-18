import AddCommentModal from "./AddCommentModal";
import { ConnectedProps, connect } from "react-redux";
import { getCommentMessage } from "store/reducers/comment/comment.selector";
import { fetchToCreateComment } from "store/reducers/comment/comment.slice";
import { setMessage as setCommentMessage } from "store/reducers/comment/comment.slice";
import type { RootState } from "store/store";


const mapDispatchToProps = {
    fetchToCreateComment,
    setCommentMessage
};

const mapStateToProps = (state: RootState) => ({
    message: getCommentMessage(state)
})

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AddCommentConnectedProps = ConnectedProps<typeof connector>;

export default connector(AddCommentModal);
