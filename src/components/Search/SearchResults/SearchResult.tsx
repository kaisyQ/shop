import React from "react";
import SearchResultItem from "./SearchResultItem/SearchResultItem";
import Preloader from "shared/Preloader/Preloader";
import { SearchResultWrapper, ResultItemsWrapper } from "./SearchResultStyles";
import type { SearchResultConnectedProps } from "./SearchResultContainer";
import { LOADING } from "constants/constants";


interface ISearchResultProps extends SearchResultConnectedProps{
}

const SearchResult: React.FC<ISearchResultProps> = ({ products, loading }) => {

    if (loading === LOADING) {
        return <Preloader />;
    }

    return (
        <>
            <SearchResultWrapper>
                
                <ResultItemsWrapper>
                {
                    products.map((product, index) => <React.Fragment key={product.id}>
                            
                            <SearchResultItem searchedProduct={product} index={index+1} />
                        
                        </React.Fragment>
                    )
                }
                </ResultItemsWrapper>
            
            </SearchResultWrapper>
        </>
    );
}

export default React.memo(SearchResult);