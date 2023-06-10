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

const BlogsTable: React.FC<IBlogsTableProps> = ({ posts, removePost }) => {
    
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
                                    <TableTd>{ post.id }</TableTd>
                                    <TableTd>{ post.title }</TableTd>
                                    <TableTd>{ post.date }</TableTd>
                                    <TableTd>{ post.text }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={(ev) => {
                                            removePost(post.id)
                                        }}>
                                            <XLgIcon colorIndex={index} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to="/admin/post">
                                            <EditBtn>
                                                <PencilIcon colorIndex={index} />
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

export default BlogsTable;