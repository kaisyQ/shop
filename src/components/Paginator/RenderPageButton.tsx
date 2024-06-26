import React from 'react';
import PageButton from "shared/PageButton/PageButton";

export const renderPageButtons = (page: number, total: number, limit: number, handlePageClick: (page: string) => void) => {

    const buttons = [];

    let start = page - 1;
    let end = page + 1;

    if (page === 1) {
        start = 1;
    }

    if (page + 1 >= Math.ceil(total / limit)) {
        end = Math.ceil(total / limit);
    }

    for (let i = start; i <= end; ++i) {
        buttons.push(
            <PageButton current={i === page} key={i} onClick={() => handlePageClick(i.toString())}>
                {i}
            </PageButton>
        );
    }
    return buttons;
};
