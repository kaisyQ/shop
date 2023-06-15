import PostsTable from "./PostsTable";

import { connect, ConnectedProps } from "react-redux";

import { RootState } from "redux/store";

import { getPosts } from "redux/reducers/posts/selector";

import { fetchPosts, fetchToDeletePost } from "redux/reducers/posts/reducer";

import { getIsAuth } from "redux/reducers/auth/selector";

import withAuthRedirect from "components/Hoc/Redirect";


const mapStateToProps = (state: RootState) => ({
    posts: getPosts(state),
    isAuth: getIsAuth(state)
})

const mapDispatchToProps = {
    fetchPosts, fetchToDeletePost
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IBlogsTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(PostsTable));