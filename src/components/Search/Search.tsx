import React from "react";

import Input from "../Custom/Input/Input";

import * as Icon from 'react-bootstrap-icons';

import { SearchWrapper, SearchContainer, IconWrapper } from "./SearchStyles";

const Search: React.FC = () => {

    const [searchVl, setSearchVl] = React.useState('');


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
                        <Icon.Search color="#000" size={'3.5rem'} cursor='pointer' />
                    </IconWrapper>
                </SearchContainer>
            </SearchWrapper>
        </>
    );
}

export default Search;