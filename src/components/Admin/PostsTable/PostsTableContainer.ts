import PostsTable from "./PostsTable";

import { connect, ConnectedProps } from "react-redux";

import { RootState } from "redux/store";

import { getPosts } from "redux/reducers/posts/selector";
import { fetchPosts, fetchToDeletePost } from "redux/reducers/posts/reducer";


const mapStateToProps = (state: RootState) => ({
    posts: getPosts(state)
})

const mapDispatchToProps = {
    fetchPosts, fetchToDeletePost
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IBlogsTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(PostsTable);