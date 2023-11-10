import React from 'react';
import PageButton from "components/Ui/PageButton/PageButton";

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

    //if (page === Math.ceil(total / limit) && page - 1 !== 1) {
    //    buttons.push(
    //        <PageButton key={'1'} onClick={() => handlePageClick('1')}>
    //            1
    //        </PageButton>
    //    )
    //}

    for (let i = start; i <= end; ++i) {
        buttons.push(
            <PageButton current={i === page} key={i} onClick={() => handlePageClick(i.toString())}>
                {i}
            </PageButton>
        );
    }
    return buttons;
};
