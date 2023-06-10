import Posts from "./Posts";

import { connect, ConnectedProps } from "react-redux";

import { getPosts } from "../../redux/reducers/posts/selector";

import { RootState } from "redux/store";
import { IPostWithDate } from "types/types";
import { fetchPosts } from "redux/reducers/posts/reducer";

interface IMapStateToPropsType {
    posts: IPostWithDate[]
}


const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    posts: getPosts(state)
})

const mapDispatchToProps = {
    fetchPosts
}

export type MapDispatchToPropsType = typeof mapDispatchToProps;


const connector = connect(mapStateToProps, mapDispatchToProps);

export type PostsConnectedProps = ConnectedProps<typeof connector>;

export default connector(Posts);