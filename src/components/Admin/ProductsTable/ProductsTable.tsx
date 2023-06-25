import React from "react";

import { 
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, RemoveBtn, 
    EditBtn, XLgIcon, PencilIcon 
} from './../AdminStyles';

import { IProductConnectedProps } from "./ProductsTableContainer";

import ProductsTableRow from "./ProductsTableRow/ProductsTableRow";
import { LOADING } from "types/types";
import Preloader from "components/Ui/Preloader/Preloader";

interface IProductsTableProps extends IProductConnectedProps{
}



const ProductsTable: React.FC<IProductsTableProps> = (props) => {

    const { products, loading, fetchToDeleteProduct, fetchProducts, setConfirmModalData } = props;

    React.useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    
    if (loading === LOADING) {
        return <Preloader />
    }

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
                        products.map((product, index) => <ProductsTableRow 
                                key={product.id}
                                index={index}
                                {...product}
                                fetchToDeleteProduct={fetchToDeleteProduct}
                                setConfirmModalData={setConfirmModalData}
                            />
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default ProductsTable;