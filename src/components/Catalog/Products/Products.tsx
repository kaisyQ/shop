import React from "react";

import Product from "./Product/Product";
import Message from "components/Custom/Message/Message";
import Preloader from "components/Ui/Preloader/Preloader";
import Filter from "../Filter/Filter";
import { Wrapper } from "./ProductsStyles";

import { CardsConnectedPropsType } from "./ProductsContainer";

import { LOADING } from "constants/constants";
import { useLocation } from "react-router-dom";
import Paginator from "components/Paginator/Paginator";


const Products: React.FC<CardsConnectedPropsType> = ({ products, fetchProducts, loading }) => {
    
    const location = useLocation();

    React.useEffect(() => {
        
        const urlSearchParams = new URLSearchParams(location.search);

        const category = urlSearchParams.get("category");
        const page = urlSearchParams.get("page")
        const limit = urlSearchParams.get("limit")


        console.log(page, limit, category)

        fetchProducts(category);

    }, [location, fetchProducts])

    if (loading === LOADING) {
        return <Preloader />;
    }

    return (
        <>
        
        {
            products.length ? <>
                <Wrapper>
                    {
                        products.map(item => <Product 
                                key={item.id} 
                                id={item.id} 
                                count={item.count} 
                                name={item.name} 
                                imageSrc={item.imagesSrc[0]} 
                                slug={item.slug}
                            />
                        )
                    }
                </Wrapper>
                <Paginator />
            </> : <Message message="There's nothing here yet..." />
        }
        </>
    )
}

export default Products;