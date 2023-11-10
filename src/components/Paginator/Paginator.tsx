import React from 'react';
import styled from 'styled-components';
import PageButton from 'components/Ui/PageButton/PageButton';
import { usePaginator } from 'hooks/usePaginator';
import { renderPageButtons } from './RenderPageButton';

const PaginatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 7px;
    @media only screen and (max-width: 400px) {
        gap: 3px; 
    }
`;

const Paginator = () => {

    const { page, total, limit, handlePageClick } = usePaginator();
    
    if (!total) return null;

    if (Math.ceil(total / limit) === 1) return null;


    return (
        <PaginatorWrapper>

            {page !== 1 && page !== 2 && (
                <PageButton onClick={() => handlePageClick((1).toString())}> {'<<'} </PageButton>
            )}

            {page !== 1 && (
                <PageButton onClick={() => handlePageClick((page - 1).toString())}> {'<'} </PageButton>
            )}

            {renderPageButtons(page, total, limit, handlePageClick)}

            {Math.ceil(total / limit) !== 1 && Math.ceil(total / limit) !== page && (
                <PageButton onClick={() => handlePageClick((page + 1).toString())}> {'>'} </PageButton>
            )}


            {page !== Math.ceil(total / limit) && page !== (Math.ceil(total / limit) - 1) && (
                <PageButton onClick={() => handlePageClick((Math.ceil(total / limit)).toString())}> {'>>'} </PageButton>
            )}

        </PaginatorWrapper>
    );
};

export default Paginator;