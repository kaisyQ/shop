import Blogs from "./Blogs";

import { connect, ConnectedProps } from "react-redux";

import { getBlogItems } from "../../redux/reducers/blog/selector";

import { RootState } from "redux/store";
import { IBlogType } from "types/types";

interface IMapStateToPropsType {
    blogs: IBlogType[]
}


const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    blogs: getBlogItems(state)
})


const connector = connect(mapStateToProps, null);

export type BlogsConnectedProps = ConnectedProps<typeof connector>;

export default connector(Blogs);