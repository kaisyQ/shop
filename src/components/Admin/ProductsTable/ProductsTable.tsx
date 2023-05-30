import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd,  } from './../AdminStyles';

import * as Icon from 'react-bootstrap-icons';

import { IProductConnectedProps } from "./ProductsTableContainer";

interface IProductsTableProps extends IProductConnectedProps{
}

const ProductsTable: React.FC<IProductsTableProps> = ({ products, removeProduct, addProduct }) => {
    
    return (
        <>
            <TableWrapper>
                <TableThead>
                    <TableTr>
                        <TableTd>Id</TableTd>

                        <TableTd>Name</TableTd>
                        <TableTd>Price</TableTd>
                        <TableTd>Count</TableTd>
                        <TableTd></TableTd>
                        <TableTd></TableTd>
                    </TableTr>
                </TableThead>
                <TableTbody>
                    {
                        products.map(product => <>
                                <TableTr key={ product.id }>
                                    <TableTd>{ product.id }</TableTd>
                                    <TableTd>{ product.name }</TableTd>
                                    <TableTd>{ product.price }</TableTd>
                                    <TableTd>{ product.count }</TableTd>
                                    <TableTd onClick={(ev) => {
                                        removeProduct(product.id)
                                    }}>
                                        <Icon.XLg size={'2rem'} />
                                    </TableTd>
                                    <TableTd>
                                        <Icon.Pencil size={'2rem'} />
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