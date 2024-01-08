import React from "react";
import Product from "./Product/Product";
import Message from "components/Custom/Message/Message";
import Preloader from "components/Ui/Preloader/Preloader";
import { Wrapper } from "./ProductsStyles";
import { CardsConnectedPropsType } from "./ProductsContainer";
import { LOADING } from "constants/constants";
import { useLocation } from "react-router-dom";
import Paginator from "components/Paginator/Paginator";
import { useAppSelector } from "store/store";
import { selectIsOldest, selectIsSortByAlphabetAtoZ, selectPriceFrom, selectPriceTo } from "store/reducers/product/ProductSelector";


const Products: React.FC<CardsConnectedPropsType> = ({ products, fetchProducts, loading }) => {
    
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); 
    
    const limit = useAppSelector(state => state.product.limit);
    const isOldest = useAppSelector(state => selectIsOldest(state));
    const isSortByAlphabetAtoZ = useAppSelector(state => selectIsSortByAlphabetAtoZ(state));
    const priceTo = useAppSelector(state => selectPriceTo(state));
    const priceFrom = useAppSelector(state => selectPriceFrom(state));

    React.useEffect(() => {
        
        const urlSearchParams = new URLSearchParams(location.search);

        const category = urlSearchParams.get("category");
        const page = urlSearchParams.get("page");

        fetchProducts({
            category: category, 
            page: page, 
            limit: limit,
            isOldest,
            isSortByAlphabetAtoZ,
            priceFrom,
            priceTo
        });

    }, [location, fetchProducts, limit, isOldest, isSortByAlphabetAtoZ, priceTo, priceFrom]);

    if (loading === LOADING) {
        return <Preloader />;
    }

    return (
        <>
        
        {
            products.length ? <>
                <Wrapper>
                    {
                        products.map((item) => <Product product={item} key={item.slug} />)
                    }
                </Wrapper>
                <Paginator />
            
            </> : <Message message="There's nothing here yet..." />
        }
        </>
    )
}

export default Products;