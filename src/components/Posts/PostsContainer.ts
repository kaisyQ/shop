import Posts from "./Posts";

import { connect, ConnectedProps } from "react-redux";

import { getPosts } from "../../redux/reducers/posts/selector";

import { RootState } from "redux/store";
import { IPostWithDate } from "types/types";

interface IMapStateToPropsType {
    blogs: IPostWithDate[]
}


const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    blogs: getPosts(state)
})


const connector = connect(mapStateToProps, null);

export type BlogsConnectedProps = ConnectedProps<typeof connector>;

export default connector(Posts);