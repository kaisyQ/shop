import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd,  } from './../AdminStyles';

import * as Icon from 'react-bootstrap-icons';

import { IBlogsTableConnectedProps } from "./BlogsTableContainer";

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
                                <TableTr key={ post.id }>
                                    <TableTd>{ post.id }</TableTd>
                                    <TableTd>{ post.title }</TableTd>
                                    <TableTd>{ post.date }</TableTd>
                                    <TableTd>{ post.text }</TableTd>
                                    <TableTd onClick={(ev) => {
                                        removePost(post.id)
                                    }}>
                                        <Icon.XLg size={'2rem'} />
                                    </TableTd>
                                    <TableTd>
                                        <Icon.Pencil size={'2rem'} />
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