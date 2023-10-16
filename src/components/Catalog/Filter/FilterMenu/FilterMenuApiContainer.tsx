import React from "react";

import FilterMenu from "./FilterMenu";

import type { FilterMenuProps } from "./FilterMenuContainer";

interface FilterMenuApiContainerProps extends FilterMenuProps {}

const FilterMenuApiContainer: React.FC<FilterMenuApiContainerProps> = (props) => {
    const {fetchCategories, ...menuProps} = props;

    React.useEffect(() => {
        fetchCategories();
    }, [])

    return (
        
        <>

            <FilterMenu {...menuProps} />

        </>
    );
}

export default FilterMenuApiContainer;