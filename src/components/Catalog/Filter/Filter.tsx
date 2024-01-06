import React from "react";

import styled from  'styled-components';


import FilterMenuContainer from "./FilterMenu/FilterMenuContainer";

const FilterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
    z-index: 9;
`;


const Filter = () => {
    return (
        <>
            <FilterWrapper>
            
                <FilterMenuContainer />
            
            </FilterWrapper>
        </>
    );
}

export default Filter;