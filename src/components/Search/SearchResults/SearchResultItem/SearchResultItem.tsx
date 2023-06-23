import React from "react";

import { 
    SearchResultItemWrapper, NumberBlock, NameBlock, 
    RightArrrow, ImageWrapper, Image
} from "./SearchResultItemStyles";

import * as Icon from "react-bootstrap-icons";

interface ISearchResultItemProps {

}

const SearchResultItem: React.FC<ISearchResultItemProps> = (props) => {
    return (
        <>
            <SearchResultItemWrapper>
                <NumberBlock>1</NumberBlock>
                <ImageWrapper>
                    <Image src="https://i.pinimg.com/originals/f9/1a/fd/f91afd42d577e4fa7cf3353eaef914ad.jpg" />
                </ImageWrapper>
                <NameBlock>natus error sit voluptatem</NameBlock>
                <RightArrrow>
                    <Icon.ArrowRight size={"3rem"} />
                </RightArrrow>
            </SearchResultItemWrapper>
        </>
    );
}

export default SearchResultItem;