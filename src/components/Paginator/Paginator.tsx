import React from 'react';
import styled from 'styled-components';
import PageButton from 'components/Ui/PageButton/PageButton';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux/store';
import { getTotal } from 'redux/reducers/product/selector';

const PaginatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 7px;
`;

const Paginator = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const total = useAppSelector(state => getTotal(state));
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        const pageParam = new URLSearchParams(location.search).get('page');
        if (pageParam) {
            setPage(parseInt(pageParam));
        }
    }, [location]);

    if (!total) return null;

    const handlePageClick = (newPage: string) => {

        setPage(parseInt(newPage));

        const searchParams = new URLSearchParams(location.search);

        searchParams.set('page', newPage);

        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    const renderPageButtons = () => {

        const buttons = [];

        for (let i = 1; i <= Math.ceil(total / 2); i++) {
            buttons.push(
                <PageButton key={i} onClick={() => handlePageClick(i.toString())}>
                    {i}
                </PageButton>
            );
        }

        return buttons;
    };

    if (!total) {
        return null;
    }

    return (
        <PaginatorWrapper>
            {page !== 1 && (
                <NavLink to={''}>
                    <PageButton onClick={() => handlePageClick((page - 1).toString())}> {'<'} </PageButton>
                </NavLink>
            )}

            {renderPageButtons()}

            {Math.ceil(total / 2) !== 1 && Math.ceil(total / 2) !== page && (
                <NavLink to={''}>
                    <PageButton onClick={() => handlePageClick((page + 1).toString())}> {'>'} </PageButton>
                </NavLink>
            )}
        </PaginatorWrapper>
    );
};

export default Paginator;