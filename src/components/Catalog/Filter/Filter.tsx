import React from "react";

import styled from  'styled-components';


import FilterMenuContainer from "./FilterMenu/FilterMenuContainer";

const FilterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
`;

export default () => {
    return (
        <>
            <FilterWrapper>
            
                <FilterMenuContainer />
            
            </FilterWrapper>
        </>
    );
}