import React from "react";

import SearchResultItem from "./SearchResultItem/SearchResultItem";

import { SearchResultWrapper } from "./SearchResultStyles";

interface ISearchResultProps {
}

const SearchResult: React.FC<ISearchResultProps> = (props) => {
    
    return (
        <>
            <SearchResultWrapper>
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
            </SearchResultWrapper>
        </>
    );
}

export default SearchResult;