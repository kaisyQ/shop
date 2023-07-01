import React from "react";

import { 
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, FilterWrapper, 
    SortBy, FilterSearch
} from './../AdminStyles';

import { IProductConnectedProps } from "./ProductsTableContainer";

import ProductsTableRow from "./ProductsTableRow/ProductsTableRow";

import { LOADING } from "constants/constants";

import Preloader from "components/Ui/Preloader/Preloader";

import { SELECT_NEWEST, SELECT_OLDEST } from "constants/constants";

import type { SelectType } from "types/types";

import { TopCheckboxLabel } from "./ProductTableStyles";

interface IProductsTableProps extends IProductConnectedProps{
}



const ProductsTable: React.FC<IProductsTableProps> = (props) => {

    const { 
        products, loading, fetchToDeleteProduct, 
        fetchProducts, setConfirmModalData, setSelectorType, 
        setSearchValue, setFilteredByTop, search, select, filteredByTop
    } = props;

    React.useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    
    const deleteProduct = React.useCallback((id: string) => {
        setConfirmModalData({ 
            isVisible: true, 
            callback: () => fetchToDeleteProduct(id), 
            message: "Are you sure? The product will be deleted..."
        });
    }, [fetchToDeleteProduct, setConfirmModalData]);

    if (loading === LOADING) {
        return <Preloader />;
    }

    return (
        <>
            <FilterWrapper>
                <FilterSearch placeholder="Search" value={search} onChange={(ev) => setSearchValue(ev.target.value)}/>
                <SortBy>
                    <h3>Sort by</h3>
                    <select name="" id="" onChange={(ev) => setSelectorType(ev.target.value as SelectType)}>
                        <option selected={select===SELECT_OLDEST}  value={SELECT_OLDEST}>Oldest</option>
                        <option selected={select===SELECT_NEWEST}  value={SELECT_NEWEST}>Newest</option>
                    </select>
                </SortBy>
                <div>
                    <TopCheckboxLabel>
                        <span>Top Of the week</span>
                        <input type="checkbox" checked={filteredByTop} onChange={(ev) => setFilteredByTop(!filteredByTop)} />
                    </TopCheckboxLabel>
                </div>
            </FilterWrapper>
            <TableWrapper>
                <TableThead>
                    <TableTr>
                        <TableTd>Id</TableTd>
                        <TableTd>Name</TableTd>
                        <TableTd>Price</TableTd>
                        <TableTd>Count</TableTd>
                        <TableTd>Delete</TableTd>
                        <TableTd>Edit</TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {
                        products.map((product, index) => <ProductsTableRow 
                                key={product.id}
                                index={index}
                                {...product}
                                delete={deleteProduct}
                            />
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default React.memo(ProductsTable);