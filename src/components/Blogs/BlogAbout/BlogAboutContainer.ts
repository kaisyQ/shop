import BlogAbout from "./BlogAbout"

import { ConnectedProps, connect } from "react-redux"

import { 
    setCurrent as setCurrentBlogItem, 
    createBlogItem,
    updateBlogItem,
    removeBlogItem,
} from "../../../redux/reducers/blog/reducer"

import { getCurrentBlogItem } from "../../../redux/reducers/blog/selector"

import { RootState } from "redux/store"
import { IBlogType } from "types/types"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

interface IMapStateToPropsType {
    current: IBlogType | null
}

interface IMapDispatchToPropsType {
    setCurrentBlogItem: ActionCreatorWithPayload<number>,
    createBlogItem: ActionCreatorWithPayload<any>,
    updateBlogItem: ActionCreatorWithPayload<any>,
    removeBlogItem:ActionCreatorWithPayload<number>
}

const mapStateToProps = (state: RootState): IMapStateToPropsType => ({
    current: getCurrentBlogItem(state)
});

const mapDispatchToProps: IMapDispatchToPropsType = {
    setCurrentBlogItem, createBlogItem, updateBlogItem, removeBlogItem
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type BlogAboutConnectedProps = ConnectedProps<typeof connector>


export default connector(BlogAbout);
