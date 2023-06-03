import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd, RemoveBtn, EditBtn } from '../AdminStyles';

import * as Icon from 'react-bootstrap-icons';

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
                        <TableTd></TableTd>
                        <TableTd></TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {
                        posts.map(post => <>
                                <TableTr 
                                    key={ post.id }  

                                    defaultRowBgColor="#ff840080" 
                                    defaultRowTextColor="#000000cf"
                                >
                                    <TableTd>{ post.id }</TableTd>
                                    <TableTd>{ post.title }</TableTd>
                                    <TableTd>{ post.date }</TableTd>
                                    <TableTd>{ post.text }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={(ev) => {
                                            removePost(post.id)
                                        }}>
                                            <Icon.XLg size={'2rem'} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to="/admin/post">
                                            <EditBtn>
                                                <Icon.Pencil size={'2rem'} />
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