import CommentsTable from "./CommentsTable";

import { ConnectedProps, connect } from "react-redux";

import { fetchComments, fetchToDeleteComment } from "redux/reducers/comment/commentSlice";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { getCommentSelectorType, getFilteredAdminComments } from "redux/reducers/comment/selector";

import type { RootState } from "redux/store";

import { getCommentLoadingStatus as getLoading } from "redux/reducers/comment/selector";

import withAuthRedirect from "components/Hoc/Redirect";

import { getIsAuth } from "redux/reducers/auth/selector";

import { setSelectorType } from "redux/reducers/comment/commentSlice";

const mapStateToProps = (state: RootState) => ({
    comments: getFilteredAdminComments(state),
    loading: getLoading(state),
    isAuth: getIsAuth(state),
    select: getCommentSelectorType(state)
})

const mapDispatchToProps = {
    fetchComments, fetchToDeleteComment, setConfirmModalData,
    setSelectorType
}


const connector = connect(mapStateToProps, mapDispatchToProps);

export type CommentsTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(CommentsTable));
