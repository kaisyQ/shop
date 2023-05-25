import React from "react";

import PageButton from "./PageButton/PageButton";

import { Wrapper } from "./PagintationStyles";

interface IPaginationProps {
    count: number,
    pageId: number
}

const Pagination: React.FC<IPaginationProps> = ({ count, pageId }) => {

    const pageNumbers = []

    for (let number = 1; number <= count; ++number) {
        pageNumbers.push(number)
    }

    return (
        <>
            <Wrapper>
            {
                pageNumbers.map((number, index) => <PageButton key={index} isCurrent={pageId === number} number={number} />)
            }
            </Wrapper>
        </>
    );
}

export default Pagination;