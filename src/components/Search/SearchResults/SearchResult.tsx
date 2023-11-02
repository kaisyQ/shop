import React from "react";

import SearchResultItem from "./SearchResultItem/SearchResultItem";

import Preloader from "components/Ui/Preloader/Preloader";

import Button from "components/Custom/Button/Button";

import { SearchResultWrapper, ResultItemsWrapper, SearchResultController } from "./SearchResultStyles";

import type { SearchResultConnectedProps } from "./SearchResultContainer";

import { LOADING } from "constants/constants";


interface ISearchResultProps extends SearchResultConnectedProps{
}

const SearchResult: React.FC<ISearchResultProps> = ({ products, loading }) => {
    
    
    const [showItemType, setShowItemType] = React.useState<"POST" | "PRODUCT" | null>(null);

    React.useEffect(() => {
        if (!products.length) {
            setShowItemType(null);
            return;
        }
        products.length ? setShowItemType("PRODUCT") : setShowItemType("POST");

    }, [products])

    if (loading === LOADING) {
        return <Preloader />;
    }

    return (
        <>
            <SearchResultWrapper>
                <ResultItemsWrapper>
                {
                    !showItemType ? null : 
                        products.map((post, index) => <SearchResultItem 
                        type={"PRODUCT"} key={post.id} {...post} index={index+1} 
                        />
                    )
                }
                </ResultItemsWrapper>
            </SearchResultWrapper>
        </>
    );
}

export default React.memo(SearchResult);