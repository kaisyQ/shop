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

const ProductsTable: React.FC<IProductsTableProps> = ({ products, removeProduct }) => {
    
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
                                    <TableTd>{ product.id }</TableTd>
                                    <TableTd>{ product.name }</TableTd>
                                    <TableTd>{ product.price }</TableTd>
                                    <TableTd>{ product.count }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={(ev) => {
                                            removeProduct(product.id)
                                        }}>
                                            <XLgIcon colorIndex={index} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <NavLink to="/admin/product">
                                            <EditBtn>
                                                <PencilIcon colorIndex={index} />
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