import React from "react";

import { 
    TableWrapper, TableThead, TableTbody, 
    TableTr, TableTd, RemoveBtn, 
    EditBtn, XLgIcon, PencilIcon 
} from './../AdminStyles';

import { IProductConnectedProps } from "./ProductsTableContainer";

import { NavLink } from "react-router-dom";


interface IProductsTableProps extends IProductConnectedProps{
}



const ProductsTable: React.FC<IProductsTableProps> = (props) => {

    const { products, fetchToDeleteProduct, fetchProducts, setConfirmModalData } = props;

    React.useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    
    const onDeleteClick = (id: string) => {
        setConfirmModalData({ 
            isVisible: true, 
            callback: () => fetchToDeleteProduct(id), 
            message: "Are you sure? The product will be deleted..."
        });
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
                        products.map((product, index) => <>
                                <TableTr key={ product.id }>
                                    <TableTd>{ index+1 }</TableTd>
                                    <TableTd>{ product.name }</TableTd>
                                    <TableTd>{ product.price }</TableTd>
                                    <TableTd>{ product.count }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={(ev) => onDeleteClick(product.id)}>
                                            <XLgIcon colorindex={index} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to={`/admin/product/${product.id}`}>
                                            <EditBtn>
                                                <PencilIcon colorindex={index} />
                                            </EditBtn>
                                        </NavLink>
                                    </TableTd>
                                </TableTr>
                            </>
                        )
                    }
                </TableTbody>
            </TableWrapper>
        </>
    );
}

export default ProductsTable;