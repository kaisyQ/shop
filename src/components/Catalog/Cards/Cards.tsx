import React from "react";

import Card from "./Card/Card";

import { Wrapper } from "./CardsStyles";

import { CardsConnectedPropsType } from "./CardsContainer";


const Cards: React.FC<CardsConnectedPropsType> = ({ items, fetchProducts }) => {

    React.useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
            <Wrapper>
            {
                items.map(item => <Card key={item.id} id={item.id} count={item.count} name={item.name} imageSrc={item.imagesSrc[0]} />)
            }
            </Wrapper>
        </>
    )
}

export default Cards;