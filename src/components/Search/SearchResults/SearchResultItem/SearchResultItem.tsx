import React from "react";

import { 
    SearchResultItemWrapper, NumberBlock, NameBlock, 
    RightArrrow, ImageWrapper, Image
} from "./SearchResultItemStyles";

import * as Icon from "react-bootstrap-icons";

import { NavLink } from "react-router-dom";
import { API_URL } from "constants/constants";

interface ISearchResultItemProps {
    name: string,
    id: string,
    imageSrc: string,
    index: number,
    type: "POST" | "PRODUCT"
}

const SearchResultItem: React.FC<ISearchResultItemProps> = (props) => {
    console.log(props)
    return (
        <>
            <NavLink to={`/${props.type === "POST" ? "posts" : "catalog"}/${props.id}`}>
                <SearchResultItemWrapper>
                    <NumberBlock>{ props.index }</NumberBlock>
                    <ImageWrapper>
                        <Image src={`${API_URL}${props.imageSrc}`} />
                    </ImageWrapper>
                    <NameBlock>{ props.name }</NameBlock>
                    <RightArrrow>
                        <Icon.ArrowRight size={"3rem"} />
                    </RightArrrow>
                </SearchResultItemWrapper>
            </NavLink>
        </>
    );
}

export default SearchResultItem;