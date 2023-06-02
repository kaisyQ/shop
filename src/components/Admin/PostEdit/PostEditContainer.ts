import PostEdit from "./PostEdit";

import { connect, ConnectedProps } from "react-redux";

import { RootState } from "redux/store";

import { getCurrentPost } from "redux/reducers/posts/selector";

import { createPost, updatePost } from "redux/reducers/posts/reducer";

const mapStateToProps = (state: RootState) => ({
    post: getCurrentPost(state)
});

const mapDispatchToProps = {
    createPost, updatePost
};

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToPropsType = typeof mapDispatchToProps;

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IPostEditConnectedProps = ConnectedProps<typeof connector>;

export default connector(PostEdit);