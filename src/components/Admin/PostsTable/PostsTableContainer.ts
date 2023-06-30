import PostsTable from "./PostsTable";

import { connect, ConnectedProps } from "react-redux";

import type { RootState } from "redux/store";

import { getFilteredPosts, getPostsLoading as getLoading, getPostSearch, getPostSelectorType} from "redux/reducers/posts/selector";

import { fetchPosts, fetchToDeletePost } from "redux/reducers/posts/reducer";

import { getIsAuth } from "redux/reducers/auth/selector";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import { setSearchValue, setSelectorType } from "redux/reducers/posts/reducer";

import withAuthRedirect from "components/Hoc/Redirect";


const mapStateToProps = (state: RootState) => ({
    posts: getFilteredPosts(state),
    isAuth: getIsAuth(state),
    loading: getLoading(state),
    search: getPostSearch(state),
    select: getPostSelectorType(state)
})

const mapDispatchToProps = {
    fetchPosts, fetchToDeletePost, setConfirmModalData,
    setSearchValue, setSelectorType
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IBlogsTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(PostsTable));