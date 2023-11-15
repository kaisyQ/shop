import React from "react";

import { 
    SearchResultItemWrapper, NumberBlock, NameBlock, 
    RightBlock, ImageWrapper, Image
} from "./SearchResultItemStyles";

import { NavLink } from "react-router-dom";
import { API_URL } from "constants/constants";
import { SearchedProduct } from "models/SearchedProduct";
import Button from "components/Custom/Button/Button";

interface ISearchResultItemProps {
    index: number,
    searchedProduct: SearchedProduct
}

const SearchResultItem: React.FC<ISearchResultItemProps> = (props) => {
    return (
        <>
            <NavLink to={`/catalog/${props.searchedProduct.slug}`}>
                
                <SearchResultItemWrapper>
                
                    <NumberBlock>{ props.index }</NumberBlock>
                
                    <ImageWrapper>
                    
                        <Image src={`${API_URL}${props.searchedProduct.image}`} />
                    
                    </ImageWrapper>

                    <RightBlock>
                
                        <NameBlock>{ props.searchedProduct.name }</NameBlock>
                    
                        <Button isReverse={true}>Show</Button>
                    
                    </RightBlock>
                
                </SearchResultItemWrapper>
            
            </NavLink>
        </>
    );
}

export default SearchResultItem;