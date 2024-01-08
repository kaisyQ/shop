import React from "react";
import Categories from "./Categories";
import type { FilterMenuProps } from "./CategoriesContainer";

interface FilterMenuApiContainerProps extends FilterMenuProps {}

const FilterMenuApiContainer: React.FC<FilterMenuApiContainerProps> = (props) => {
    const {fetchCategories, ...categoriesProps} = props;

    React.useEffect(() => {
        fetchCategories();
    }, [fetchCategories])

    return (
        
        <>

            <Categories {...categoriesProps} />

        </>
    );
}

export default FilterMenuApiContainer;