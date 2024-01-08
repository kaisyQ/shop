import React from "react";
import styled from  'styled-components';
import CategoriesContainer from "./Categories/CategoriesContainer";
import PriceFilter from "./PriceFilter/PriceFilter";
import RadioFilter from "./RadioFilter/RadioFilter";

const FilterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
    gap: 20px;
    z-index: 9;
`;


const Filter = () => {
    return (
        <>
            <FilterWrapper>
            
                <CategoriesContainer />
            
                <PriceFilter />

                <RadioFilter />

            </FilterWrapper>
        </>
    );
}

export default Filter;