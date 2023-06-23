import React from "react";

import Input from "../Custom/Input/Input";
import SearchResult from "./SearchResults/SearchResult";

import * as Icon from 'react-bootstrap-icons';

import { SearchWrapper, SearchContainer, IconWrapper } from "./SearchStyles";

import { NavLink, useLocation } from "react-router-dom";

const Search: React.FC = () => {

    const [searchVl, setSearchVl] = React.useState('');

    const location = useLocation();

    const searchQuery = new URLSearchParams(location.search).get("query");

    React.useEffect(() => {
        console.log(searchQuery);
    }, [searchQuery])

    const onSearchChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchVl(ev.target.value);
    }

    return (
        <>
            <SearchWrapper>
                <SearchContainer>
                    <Input 
                        fontSize={'1.8rem'} 
                        padding={'3rem 7rem 3rem 2rem'} 
                        id='header-search' 
                        placeholder='Search' 
                        value={searchVl} 
                        onChange={onSearchChange}
                    />
                    <IconWrapper>
                        <NavLink to={`/search/?query=${searchVl}`}>
                            <Icon.Search color="#000" size={'3.5rem'} cursor='pointer' />
                        </NavLink>
                    </IconWrapper>
                </SearchContainer>
                {
                    searchQuery ? <SearchResult /> : null
                }
            </SearchWrapper>
        </>
    );
}

export default Search;