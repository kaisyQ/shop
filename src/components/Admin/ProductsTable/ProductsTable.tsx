import React from "react";

import { 
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, RemoveBtn, 
    EditBtn, XLgIcon, PencilIcon 
} from './../AdminStyles';

import { IProductConnectedProps } from "./ProductsTableContainer";

import ProductsTableRow from "./ProductsTableRow/ProductsTableRow";

interface IProductsTableProps extends IProductConnectedProps{
}



const ProductsTable: React.FC<IProductsTableProps> = (props) => {

    const { products, fetchToDeleteProduct, fetchProducts, setConfirmModalData } = props;

    React.useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    
    return (
        <>
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
                        products.map((product, index) => <>
                                <ProductsTableRow 
                                    key={product.id}
                                    index={index}
                                    {...product}
                                    fetchToDeleteProduct={fetchToDeleteProduct}
                                    setConfirmModalData={setConfirmModalData}
                                />
                            </>
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default ProductsTable;