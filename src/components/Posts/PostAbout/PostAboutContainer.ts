import PostAbout from "./PostAbout";

import { ConnectedProps, connect } from "react-redux";

import { fetchPostById } from "redux/reducers/posts/reducer";

import { getCurrentPost } from "../../../redux/reducers/posts/selector";

import { setCurrent } from "redux/reducers/posts/reducer";

import { RootState } from "redux/store";


const mapStateToProps = (state: RootState) => ({
    current: getCurrentPost(state)
});

const mapDispatchToProps = {
    fetchPostById, setCurrent
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PostAboutConnectedProps = ConnectedProps<typeof connector>;


export default connector(PostAbout);
