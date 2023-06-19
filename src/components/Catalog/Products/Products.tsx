import React from "react";

import Product from "./Product/Product";
import Message from "components/Custom/Message/Message";
import { Wrapper } from "./ProductsStyles";

import { CardsConnectedPropsType } from "./ProductsContainer";


const Products: React.FC<CardsConnectedPropsType> = ({ products, fetchProducts }) => {
    
    console.log("render", "main")
    
    React.useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
        {
            products.length ? <>
                <Wrapper>
                {
                    products.map(item => <>
                            <Product 
                                key={item.id} 
                                id={item.id} 
                                count={item.count} 
                                name={item.name} 
                                imageSrc={item.imagesSrc[0]} 
                            />
                        </>
                    )
                }
                </Wrapper>
            </> : <Message message="There's nothing here yet..." />
        }
        </>
    )
}

export default Products;