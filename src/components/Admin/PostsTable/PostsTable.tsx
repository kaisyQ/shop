import React from "react";

import { LOADING } from "constants/constants";

import { 
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, FilterSearch, FilterWrapper
} from '../AdminStyles';

import { IBlogsTableConnectedProps } from "./PostsTableContainer";

import PostsTableRow from "./PostsTableRow/PostsTableRow";

import Preloader from "components/Ui/Preloader/Preloader";

import type { SelectType } from "types/types";

import { SELECT_OLDEST, SELECT_NEWEST } from "constants/constants";

interface IPostTableProps extends IBlogsTableConnectedProps {
}

const PostsTable: React.FC<IPostTableProps> = (props) => {
    
    const { 
        posts, loading, fetchToDeletePost, 
        fetchPosts, setConfirmModalData, setSearchValue,
        setSelectorType, search, select
    } = props;

    React.useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const deletePost = React.useCallback((id: string) => {
        setConfirmModalData({ 
            isVisible: true, 
            callback: () => fetchToDeletePost(id), 
            message: "Are you sure? The post will be deleted..."
        });
    }, [fetchToDeletePost, setConfirmModalData]);

    if (loading === LOADING) {
        return <Preloader />;
    }

    return (
        <>
            <FilterWrapper>
                <FilterSearch placeholder="Search" value={search} onChange={(ev) => setSearchValue(ev.target.value)}/>
                <div>
                    <h3>Sort by</h3>
                    <select name="" id="" onChange={(ev) => setSelectorType(ev.target.value as SelectType)}>
                        <option selected={select===SELECT_OLDEST} value={SELECT_OLDEST}>Oldest</option>
                        <option selected={select===SELECT_NEWEST} value={SELECT_NEWEST}>Newest</option>
                    </select>
                </div>
            </FilterWrapper>
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
                        posts.map((post, index) => <PostsTableRow 
                                index={index}
                                key={post.id}
                                {...post}
                                delete={deletePost}
                            />
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default React.memo(PostsTable);