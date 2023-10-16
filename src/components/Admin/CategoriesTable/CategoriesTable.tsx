import React from "react";
import { TableWrapper, TableThead, TableTd, TableTbody, TableTdInner, TableTr } from "../AdminStyles";
import { ICategory } from "redux/reducers/categories/categories.slice";
import CategoriesTableRow from "./CategoriesTableRow/CategoriesTableRow";

interface ICategoryTableProps {
    categories: Array<ICategory>,
    fetchToDeleteCategory: (arg: string) => Promise<any> & {
        abort: (reason?: string | undefined) => void;
        requestId: string;
        arg: string;
        unwrap: () => Promise<any>;
    };
}

const CategoriesTable: React.FC<ICategoryTableProps> = ({categories, fetchToDeleteCategory}) => {
    return (
        <>
            <TableWrapper>
                <TableThead>
                    <TableTr>
                        <TableTd>Id</TableTd>
                        <TableTd>Name</TableTd>
                        <TableTd>Delete</TableTd>
                        <TableTd>Edit</TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                {
                    categories.map((category, index) => <React.Fragment key={category.slug}>
                        
                            <CategoriesTableRow 
                                name={category.name} index={index}
                                id={category.id} slug={category.slug}
                                delete={(slug: string) => fetchToDeleteCategory(slug)}
                            />  
                        
                        </React.Fragment>
                    )
                }                
                </TableTbody>
            </TableWrapper>  
        </>
    );
}

export default CategoriesTable;