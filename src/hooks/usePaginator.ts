import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTotal } from 'redux/reducers/product/selector';
import { useAppSelector } from 'redux/store';
import { selectProductsLimit } from "redux/reducers/product/selector";

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