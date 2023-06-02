import React from "react";

import{ TableWrapper, TableThead, TableTbody, TableTr, TableTd, RemoveBtn, EditBtn } from './../AdminStyles';

import * as Icon from 'react-bootstrap-icons';

import { IProductConnectedProps } from "./ProductsTableContainer";

interface IProductsTableProps extends IProductConnectedProps{
}

const ProductsTable: React.FC<IProductsTableProps> = ({ products, removeProduct, addProduct }) => {
    
    return (
        <>
            <TableWrapper>
                <TableThead>
                    <TableTr
                        oddRowBgColor="#ffbd78d1" 
                        oddRowTextColor="#000"
                    >
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
                                <TableTr  
                                    key={ product.id } 

                                    defaultRowBgColor="#fff"
                                    defaultRowTextColor="#ff6400"

                                    oddRowBgColor="#ffbd78d1" 
                                    oddRowTextColor="#000"                                                                
                                >
                                    <TableTd>{ product.id }</TableTd>
                                    <TableTd>{ product.name }</TableTd>
                                    <TableTd>{ product.price }</TableTd>
                                    <TableTd>{ product.count }</TableTd>
                                    <TableTd>
                                        <RemoveBtn onClick={(ev) => {
                                            removeProduct(product.id)
                                        }}>
                                            <Icon.XLg size={'2rem'} />
                                        </RemoveBtn>
                                    </TableTd>
                                    <TableTd>
                                        <EditBtn>
                                            <Icon.Pencil size={'2rem'} />
                                        </EditBtn>
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