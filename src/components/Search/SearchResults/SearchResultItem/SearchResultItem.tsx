import React from "react";

import { 
    SearchResultItemWrapper, NumberBlock, NameBlock, 
    RightArrrow, ImageWrapper, Image
} from "./SearchResultItemStyles";

import * as Icon from "react-bootstrap-icons";

import { NavLink } from "react-router-dom";
import { API_URL } from "constants/constants";
import { SearchedProduct } from "models/SearchedProduct";

interface ISearchResultItemProps {
    index: number,
    searchedProduct: SearchedProduct
}

const SearchResultItem: React.FC<ISearchResultItemProps> = (props) => {
    console.log(props)
    return (
        <>
            <NavLink to={`/catalog/${props.searchedProduct.slug}`}>
                
                <SearchResultItemWrapper>
                
                    <NumberBlock>{ props.index }</NumberBlock>
                
                    <ImageWrapper>
                    
                        <Image src={`${API_URL}${props.searchedProduct.image}`} />
                    
                    </ImageWrapper>
                
                    <NameBlock>{ props.searchedProduct.name }</NameBlock>
                
                    <RightArrrow>
                    
                        <Icon.ArrowRight size={"3rem"} />
                    
                    </RightArrrow>
                
                </SearchResultItemWrapper>
            
            </NavLink>
        </>
    );
}

export default SearchResultItem;