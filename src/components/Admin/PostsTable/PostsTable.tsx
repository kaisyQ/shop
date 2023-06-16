import React from "react";

import {
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, RemoveBtn, 
    EditBtn, XLgIcon, PencilIcon 
} from '../AdminStyles';

import { IBlogsTableConnectedProps } from "./PostsTableContainer";

import { NavLink } from "react-router-dom";

interface IBlogsTableProps extends IBlogsTableConnectedProps {
}

const PostsTable: React.FC<IBlogsTableProps> = (props) => {
    
    const { posts, fetchToDeletePost, fetchPosts, setConfirmModalData } = props;

    React.useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);


    const onDeleteClick = (id: string) => {
        setConfirmModalData({ 
            isVisible: true, 
            callback: () => fetchToDeletePost(id), 
            message: "Are you sure? The post will be deleted..."
        });
    }

    return (
        <>
            <TableWrapper>
                <TableThead>
                    <TableTr>
                        <TableTd>Id</TableTd>
                        <TableTd>Title</TableTd>
                        <TableTd>Date</TableTd>
                        <TableTd>Description</TableTd>
                        <TableTd>Delete</TableTd>
                        <TableTd>Edit</TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {
                        posts.map((post, index) => <>
                                <TableTr key={ post.id }>
                                    <TableTd>{ index+1 }</TableTd>
                                    <TableTd>{ post.title }</TableTd>
                                    <TableTd>{ post.date.toLocaleDateString() }</TableTd>
                                    <TableTd>{ post.text }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={(ev) => onDeleteClick(post.id)}>
                                            <XLgIcon colorindex={index} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to={`/admin/post/${post.id}`}>
                                            <EditBtn>
                                                <PencilIcon colorindex={index} />
                                            </EditBtn>
                                        </NavLink>
                                    </TableTd>
                                </TableTr>
                            </>
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default PostsTable;