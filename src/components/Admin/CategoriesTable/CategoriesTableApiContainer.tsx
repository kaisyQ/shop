import React from "react";
import CategoriesTable from "./CategoriesTable";
import { IConnectedProps } from "./CategoriesTableContainer";

const CategoryTableApiContainer: React.FC<IConnectedProps> = (props) => {
    
    const {fetchCategories, ...categoryTableProps} = props;

    React.useEffect(() => {
        props.fetchCategories()
    }, [])

    return (
        <>
            <CategoriesTable {...categoryTableProps}/>
        </>
    );
}

export default CategoryTableApiContainer;