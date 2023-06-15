import Posts from "./Posts";

import { connect, ConnectedProps } from "react-redux";

import { getPosts } from "../../redux/reducers/posts/selector";

import { RootState } from "redux/store";
import { fetchPosts } from "redux/reducers/posts/reducer";


const mapStateToProps = (state: RootState) => ({
    posts: getPosts(state)
})

const mapDispatchToProps = {
    fetchPosts
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PostsConnectedProps = ConnectedProps<typeof connector>;

export default connector(Posts);