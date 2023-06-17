import CommentsTable from "./CommentsTable";

import { ConnectedProps, connect } from "react-redux";

import { fetchComments, fetchToDeleteComment } from "redux/reducers/comment/commentSlice";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { getComments } from "redux/reducers/comment/selector";

import type { RootState } from "redux/store";

const mapStateToProps = (state: RootState) => ({
    comments: getComments(state)
})

const mapDispatchToProps = {
    fetchComments, fetchToDeleteComment, setConfirmModalData
}


const connector = connect(mapStateToProps, mapDispatchToProps);

export type CommentsTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(CommentsTable);
