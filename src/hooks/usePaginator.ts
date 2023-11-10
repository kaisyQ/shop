import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTotal } from 'store/reducers/product/ProductSelector';
import { useAppSelector } from 'store/store';
import { selectProductsLimit } from "store/reducers/product/ProductSelector";

export const usePaginator = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const limit = useAppSelector(state => selectProductsLimit(state));
    const total = useAppSelector(state => getTotal(state));
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        const pageParam = new URLSearchParams(location.search).get('page');
        if (pageParam) {
            setPage(parseInt(pageParam));
        }
    }, [location]);


    const handlePageClick = React.useCallback((newPage: string) => {

        setPage(parseInt(newPage));

        const searchParams = new URLSearchParams(location.search);

        searchParams.set('page', newPage);

        navigate(`${location.pathname}?${searchParams.toString()}`);

    }, [location]);

    return {
        page,
        total,
        limit,
        handlePageClick,
    }
}