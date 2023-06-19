import React from "react";

import { TableWrapper, TableThead, TableTbody, TableTr, TableTd } from '../AdminStyles';

import { IBlogsTableConnectedProps } from "./PostsTableContainer";

import PostsTableRow from "./PostsTableRow/PostsTableRow";

interface IBlogsTableProps extends IBlogsTableConnectedProps {
}

const PostsTable: React.FC<IBlogsTableProps> = (props) => {
    
    const { posts, fetchToDeletePost, fetchPosts, setConfirmModalData } = props;

    React.useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

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
                                <PostsTableRow 
                                    index={index}
                                    key={post.id}
                                    {...post}
                                    setConfirmModalData={setConfirmModalData}
                                    fetchToDeletePost={fetchToDeletePost}
                                />
                            </>
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default PostsTable;