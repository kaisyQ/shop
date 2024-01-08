import React from "react";

import { Input } from "@nextui-org/react";

import SearchResultContainer from "./SearchResults/SearchResultContainer";

import * as Icon from 'react-bootstrap-icons';

import { SearchWrapper, SearchContainer, IconWrapper } from "./SearchStyles";

import { NavLink, useLocation } from "react-router-dom";

import { SearchConnectedProps } from "./SearchContainer";

interface ISearchProps extends SearchConnectedProps {
}

const Search: React.FC<ISearchProps> = ({ fetchSearch, setSearchProducts }) => {

    const [searchVl, setSearchVl] = React.useState('');

    const location = useLocation();

    const searchQuery = new URLSearchParams(location.search).get("query");

    React.useEffect(() => {
        if (!searchQuery) {
            return;
        }
        setSearchVl(searchQuery);
        fetchSearch(searchQuery);

        return () => {
            setSearchProducts([]);
        }
    }, [searchQuery, fetchSearch, setSearchProducts]);

    const onSearchChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchVl(ev.target.value);
    }

    return (
        <>
            <SearchWrapper>
                
                <SearchContainer>
                    
                    <Input 
                        className="dark"
                        size="lg"
                        label='Search' 
                        value={searchVl} 
                        onChange={onSearchChange}
                    />
                
                    <IconWrapper>
                    
                        <NavLink to={`/search/?query=${searchVl}`}>
                    
                            <Icon.Search color="#fff" size={'35px'} cursor='pointer' />
                    
                        </NavLink>
                    
                    </IconWrapper>
                
                </SearchContainer>
                {
                    searchQuery ? <SearchResultContainer /> : null
                }
            
            </SearchWrapper>
        
        </>
    );
}

export default Search;