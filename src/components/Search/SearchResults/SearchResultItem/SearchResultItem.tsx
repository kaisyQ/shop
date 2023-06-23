import React from "react";

import { SearchResultItemWrapper, NumberBlock, NameBlock, RightArrrow } from "./SearchResultItemStyles";

import * as Icon from "react-bootstrap-icons";

interface ISearchResultItemProps {

}

const SearchResultItem: React.FC<ISearchResultItemProps> = (props) => {
    return (
        <>
            <SearchResultItemWrapper>
                <NumberBlock>1</NumberBlock>
                <NameBlock>natus error sit voluptatem</NameBlock>
                <RightArrrow>
                    <Icon.ArrowRight size={"3rem"} />
                </RightArrrow>
            </SearchResultItemWrapper>
        </>
    );
}

export default SearchResultItem;