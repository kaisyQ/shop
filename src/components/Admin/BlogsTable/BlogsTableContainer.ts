import BlogsTable from "./BlogsTable";

import { connect, ConnectedProps } from "react-redux";

import { RootState } from "redux/store";

import { getBlogItems as getPosts } from "redux/reducers/blog/selector";
import { removeBlogItem as removePost} from "redux/reducers/blog/reducer";

const mapStateToProps = (state: RootState) => ({
    posts: getPosts(state)
})

const mapDispatchToProps = {
    removePost
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = typeof mapDispatchToProps;

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IBlogsTableConnectedProps = ConnectedProps<typeof connector>;

export default connector(BlogsTable);