import PostEditApiContainer from "./PostEditApiContainer";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "redux/store";

import { getCurrentPost } from "redux/reducers/posts/selector";

import { 
    updatePost, fetchPostById, fetchToCreatePost, setCurrent, fetchToUpdatePost
} from "redux/reducers/posts/reducer";

const mapStateToProps = (state: RootState) => ({
    post: getCurrentPost(state)
});

const mapDispatchToProps = {
    updatePost, fetchPostById, fetchToCreatePost, setCurrent, fetchToUpdatePost
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IPostEditApiConnectedProps = ConnectedProps<typeof connector>;

export default connector(PostEditApiContainer);