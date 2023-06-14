import React from "react";

import Product from "./Card/Product";

import { Wrapper } from "./ProductsStyles";

import { CardsConnectedPropsType } from "./ProductsContainer";


const Cards: React.FC<CardsConnectedPropsType> = ({ items, fetchProducts }) => {

    React.useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
            <Wrapper>
            {
                items.map(item => <Product key={item.id} id={item.id} count={item.count} name={item.name} imageSrc={item.imagesSrc[0]} />)
            }
            </Wrapper>
        </>
    )
}

export default Cards;