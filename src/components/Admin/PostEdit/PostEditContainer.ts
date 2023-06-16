import PostEditApiContainer from "./PostEditApiContainer";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "redux/store";

import { getCurrentPost } from "redux/reducers/posts/selector";
import { getIsAuth } from "redux/reducers/auth/selector";

import { 
    updatePost, fetchPostById, fetchToCreatePost, setCurrent, fetchToUpdatePost
} from "redux/reducers/posts/reducer";

import { setConfirmModalData } from "redux/reducers/styles/stylesSlice";

import withAuthRedirect from "components/Hoc/Redirect";

const mapStateToProps = (state: RootState) => ({
    post: getCurrentPost(state),
    isAuth: getIsAuth(state)
});

const mapDispatchToProps = {
    updatePost, fetchPostById, fetchToCreatePost, 
    setCurrent, fetchToUpdatePost, setConfirmModalData
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type IPostEditApiConnectedProps = ConnectedProps<typeof connector>;

export default connector(withAuthRedirect(PostEditApiContainer));